const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:lang', (request, response) => {
    const lang = request.params.lang.split('=')[1]
    response.send(require(`./Localizations/${lang}.json`));
})

app.listen(3001, () => {
    console.log('app started');
})
