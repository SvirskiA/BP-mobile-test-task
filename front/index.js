const languages = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh'];

const sistemLanguage = navigator.language.split('-')[0];

const url = 'http://localhost:3001/';

const pricePerMonth = '$9.99';
const pricePerYear = '$19.99';
const priceAnnuallyPerMonth = '$1.66';

let searchLang = window.location.search.split('=')[1];

function translate(textData) {
    const mainHeading = document.querySelector('.main_heading');
    mainHeading.innerHTML = textData["Unlimited Access<br>to All Features"];
    searchLang === 'fr' || searchLang === 'ru' || sistemLanguage === 'fr' || sistemLanguage === 'ru'
        ? mainHeading.classList.add('main_heading_small')
        : mainHeading.classList.remove('main_heading_small');

    const feature1 = document.querySelector('#feature_1');
    feature1.innerHTML = textData["Unlimited documents"];
    const feature2 = document.querySelector('#feature_2');
    feature2.innerHTML = textData["Count mode"];
    const feature3 = document.querySelector('#feature_3');
    feature3.innerHTML = textData["Text recognition (OCR)"];
    const mounthly = document.querySelector('#mounthly');
    mounthly.innerHTML = textData["Monthly"]
    const price = document.querySelector('#price-in-month');
    price.innerHTML = textData["<strong>{{price}}</strong><br>per month"]
        .replace('{{price}}', pricePerMonth);
    const fact = document.querySelector('#fact');
    fact.innerHTML = textData["3 DAYS FREE"];
    const monthPrice1 = document.querySelector('.price_1');
    monthPrice1.innerHTML = textData["{{price}}/month"]
        .replace('{{price}}', pricePerMonth);
    const monthPrice2 = document.querySelector('.price_2');
    monthPrice2.innerHTML = textData["{{price}}/month"]
        .replace('{{price}}', priceAnnuallyPerMonth);
    const annually = document.querySelector('#annually');
    annually.innerHTML = textData["Annually"]
    const discount = document.querySelector('#discount');
    discount.innerHTML = textData["-83%"];
    const yearPrice = document.querySelector('#price-in-year');
    yearPrice.innerHTML = textData["<strong>{{price}}</strong><br>per year"]
        .replace('{{price}}', pricePerYear);
    const fact2 = document.querySelector('#fact2');
    fact2.innerHTML = textData["MOST POPULAR"];
    const btn = document.querySelector('.btn');
    btn.innerHTML = textData["Continue"];
    const info = document.querySelector('.info');
    info.innerHTML = textData["Auto-renewable. Cancel anytime."]
    const terms = document.querySelector('.terms');
    terms.innerHTML = textData["Terms of Use"]
    const restore = document.querySelector('.header_text-item');
    restore.innerHTML = textData["Restore"]
    const policy = document.querySelector('.policy');
    policy.innerHTML = textData["Privacy Policy"];
}

function getLang() {
    let pageLang;
    if (!!window.location.search) {
        languages.includes(searchLang)
            ? pageLang = searchLang
            : pageLang = 'en'
    } else {
        pageLang = sistemLanguage
    }
    return pageLang;
}

fetch(url + new URLSearchParams({
    lang: getLang()
}))
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
    annuallyOffer.classList.remove('not-checked-offer')
    monthlyOffer.classList.add('not-checked-offer');
    continueLink.href = 'https://google.com/';
})
