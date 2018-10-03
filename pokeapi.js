const Promise = require('bluebird');
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/42')
    .then((res) => {
        console.log(`Имя: ${res.data.name}, вес: ${res.data.weight}, размер: ${res.data.height}`);
    }).catch((err) => {
        console.log(`Error load pokemon with id 42: ${err}`);
    });