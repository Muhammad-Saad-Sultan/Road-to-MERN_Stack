import RepoList from './RepoList';

const ProfileCard = ({data, reposData}) => {
    return (
        <div className="profile-layout">
            <aside className="profile-card">
                <img className="avatar" src={data.avatar} alt={`${data.name || data.username} profile picture`} />
                <h1 className="profile-name">{data.name || data.username}</h1>
                <a className="profile-username" href={data.githubUrl} target="_blank" rel="noopener noreferrer">@{data.username}</a>
                <p className="profile-bio">{data.bio || 'No bio provided.'}</p>

                <div className="profile-meta">
                    <div className="meta-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{data.location || 'Location not provided'}</span>
                    </div>
                </div>

                <a className="github-link" href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                    View on GitHub
                </a>
            </aside>

            <section className="profile-content">
                <h2>Profile Overview</h2>

                <div className="stats">
                    <div className="stat-card">
                        <span className="stat-value">{data.repos}</span>
                        <span className="stat-label">Public repositories</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{data.followers}</span>
                        <span className="stat-label">Followers</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{data.following}</span>
                        <span className="stat-label">Following</span>
                    </div>
                </div>

                <h2>Latest Repositories</h2>
                <RepoList data={reposData} />
            </section>
        </div>
    );
};

export default ProfileCard;