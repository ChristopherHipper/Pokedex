let count = 10;
let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

async function getPokemons(path) {
    try {
        let response = await fetch(BASE_URL + path);
        let responseToJson = await response.json()
        pokemons.push(
            {
                name : responseToJson.name,
                type1 : responseToJson.types[0].type.name,
                type2 : responseToJson.types[1].type.name,
                id : responseToJson.id,
                img : responseToJson.sprites.other.home.front_default,
                height : responseToJson.height,
                weight : responseToJson.weight,
                baseExperience : responseToJson.base_experience,
                abilities1 : responseToJson.abilities[0].name,
                abilities2 : responseToJson.abilities[1].name,
                stats1 : responseToJson.stats[0].stat.name,
                stats2 : responseToJson.stats[1].stat.name,
                stats3 : responseToJson.stats[2].stat.name,
                stats4 : responseToJson.stats[3].stat.name,
                stats5 : responseToJson.stats[4].stat.name,
                stats6 : responseToJson.stats[5].stat.name,
            }
        )
    } catch (error) {
        console.log("Fetch from the API didn't work");
        
    }
}

 async function onloadFunc() {
    for (let i = 1; i < count; i++) {
        await getPokemons(i);
    }
    renderPokemons();
    console.log(pokemons);
    
} 

function renderPokemons() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";
    for (let index = 0; index < pokemons.length; index++) {
        contentRef.innerHTML += getPokemonsTemplate(index)
    }
}

function getMorePokemons() {
    pokemons.length = 0;
    count = count + 5;
    onloadFunc();
}
