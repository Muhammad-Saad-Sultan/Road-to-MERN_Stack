import {searchPokemon} from './api.js';

pokemonInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        searchPokemon();
    }
});
searchButton.addEventListener("click", searchPokemon);