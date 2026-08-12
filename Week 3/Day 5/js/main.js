import {getProfile, getRepos} from './api.js';
import {domCreator, showError} from './dom.js'

const input = document.querySelector('#search');
const searchBtn = document.querySelector('#searchButton');
const loading = document.querySelector('.loading-icon');

searchBtn.addEventListener('click', () => {
    loading.classList.remove('visibility');
    const val = input.value.trim();
    input.value = '';
    fetchData(val);
});

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        loading.classList.remove('visibility');
        const val = input.value.trim();
        input.value = '';
        fetchData(val);
    }
});

async function fetchData(val) {
    if (!val) {
        showError('Please enter a GitHub username.');
        input.focus();
        return;
    }
    try {
        const [profile, repos] = await Promise.all([
            getProfile(val),
            getRepos(val)
        ]);

        const profileData = {
            avatar: profile.avatar_url,
            name: profile.name,
            username: profile.login,
            bio: profile.bio,
            location: profile.location,
            repos: profile.public_repos,
            followers: profile.followers,
            following: profile.following,
            githubUrl: profile.html_url
        };
        const reposData = [];
        repos.forEach((repo, i) => {
            let repoDescription = '';
            if(repo.description !== null) {
                repoDescription = repo.description.split(' ');
                if(repoDescription.length <= 15) {
                    repoDescription = repoDescription.join(' ');
                } else {
                    repoDescription = repoDescription.slice(0, 15).join(' ') + "...";
                }
            }
            reposData[i] = {
                url: repo.html_url,
                name: repo.name,
                description: repoDescription,
                language: repo.language,
                stars: repo.stargazers_count,
                forks: repo.forks_count
            }
        });
        
        loading.classList.add('visibility');
        domCreator(profileData, reposData);
    } catch (error) {
        loading.classList.add('visibility');
        showError(error.message || 'Something went wrong while fetching the profile.');
    }
}