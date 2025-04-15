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
        let responsePorkemon = await fetch(BASE_URL + path);
        let pokemonData = await responsePorkemon.json();
        let pokemonSpeciesUrl = pokemonData.species.url;
        let responsePokemonSpecies = await fetch(pokemonSpeciesUrl)
        let pokemonSpeciesData = await responsePokemonSpecies.json()
        let pokemonEvoChainUrl = pokemonSpeciesData.evolution_chain.url;
        let responsePokemonEvoChain = await fetch(pokemonEvoChainUrl)
        let pokemonEvoChainData = await responsePokemonEvoChain.json()
        pokemons.push(
            {
                name : pokemonData.name,
                type : pokemonData.types,
                id : pokemonData.id,
                img : pokemonData.sprites.other.home.front_default,
                height : pokemonData.height,
                weight : pokemonData.weight,
                baseExperience : pokemonData.base_experience,
                abilities : pokemonData.abilities,
                stats : pokemonData.stats,
                evolution1 : pokemonEvoChainData.chain.species.name,
                evolution2 : pokemonEvoChainData.chain.evolves_to[0].species.name,
                evolution3 : pokemonEvoChainData.chain.evolves_to[0].evolves_to[0].species.name
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
    let mainRef = document.getElementById('overlay_content')
    mainRef.innerHTML = "";
    document.getElementById('stats').classList.remove('aktive_link')
    document.getElementById('evo_chain').classList.remove('aktive_link')
    document.getElementById('main_info').classList.add('aktive_link')
    mainRef.innerHTML = getMainInformation(index)
}

function openStats(index) {
    let statsRef = document.getElementById('overlay_content')
    statsRef.innerHTML = "";
    document.getElementById('main_info').classList.remove('aktive_link')
    document.getElementById('evo_chain').classList.remove('aktive_link')
    document.getElementById('stats').classList.add('aktive_link')
    statsRef.innerHTML = getStats(index);
}

function openEvoChain(index) {
    let evoChainRef = document.getElementById('overlay_content')
    evoChainRef.innerHTML = "";
    document.getElementById('main_info').classList.remove('aktive_link')
    document.getElementById('stats').classList.remove('aktive_link')
    document.getElementById('evo_chain').classList.add('aktive_link')
    evoChainRef.innerHTML = getEvoChain(index);
}
