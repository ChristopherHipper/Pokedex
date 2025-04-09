function getPokemonsTemplate(i) {
    return `<div class="card">
                <div class="card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                <img src="${pokemons[i].sprites.other.home.front_default}" alt="großes bild">
                <div>
                    <img src="" alt="+">
                    <img src="" alt="+">
                </div>
            </div>`
}