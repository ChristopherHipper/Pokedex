function getPokemonsTemplate(i) {
    return `<div class="card">
                <div class="card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                <img class="pokemon_img ${pokemons[i].type1}" src="${pokemons[i].img}" alt="großes bild">
                <div>
                    <img class="types_img" src="./assets/icon/${pokemons[i].type1}.png" alt="+">
                    <img class="types_img" src="./assets/icon/${pokemons[i].type2}.png" alt="+">
                </div>
            </div>`
}
