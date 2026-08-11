export function displayPokemon(pokemon) {
    const image = pokemon.sprites.front_default;
    const types = pokemon.types.map((type) => type.type.name).join(", ");
    const stats = pokemon.stats.map((stat) => {
        return `<p><strong>${stat.stat.name}:</strong>${stat.base_stat}</p>`;
    }).join("");

    pokemonResult.innerHTML = `
        <h3>${pokemon.name.toUpperCase()}</h3>
        <img id="pokemonImage" src="${image}" alt="${pokemon.name}">
        <p><strong>Type:</strong> ${types}</p>
        <h4>Stats</h4> ${stats}
    `;
}