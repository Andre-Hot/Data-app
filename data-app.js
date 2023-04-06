window.addEventListener("load", initApp);

async function initApp() {
  
  const pokemons = await getPokemon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  console.log(pokemons);
  
  for (const pokemon of pokemons) {
    showPokemon(pokemon);
  }
    
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}



function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/
    <article class="grid-item">
      <img src="${pokemon.image}"></img>
      <h2>${pokemon.name}</h2>

      <ul><p>Type: ${pokemon.type}</p>
      <li>Dexindex: ${pokemon.dexindex}</li>
      <li>Ability: ${pokemon.ability}</li>
      </ul>
    </article>
  );
  
  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);
  console.log(pokemon.name);
  console.log(pokemon);
  function pokemonClicked() { showPokemonDetail(pokemon); }
}

function showPokemonDetail(pokemon) {
  document.querySelector("#dialogBox").innerHTML = /*HTML*/ `
    <article>
      <h2>${pokemon.name}</h2>
      <hr>
        <img id="pokePic" src="${pokemon.image}">
        <p>${pokemon.description}</p>

      <li>Ability: ${pokemon.ability}</li>
      <li>Dexindex: ${pokemon.dexindex}</li>
      <li>Type: ${pokemon.type}</li>
      <li>SubType: ${subtype}</li>
      <li>Weaknesses: ${pokemon.weaknesses}</li>
      <li>Gender: ${pokemon.gender}</li>
      <li>Weight (g): ${pokemon.weight}</li>
      <li>Height(cm): ${pokemon.height}</li>
      <li>Generation: ${pokemon.generation}</li>
      <li>spilversion: ${pokemon.spilversion}</li>
      <li id="evolve">Can it evolve: ${pokemon.canEvolve}</li>
      <li>HP: ${pokemon.statsHP}</li>
      <li>Attack: ${pokemon.statsAttack}</li>
      <li>Defence: ${pokemon.statsDefence}</li>
      <li>Special Attack: ${pokemon.statsspecialAttack} </li>
      <li>Special Defence: ${pokemon.statsSpecialDefence}</li>
      <li>Speed: ${pokemon.statsSpeed}</li>
    </article>
  
      <form method="dialog">
      <button id="closeBTN">close</button>
        </form> `;
  
  document.querySelector("#closeBTN").addEventListener("click", removeBlur);

}

function backgroundBlurred() {
  document.querySelector("body").classList.add("blur", "fixed");
}

function removeBlur() {
  document.querySelector("body").classList.remove("blur", "fixed");
}