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
                type1 : responseToJson.types[0].name,
                type2 : responseToJson.name,
                id : responseToJson.id,
                id : responseToJson.id,
                img : responseToJson.sprites.other.home.front_default,
                height : responseToJson.height,
                weight : responseToJson.weight,
                baseExperience : responseToJson.base_experience,
                abilities1 : responseToJson.abilities[0].name,
                abilities2 : responseToJson.abilities[1].name,
                
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
