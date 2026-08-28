const projects = [
    {
        id: 1,
        badge: 'Final Year Project',
        title: 'Relife - Smart Waste Platform',
        description: 'A full-stack smart waste management and item reuse platform that combines IoT, AI, and web technologies to promote sustainable waste disposal and reuse.',
        overview: 'ReLife is a smart waste management platform developed as a Final Year Project. The system connects users, NGOs, recyclers, and administrators through a centralized platform while integrating IoT-enabled smart dustbins and AI-powered features.',
        technologies: [
            'React (Vite)',
            'Node.js',
            'Express.js',
            'MongoDB',
            'LangChain',
            'Cloudinary',
            'ESP32',
            'Raspberry Pi'
        ],
        features: [
            'Smart dustbin monitoring using ultrasonic sensors',
            'Real-time bin fill-level monitoring',
            'GPS-based smart dustbin location tracking',
            'Recyclables marketplace for buying and selling reusable items',
            'Donation portal for users and NGOs',
            'NGO volunteer management',
            'AI-powered RAG chatbot for intelligent assistance',
            'User, NGO, and administrator dashboards',
            'Image-based item classification',
            'Cloud-based image storage using Cloudinary'
        ],
        challenges: [
            'Integrating IoT hardware with the web application',
            'Maintaining reliable communication between sensors and the backend',
            'Designing a scalable backend architecture',
            'Integrating AI functionality with the existing application',
            'Managing different user roles and permissions',
            'Handling real-time smart dustbin information'
        ],
        github: 'https://github.com/Muhammad-Saad-Sultan',
        demo: '#'
    },
    {
        id: 2,
        badge: 'AI / Web Application',
        title: 'Google Gemini Clone',
        description: 'A responsive AI conversational web application inspired by Google Gemini with real-time AI interactions and modern React architecture.',
        overview: 'The Google Gemini Clone is a frontend-focused AI application designed to replicate the core conversational experience of modern AI assistants. It communicates with an AI API and dynamically displays generated responses.',
        technologies: [
            'React.js',
            'JavaScript',
            'REST APIs',
            'React Hooks',
            'CSS Grid'
        ],
        features: [
            'AI-powered conversational interface',
            'Real-time message generation',
            'Responsive desktop and mobile interface',
            'Reusable React components',
            'Custom React Hooks',
            'State management using React Hooks',
            'Asynchronous API communication',
            'Loading and error states',
            'Dynamic chat history'
        ],
        challenges: [
            'Managing asynchronous API requests',
            'Handling loading and error states',
            'Maintaining conversation state',
            'Creating reusable React components',
            'Building a responsive chat interface'
        ],
        github: 'https://github.com/Muhammad-Saad-Sultan',
        demo: '#'
    },
    {
        id: 3,
        badge: 'Full-Stack Web App',
        title: 'Pathway Restaurant App',
        description: 'A full-stack restaurant management and ordering application built with PHP and MySQL for managing food items and processing customer orders.',
        overview: 'Pathway Restaurant App is a full-stack restaurant website that provides customers with an interactive menu and shopping experience while allowing restaurant staff to manage food items and orders.',
        technologies: [
            'PHP',
            'MySQL',
            'JavaScript',
            'HTML',
            'CSS'
        ],
        features: [
            'Dynamic restaurant menu',
            'Food item management',
            'Interactive shopping cart',
            'Dynamic content management',
            'Customer order processing',
            'Direct WhatsApp order integration',
            'Reusable PHP components',
            'MySQL database integration',
            'Responsive frontend interface'
        ],
        challenges: [
            'Designing an efficient relational database structure',
            'Connecting frontend functionality with PHP backend logic',
            'Managing shopping cart state',
            'Processing customer orders',
            'Creating reusable PHP components',
            'Integrating WhatsApp ordering functionality'
        ],
        github: 'https://github.com/Muhammad-Saad-Sultan',
        demo: '#'
    },
    {
        id: 4,
        badge: 'Frontend / API Project',
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard built with React that provides current weather conditions and forecast information using the OpenWeather API.',
        overview: 'The Weather Dashboard is a React-based web application that allows users to search for cities and view real-time weather information. The application communicates with the OpenWeather API to retrieve current weather conditions and forecast data and presents the information through a clean, responsive interface.',
        technologies: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'JavaScript',
            'OpenWeather API',
            'REST API'
        ],
        features: [
            'Search weather by city',
            'Real-time weather data using OpenWeather API',
            'Current weather conditions',
            'Multi-day weather forecast',
            'Temperature unit conversion',
            'Weather condition information',
            'Loading state while fetching data',
            'Error handling for invalid searches',
            'Responsive desktop and mobile interface',
            'Environment variables for API key management'
        ],
        challenges: [
            'Integrating a third-party weather API',
            'Handling asynchronous API requests with React',
            'Managing loading and error states',
            'Updating weather information based on user searches',
            'Managing API keys using Vite environment variables',
            'Creating a responsive weather interface with Tailwind CSS'
        ],
        github: 'https://github.com/Muhammad-Saad-Sultan',
        demo: '#'
    },
    {
        id: 5,
        badge: 'Frontend / API Project',
        title: 'GitHub Profile Retriever',
        description: 'A React-based application that retrieves and displays GitHub user profiles and repository information using the GitHub REST API.',
        overview: 'The GitHub Profile Retriever is a responsive React application that allows users to search for GitHub usernames and retrieve publicly available profile information through the GitHub REST API. The application dynamically displays user details, statistics, and repositories in an organized interface.',
        technologies: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'JavaScript',
            'GitHub REST API',
            'REST API'
        ],
        features: [
            'Search GitHub users by username',
            'Fetch real-time profile information from GitHub',
            'Display profile avatar and user details',
            'Show followers and following statistics',
            'Display public repository count',
            'Retrieve and display user repositories',
            'Show repository descriptions and technologies',
            'Direct links to GitHub profiles and repositories',
            'Loading state during API requests',
            'Error handling for invalid or unavailable usernames',
            'Responsive interface for desktop and mobile'
        ],
        challenges: [
            'Working with the GitHub REST API',
            'Handling asynchronous API requests in React',
            'Managing loading and error states',
            'Handling users that do not exist',
            'Displaying dynamically retrieved profile and repository data',
            'Designing reusable components for API-driven content',
            'Creating a responsive interface using Tailwind CSS'
        ],
        github: 'https://github.com/Muhammad-Saad-Sultan',
        demo: '#'
    }
]

export default projects;