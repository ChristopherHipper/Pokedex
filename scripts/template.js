function getPokemonsTemplate(i) {
    return `<div class="card">
                <div class="card_header">
                    <h3>#${i+1}</h3>
                    <h3>${pokemons[i].id.charAt(0).toUpperCase() + pokemons[i].id.slice(1)}</h3>
                </div>
                <img src="" alt="großes bild">
                <div>
                    <img src="" alt="+">
                    <img src="" alt="+">
                </div>
            </div>`
}