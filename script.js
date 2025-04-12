let count = 10;
let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

async function onloadFunc() {
    for (let i = 1; i < count; i++) {
        await getPokemons(i);
    }
    renderPokemons();
    console.log(pokemons); 
} 

async function getPokemons(path) {
    try {
        let response = await fetch(BASE_URL + path);
        let responseToJson = await response.json()
        pokemons.push(
            {
                name : responseToJson.name,
                type : responseToJson.types,
                id : responseToJson.id,
                img : responseToJson.sprites.other.home.front_default,
                height : responseToJson.height,
                weight : responseToJson.weight,
                baseExperience : responseToJson.base_experience,
                abilities : responseToJson.abilities,
                stats : responseToJson.stats
            }
        )
    } catch (error) {
        console.log("Fetch from the API didn't work");
    }
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

function openOverlayCard(singlePokemon) {
    let openOverlay = document.getElementById("overlay");
    openOverlay.classList.remove("d_none");
    openOverlay.innerHTML = getoverlayCardTemplate(singlePokemon);
    openMainInformation(singlePokemon)
}

function closeOverlayCard() {
    let closeOverlay = document.getElementById("overlay");
    closeOverlay.classList.add("d_none");
}

function openMainInformation(index) {
    document.getElementById('main_info').classList.add('aktive_link')
    let mainRef = document.getElementById('overlay_content')
    mainRef.innerHTML = getMainInformation(index)
}
