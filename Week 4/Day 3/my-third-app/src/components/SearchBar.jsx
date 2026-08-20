import { useState } from "react";

const SearchBar = ({setQuery}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(value);
    }
    return (
        <header>
            <div className="left">
                <a className="logo" href="./">
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub Profile Viewer</span>
                </a>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">
                        <input value={value} type="text" name="search" id="search" title="searchbar" placeholder="Search github username....." onChange={(e) => setValue(e.target.value)}/>
                    </label>
                    <button type="submit" id="searchButton" title="searchButton">
                        <i className="fa-solid fa-search"></i>
                    </button>
                </form>
            </div>
        </header>
    );
};

export default SearchBar;