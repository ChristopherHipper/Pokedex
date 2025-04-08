let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

async function getPokemons() {
    let response = await fetch(BASE_URL);
    return responseToJson = await response.json()
    
}

 async function onloadFunc() {
    let pokemonResponse = await getPokemons()
    let pokemonArray = pokemonResponse.results
    renderPokemons(pokemonArray)

    
} 

function renderPokemons(pokemonArray) {
    let contentRef = document.getElementById("content")
    for (let index = 0; index < pokemonArray.length; index++) {
        pokemons.push(
            {
                id : pokemonArray[index].name,                          
                infos : pokemonArray[index].url
            }
        )
        contentRef.innerHTML += getPokemonsTemplate(index)
    }
    console.log(pokemons);
    
    console.log(pokemons[1].infos);
}