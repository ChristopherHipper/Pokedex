let pokemons = [];
let BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
let filteredPokemons = []

function onloadFunc() {
    fetchPokemons();
}

async function fetchPokemons() {
    try {
        let response = await fetch(BASE_URL);
        let responseAsJson = await response.json();
        BASE_URL = responseAsJson.next
        let pokemonList = responseAsJson.results
        fetchSinglePokemon(pokemonList);  
    } catch (error) {
        console.log("Fetch from the API didn't work");
    }
} 

async function fetchSinglePokemon(pokemonList) {
    for (let index = 0; index < pokemonList.length; index++) {
        let url = pokemonList[index].url;
        let singlePokemon = await fetch(url)
        let singlePokemonAsJson = await singlePokemon.json()
        let pokemonSpeciesUrl = singlePokemonAsJson.species.url;
        let responsePokemonSpecies = await fetch(pokemonSpeciesUrl)
        let pokemonSpeciesData = await responsePokemonSpecies.json()
        let pokemonEvoChainUrl = pokemonSpeciesData.evolution_chain.url;
        let responsePokemonEvoChain = await fetch(pokemonEvoChainUrl)
        let pokemonEvoChainData = await responsePokemonEvoChain.json()
        pokemons.push({singlePokemonAsJson,pokemonEvoChainData})
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

function openOverlayCard(singlePokemon) {
    let openOverlay = document.getElementById("overlay");
    openOverlay.classList.remove("d_none");
    openOverlay.innerHTML = getoverlayCardTemplate(singlePokemon);
    document.getElementById("body").style.overflow = "hidden";
    openMainInformation(singlePokemon)
    checkNextPrevButton(singlePokemon)
}

function closeOverlayCard() {
    let closeOverlay = document.getElementById("overlay");
    closeOverlay.classList.add("d_none");
    document.getElementById("body").style.overflow = "auto";
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
    let chain = pokemons[index].pokemonEvoChainData.chain;
    let evo1 = chain.species.name;
    let evo2 = chain.evolves_to[0]?.species.name;
    let evo3 = chain.evolves_to[0]?.evolves_to[0]?.species.name;
    let img1 = findImgByName(evo1);
    let img2 = evo2 ? findImgByName(evo2) : '';
    let img3 = evo3 ? findImgByName(evo3) : '';
    evoChainRef.innerHTML = getEvoChain(img1, img2, img3, evo1, evo2, evo3);
}

function findImgByName(name) {
    let found = pokemons.find(p => p.singlePokemonAsJson.name === name);
    return found ? found.singlePokemonAsJson.sprites.other.home.front_default : '';
}

function checkNextPrevButton(singlePokemon) {
    if (singlePokemon == 0) {
        document.getElementById('prev_button').disabled = true;
        document.getElementById('prev_button').style.opacity = "0.2";
     } else if (singlePokemon == pokemons.length-1) {
        document.getElementById('next_button').disabled = true;
        document.getElementById('next_button').style.opacity = "0.2";
     } else return
}

function nextPokemonCard(pokemon) {
    pokemon++
    openOverlayCard(pokemon)
    if (pokemon == pokemons.length-1) {
        document.getElementById('next_button').disabled = true;
        document.getElementById('next_button').style.opacity = "0.2";
     }
}

function prevPokemonCard(pokemon) {
    pokemon--
    openOverlayCard(pokemon)
    if (pokemon == 0) {
        document.getElementById('prev_button').disabled = true;
        document.getElementById('prev_button').style.opacity = "0.2";
     }
}

function searchPokemon() {
    let warningRef = document.getElementById('warning');
    let input = document.getElementById('input_field').value;
    let contentRef = document.getElementById('content')
    if (input.length < 3) {
        warningRef.innerHTML = 'Please enter more than 3 letters';
        renderPokemons()
        return;
    }
    warningRef.innerHTML = "";
    filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.singlePokemonAsJson.name.includes(input)
    })
    contentRef.innerHTML = "";
    for (let index = 0; index < filteredPokemons.length; index++) {
        contentRef.innerHTML += getSearchedPokemonsTemplate(index)
    }
}