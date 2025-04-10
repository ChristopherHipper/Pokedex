function getPokemonsTemplate(i) {
    return `<div class="card">
                <div class="card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                <img class="pokemon_img ${pokemons[i].types[0].type.name}" src="${pokemons[i].sprites.other.home.front_default}" alt="großes bild">
                <div>
                    <img class="types_img" src="./assets/icon/${pokemons[i].types[0].type.name}.png" alt="+">
                </div>
            </div>`
}