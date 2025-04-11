function getPokemonsTemplate(i) {
    return `<div class="card ${pokemons[i].type[0].type.name}">
                <div class="card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                <img class="pokemon_img" src="${pokemons[i].img}" alt="großes bild">
                <div class="card_types">
                    ${pokemons[i].type.map(index =>`<img class="types_img" src="./assets/icon/${index.type.name}.png" alt="+">`).join('')}
                </div>
            </div>`
}
