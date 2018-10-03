const Promise = require('bluebird');
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/42')
    .then((res) => {
        console.log(`[TASK 01_1] Имя: ${res.data.name}, вес: ${res.data.weight}, размер: ${res.data.height}`);
    }).catch((err) => {
        console.log(`Error load pokemon with id 42: ${err}`);
    });


let request = [];
const count = 10;
for (let i=0; i<3; i++)
    request.push(axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}&offset=${count*i}`));

Promise.all(request)
    .then((res) => {
        res.forEach((val, resInd)=>{
            val.data.results.forEach((pokemon, ind) => {
                console.log(`${resInd}-${ind}: ${pokemon.name}`);
            })
        })
    }).catch((err) => {
        console.log(`Error load pokemons 3 x 10: ${err}`);
    });



Promise.any([
    axios.get('https://pokeapi.co/api/v2/pokemon/1'),
    axios.get('https://pokeapi.co/api/v2/pokemon/4'),
    axios.get('https://pokeapi.co/api/v2/pokemon/7')
	]).then((result) => {
	    console.log(`[TASK 01_3] Имя: ${result.data.name}`);
	}).catch((err) => {
	    console.log('Error load pokemons with ids: 1, 4, 7');
	});