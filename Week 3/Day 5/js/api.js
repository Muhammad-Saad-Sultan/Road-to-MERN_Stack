const API_BASE = 'https://api.github.com';
const TOKEN = '';

async function request(endpoint) {
    let response = '';
    if(TOKEN !== '') {
        response = await fetch(`${API_BASE}${endpoint}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            }
        });
    } else {
        response = await fetch(`${API_BASE}${endpoint}`);
    }

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('GitHub user not found. Please check the username.');
        } else {
            throw new Error(`GitHub API error: ${response.status}`);
        }
    }

    return response.json();
}

export async function getProfile(username) {
    return request(`/users/${username}`);
}

export async function getRepos(username) {
    return request(`/users/${username}/repos?sort=updated&per_page=6`);
}