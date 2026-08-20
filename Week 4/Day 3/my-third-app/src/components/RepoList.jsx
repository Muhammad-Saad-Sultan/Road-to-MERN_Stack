const RepoList = ({data}) => {
    return (
        <div className="repo-grid">
            {data.length ? (
                data.map((repo) => (
                    <article className="repo-card" key={repo.url}>
                        <a className="repo-title" href={repo.url} target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-folder-open"></i>
                            {repo.name}
                        </a>

                        <p className="repo-description">{repo.description || 'No description provided.'}</p>

                        <div className="repo-meta">
                            <span>
                                <span className="language-dot"></span>
                                {repo.language || 'Not specified'}
                            </span>
                            <span>
                                <i className="fa-regular fa-star"></i>
                                {repo.stars}
                            </span>
                            <span>
                                <i className="fa-solid fa-code-fork"></i>
                                {repo.forks}
                            </span>
                        </div>
                    </article>
                ))
            ) : (
                <p className="no-repos">This user has no public repositories.</p>
            )}
        </div>
    );
};

export default RepoList;
