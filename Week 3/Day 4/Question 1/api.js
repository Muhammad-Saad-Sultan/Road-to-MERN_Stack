import {displayPokemon} from './dom.js';

export async function searchPokemon() {
    const pokemonName = pokemonInput.value.trim().toLowerCase();
    if (pokemonName === "") {
        pokemonError.textContent = "Please enter a Pokemon name.";
        return;
    }
    pokemonLoading.textContent = "Loading...";
    pokemonError.textContent = "";
    pokemonResult.innerHTML = "";
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        const response = await fetch(`${url}${pokemonName}`);
        if (!response.ok) {
            throw new Error("Pokemon not found.");
        }
        const pokemon = await response.json();
        displayPokemon(pokemon);
    } catch (error) {
        pokemonError.textContent = "Pokemon not found. Please check the name and try again.";
        console.log(error);
    } finally {
        pokemonLoading.textContent = "";
    }
}