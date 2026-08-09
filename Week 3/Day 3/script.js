const usersList = document.getElementById("usersList");
const usersLoading = document.getElementById("usersLoading");
const usersError = document.getElementById("usersError");

async function fetchUsers() {
    usersLoading.textContent = "Loading...";
    usersError.textContent = "";
    try {
        let url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch users.");
        }
        const users = await response.json();
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            usersList.appendChild(li);
        });
    } catch (error) {
        usersError.textContent = "Unable to load users. Please try again.";
        console.log(error);
    } finally {
        usersLoading.textContent = "";
    }
}

const pokemonInput = document.getElementById("pokemonInput");
const searchButton = document.getElementById("searchButton");

const pokemonLoading = document.getElementById("pokemonLoading");
const pokemonError = document.getElementById("pokemonError");
const pokemonResult = document.getElementById("pokemonResult");

async function searchPokemon() {
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

function displayPokemon(pokemon) {
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

searchButton.addEventListener("click", searchPokemon);

fetchUsers();