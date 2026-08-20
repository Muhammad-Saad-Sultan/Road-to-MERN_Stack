import {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';

function App() {
  const[query, setQuery] = useState('');
  const[data, setData] = useState({
    profile: {},
    repos: [],
  });
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  
  useEffect(() => {
    const request = async(endPoint) => {
      const API_BASE = "https://api.github.com/";
      const TOKEN = "";
      let response;
      if(TOKEN !== '') {
        response = await fetch(`${API_BASE}${endPoint}`, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${TOKEN}`,
          }
        });
      } else {
        response = await fetch(`${API_BASE}${endPoint}`);
      }
      
      if(!response.ok) {
        if (response.status === 404) {
          throw new Error('GitHub user not found. Please check the username.');
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }
      return await response.json();
    }

    const getProfile = (username) => { 
      return request(`users/${username}`);
    }

    const getRepos = (username) => {
      return request(`users/${username}/repos?sort=updated&per_page=6`);
    }

    const fetchData = async() => {
      setLoading(true);
      setError(null);
      try {
        const [profile, repos] = await Promise.all([
          getProfile(query),
          getRepos(query)
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
  
        const reposData = repos.map((repo) => {
          let repoDescription = '';
          if(repo.description !== null) {
            const words = repo.description.split(' ');
            repoDescription = words.length <= 15 
              ? words.join(' ') 
              : words.slice(0, 15).join(' ') + '...';
          }
          return {
            url: repo.html_url,
            name: repo.name,
            description: repoDescription,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count
          };
        });
  
        setData({
          profile: profileData,
          repos: reposData
        });
      } catch(err) {
        setError(err.message);
        setData({
          profile: {},
          repos: []
        });
      } finally {
        setLoading(false);
      }
    };

    if(query !== '') {
      fetchData();
    }
  }, [query])
  
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <main>
        {loading ? (
          <div className="loading-icon">
            <div className="icon">
              <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
              <span>Loading profile...</span>
            </div>
          </div>
        ) : error ? (
          <div className="error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        ) : query === '' ? (
          <div className="profile">
            <div className="empty-state">
              <i className="fa-brands fa-github"></i>
              <h1>Explore a GitHub profile</h1>
              <p>Enter a GitHub username above to view their profile and latest repositories.</p>
            </div>
          </div>
        ) : (
          <div className="profile">
            <ProfileCard data={data.profile} reposData={data.repos} />
          </div>
        )}
      </main>
    </>
  );
};

export default App;