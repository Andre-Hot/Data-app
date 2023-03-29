window.addEventListener("load", initApp);

async function initApp() {
  
  const pokemons = await getPokemon("app.json");
    showPokemon(pokemons);
  
    
}

async function getPokemon() {
  const response = await fetch("https://github.com/Andre-Hot/Data-app/blob/main/app.json");
  const data = await response.json();
  console.log(data);
  return data;
}


function showPokemons(pokemonList) {
  for (const pokemon of pokemonList) {
    showPokemon(pokemon);
  }
}


function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/
    <article class="grid-item">
      <img src="${pokemon.image}"></img>
      <h2>${pokemon.name}</h2>
      <p>${pokemon.house}</p>
      
    </article>
  );

  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon) {
  console.log(pokemon);
 document.querySelector("#dialog-title").textContent = `${pokemon.name}`;
 document.querySelector("#ability").textContent = `Ability: ${pokemon.ability}`;
 document.querySelector("#footprint").textContent = `Footprint: ${pokemon.footprint}`;
 document.querySelector("#dexindex").textContent = `DexIndex: #0${pokemon.dexindex}`;
 document.querySelector("#type").textContent = `Type: ${pokemon.type}`;
 document.querySelector("#subtype").textContent = `Subtype: ${pokemon.subtype}`;
 document.querySelector("#weaknesses").textContent = `Weakness: ${pokemon.weaknesses}`;
 document.querySelector("#gender").textContent = `Gender: ${pokemon.gender}`;
 document.querySelector("#weight").textContent = `Weight: ${pokemon.weight} gram`;
 document.querySelector("#height").textContent = `Height: ${pokemon.height} meter`;
 document.querySelector("#generation").textContent = `Generation ${pokemon.generation}`;
 document.querySelector("#spilversion").textContent = `Spil: ${pokemon.spilversion}`;
 document.querySelector("#evolve").textContent = `Evolve: ${pokemon.canEvolve}`;
 document.querySelector("#health").textContent = `Health: ${pokemon.statsHP}`;
 document.querySelector("#attack").textContent = `Attack: ${pokemon.statsAttack}`;
 document.querySelector("#defence").textContent = `Defense: ${pokemon.statsDefence}`;
 document.querySelector("#specialAttack").textContent = `Special Attack: ${pokemon.statsSpecialAttack}`;
 document.querySelector("#specialDefence").textContent = `Special Defense: ${pokemon.statsSpecialDefence}`;
 document.querySelector("#speed").textContent = `Speed: ${pokemon.statsSpeed}`;
 document.querySelector("#pokemon-stats").showModal();

}