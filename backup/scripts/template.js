function getPokemonsTemplate(i) {
    return `<div onclick="openOverlayCard(${i})" class="card">
                <div class="card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                <div class="${pokemons[i].type[0].type.name}">
                    <img class="pokemon_img" src="${pokemons[i].img}" alt="großes bild">
                </div>
                <div class="card_types">
                    ${pokemons[i].type.map(index => `<img class="types_img" src="./assets/icon/${index.type.name}.png" alt="+">`).join('')}
                </div>
            </div>`
}

function getoverlayCardTemplate(i) {
    return `<div onclick="event.stopPropagation()" class="overlay_card ">
                <div class="overlay_card_header">
                    <h3>#${pokemons[i].id}</h3>
                    <h3>${pokemons[i].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1)}</h3>
                </div>
                 <div class="${pokemons[i].type[0].type.name}">
                    <img class="overlay_pokemon_img" src="${pokemons[i].img}" alt="großes bild">
                </div>
                <div class="overlay_card_types">
                    ${pokemons[i].type.map(index => `<img class="types_img" src="./assets/icon/${index.type.name}.png" alt="+">`).join('')}
                </div>
                <div class="overlay_nav">
                    <button id="main_info" onclick="openMainInformation(${[i]})" class="overlay_button">main</button>
                    <button id="stats" onclick="openStats(${[i]})" class="overlay_button border">stats</button>
                    <button id="evo_chain" onclick="openEvoChain(${[i]})" class="overlay_button">evo chain</button>
                </div>
                <div id="overlay_content">

                </div>
            </div>`
}

function getMainInformation(i) {
    return `<table>
                <tr>
                    <td>Height</td>
                    <td>: ${[pokemons[i].height/10]} m</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>: ${[pokemons[i].weight/10]} kg</td>
                </tr>
                <tr>
                    <td>Base Experience</td>
                    <td>: ${[pokemons[i].baseExperience]}</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>: ${pokemons[i].abilities.map(index => `${index.ability.name}`)}</td>
                </tr>
            </table>`
}

function getStats(i) {
    return `<table>
                <tr class="info_tr">
                    <td>hp</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[0].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>attack</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[1].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>defense</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[2].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>sepcial-attack</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[3].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>special-defense</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[4].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>speed</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].stats[5].base_stat-20}%;"</div>
                    </td>
                </tr>
            </table>`
}

function getEvoChain(i) {
    return `<span>${pokemons[i].evolution1}</span>
            <span>>></span>
            <span>${pokemons[i].evolution2}</span>
            <span>>></span>
            <span>${pokemons[i].evolution3}</span>`
}
