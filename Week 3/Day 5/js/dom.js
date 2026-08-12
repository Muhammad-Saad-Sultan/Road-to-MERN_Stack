let profileSection = document.querySelector('.profile');
export function domCreator(profile, repos) {
    profileSection.innerHTML = '';
    const repoHtml = repos.length
        ? repos.map(repo => `
            <article class="repo-card">
                <a class="repo-title" href="${repo.url}" target="_blank" rel="noopener">
                    <i class="fa-regular fa-folder-open"></i>
                    ${repo.name}
                </a>

                <p class="repo-description">${repo.description || 'No description provided.'}</p>

                <div class="repo-meta">
                    <span>
                        <span class="language-dot"></span>
                        ${repo.language || 'Not specified'}
                    </span>
                    <span>
                        <i class="fa-regular fa-star"></i>
                        ${repo.stars}
                    </span>
                    <span>
                        <i class="fa-solid fa-code-fork"></i>
                        ${repo.forks}
                    </span>
                </div>
            </article>
        `).join('')
        : '<div class="no-repos">This user has no public repositories.</div>'
    ;
    profileSection.innerHTML = `
        <div class="profile-layout">
            <aside class="profile-card">
                <img class="avatar" src="${profile.avatar}" alt="${profile.name || profile.username} profile picture">
                <h1 class="profile-name">${profile.name || profile.username}</h1>
                <a class="profile-username" href="${profile.githubUrl}" target="_blank" rel="noopener">@${profile.username}</a>
                <p class="profile-bio">${profile.bio || 'No bio provided.'}</p>

                <div class="profile-meta">
                    <div class="meta-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${profile.location || 'Location not provided'}</span>
                    </div>
                </div>

                <a class="github-link" href="${profile.githubUrl}" target="_blank" rel="noopener">
                    <i class="fa-brands fa-github"></i>
                    View on GitHub
                </a>
            </aside>

            <section class="profile-content">
                <h2>Profile Overview</h2>

                <div class="stats">
                    <div class="stat-card">
                        <span class="stat-value">${profile.repos}</span>
                        <span class="stat-label">Public repositories</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${profile.followers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${profile.following}</span>
                        <span class="stat-label">Following</span>
                    </div>
                </div>

                <h2>Latest Repositories</h2>
                <div class="repo-grid">${repoHtml}</div>
            </section>
        </div>
    `;
}

export function showError(message) {
    profileSection.innerHTML = `
        <div class="error">
            <i class="fa-solid fa-circle-exclamation"></i>
            ${message}
        </div>
    `;
}