function getPokemonsTemplate(i) {
    return `<div onclick="openOverlayCard(${i})" class="card">
                <div class="card_header">
                    <h3>#${pokemons[i].singlePokemonAsJson.id}</h3>
                    <h3>${pokemons[i].singlePokemonAsJson.name.charAt(0).toUpperCase() + pokemons[i].singlePokemonAsJson.name.slice(1)}</h3>
                </div>
                <div class="${pokemons[i].singlePokemonAsJson.types[0].type.name}">
                    <img class="pokemon_img" src="${pokemons[i].singlePokemonAsJson.sprites.other.home.front_default}" alt="großes bild">
                </div>
                <div class="card_types">
                    ${pokemons[i].singlePokemonAsJson.types.map(index => `<img class="types_img" src="./assets/icon/${index.type.name}.png" alt="+">`).join('')}
                </div>
            </div>`
}

function getoverlayCardTemplate(i) {
    return `<div onclick="event.stopPropagation()" class="overlay_card ">
                <div class="overlay_card_header">
                    <button class="switch_button" id="prev_button" onclick="prevPokemonCard(${i})"> <img class="icon" src="./assets/img/pfeil-links.PNG" alt=""></button>
                    <h3>#${pokemons[i].singlePokemonAsJson.id}</h3>
                    <h3>${pokemons[i].singlePokemonAsJson.name.charAt(0).toUpperCase() + pokemons[i].singlePokemonAsJson.name.slice(1)}</h3>
                     <button class="switch_button" id="next_button" onclick="nextPokemonCard(${i})"> <img class="icon" src="./assets/img/pfeil-rechts.png" alt=""></button>
                </div>
                 <div class="${pokemons[i].singlePokemonAsJson.types[0].type.name}">
                    <img class="overlay_pokemon_img" src="${pokemons[i].singlePokemonAsJson.sprites.other.home.front_default}" alt="großes bild">
                </div>
                <div class="overlay_card_types">
                    ${pokemons[i].singlePokemonAsJson.types.map(index => `<img class="types_img" src="./assets/icon/${index.type.name}.png" alt="+">`).join('')}
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
                    <td>: ${[pokemons[i].singlePokemonAsJson.height/10]} m</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>: ${[pokemons[i].singlePokemonAsJson.weight/10]} kg</td>
                </tr>
                <tr>
                    <td>Base Experience</td>
                    <td>: ${[pokemons[i].singlePokemonAsJson.base_experience]}</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>: ${pokemons[i].singlePokemonAsJson.abilities.map(index => `${index.ability.name}`)}</td>
                </tr>
            </table>`
}

function getStats(i) {
    return `<table>
                <tr class="info_tr">
                    <td>hp</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[0].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>attack</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[1].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>defense</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[2].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>sepcial-attack</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[3].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>special-defense</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[4].base_stat-20}%;"</div>
                    </td>
                </tr>
                <tr class="info_tr">
                    <td>speed</td>
                    <td class="bar_container">
                        <div class="bar" style="width: ${pokemons[i].singlePokemonAsJson.stats[5].base_stat-20}%;"</div>
                    </td>
                </tr>
            </table>`
}

function getEvoChain(img1, img2, img3, evo1, evo2, evo3) {
    return `<div class="evo_container">
                <div class="evo_content">
                    <img class="evo_img" src="${img1}" alt="">
                    <span>${evo1.charAt(0).toUpperCase() + evo1.slice(1)}</span>
                </div>
                <span>>></span>
                <div class="evo_content">
                     ${img2 ? `<img class="evo_img" src="${img2}" alt="">` : 'load more Pokemons for Image!'}
                    <span>${evo2.charAt(0).toUpperCase() + evo2.slice(1)}</span>
                </div class="evo_content">
                ${evo3 ? `
                    <span>>></span>
                    <div>
                        ${img3 ? `<img class="evo_img" src="${img3}" alt="">` : 'load more Pokemons for Image!'}
                        <span>${evo3.charAt(0).toUpperCase() + evo3.slice(1)}</span>
                    </div>
                ` : ''}

            </div>`
}
