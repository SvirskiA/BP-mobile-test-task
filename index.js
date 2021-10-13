const languages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];

const sistemLanguage = navigator.language.split('-')[0];

const url = 'http://localhost:3000/';

const pricePerMonth = '$9.99';
const pricePerYear = '$19.99';
const priceAnnuallyPerMonth = '$1.66';

let searchLang = window.location.search.split('=')[1];

function translate(arr) {
    const translatedTegs = document.querySelectorAll('.field');
    const mainHeading = document.querySelector('.main_heading');

    searchLang === 'fr' || searchLang === 'ru' || sistemLanguage === 'fr' || sistemLanguage === 'ru'
        ? mainHeading.classList.add('main_heading_small')
        : mainHeading.classList.remove('main_heading_small');

    for (let i = 0; i < translatedTegs.length; i++) {
        
        if (translatedTegs[i].dataset.eng.includes('{{price}}')) {
            let tegClassList = translatedTegs[i].classList.value;
            
            if (tegClassList.includes('price-in-month')) {
                translatedTegs[i].innerHTML = arr[translatedTegs[i].dataset.eng].replace('{{price}}', pricePerMonth);
            } else if (tegClassList.includes('price_1')){
                translatedTegs[i].innerHTML = arr[translatedTegs[i].dataset.eng].replace('{{price}}', pricePerMonth);
            } else if (tegClassList.includes('price_2')) {
                translatedTegs[i].innerHTML = arr[translatedTegs[i].dataset.eng].replace('{{price}}', priceAnnuallyPerMonth);
            } else if (tegClassList.includes('price-in-year')) {
                translatedTegs[i].innerHTML = arr[translatedTegs[i].dataset.eng].replace('{{price}}', pricePerYear);
            }

        } else {
            translatedTegs[i].innerHTML = arr[translatedTegs[i].dataset.eng];
        }
    }
}

function getLang() {
    let pageLang;
    if (!!window.location.search) {
        languages.includes(searchLang)
            ? pageLang = searchLang
            : pageLang = 'en';
    } else {
        pageLang = sistemLanguage;
    }
    return pageLang;
}

fetch(url + 'Localizations/' + getLang() + '.json')
    .then(response => response.json())
    .then(data => translate(data));

let monthlyOffer = document.querySelector('.offer_item__monthly');
let annuallyOffer = document.querySelector('.offer_item__annually');
let continueLink = document.querySelector('.continue');

monthlyOffer.addEventListener('click', () => {
    monthlyOffer.classList.remove('not-checked-offer');
    annuallyOffer.classList.add('not-checked-offer');
    continueLink.href = 'https://apple.com/';
})

annuallyOffer.addEventListener('click', () => {
    annuallyOffer.classList.remove('not-checked-offer');
    monthlyOffer.classList.add('not-checked-offer');
    continueLink.href = 'https://google.com/';
})
