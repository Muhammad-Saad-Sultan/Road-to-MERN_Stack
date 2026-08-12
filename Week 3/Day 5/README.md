# GitHub Profile Viewer

A responsive web app for searching GitHub users and viewing their profile information and latest repositories using the GitHub REST API.

## Features

- Search GitHub users by username
- View profile, followers, following, and public repositories
- View latest repositories with language, stars, and forks
- Loading and error states
- Responsive design

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- GitHub REST API
- Font Awesome

## Project Structure

```text
├── index.html
├── style.css
└── js/
    ├── api.js
    ├── dom.js
    └── main.js
```

## Run Locally

Run the project using a local HTTP server such as **VS Code Live Server**, then search for a GitHub username.

## API

Uses:

```text
https://api.github.com
```

The app fetches GitHub profile data and up to 6 recently updated repositories.

## License

For personal and educational use.
