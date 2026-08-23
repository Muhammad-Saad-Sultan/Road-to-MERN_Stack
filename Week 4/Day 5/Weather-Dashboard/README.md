# 🌤️ Weather Dashboard

A responsive weather dashboard built with **React.js**, **Tailwind CSS**, and the **OpenWeather API**. The application allows users to search for a city and view its current weather conditions along with a 5-day forecast.

## ✨ Features

* 🔎 Search weather by city name
* 🌡️ Display current temperature and weather condition
* 💧 Show humidity, wind speed, and feels-like temperature
* 📅 Display a 5-day weather forecast
* 🌤️ Weather icons provided by OpenWeather
* 🔄 Convert temperatures between **°C and °F**
* 🎨 Dynamic weather-based UI

  * Clear
  * Clouds
  * Rain
  * Default condition
* ⏳ Loading state with animated spinner
* ⚠️ User-friendly error messages
* 📱 Responsive design for different screen sizes
* 🚫 Empty state when no city has been searched
* ⚡ Parallel API requests using `Promise.all()`

## 🛠️ Technologies Used

* **React.js** — UI development
* **Vite** — Development environment and build tool
* **Tailwind CSS** — Styling and responsive design
* **React Icons** — Interface icons
* **OpenWeather API** — Weather and forecast data
* **JavaScript (ES6+)** — Application logic

## 📁 Project Structure

```text
src/
├── components/
│   ├── SearchBar.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   ├── CurrentWeather.jsx
│   ├── Forecast.jsx
│   ├── ForecastCard.jsx
│   └── ConvertBtn.jsx
│
├── App.jsx
└── main.jsx
```

## 🔄 How It Works

1. The user enters a city name in the search bar.
2. The application sends requests to the OpenWeather API for:

   * Current weather
   * 5-day forecast
3. Both requests are executed in parallel using `Promise.all()`.
4. The API response is processed and the required weather information is extracted.
5. Forecast data is grouped by date and converted into daily high/low temperatures.
6. The weather information is displayed through reusable React components.
7. Users can switch between Celsius and Fahrenheit without making another API request.

## 🌡️ Temperature Conversion

The application initially requests weather data using metric units, so temperatures are received in Celsius.

When the user clicks the conversion button, the application converts the displayed values using:

```text
°F = (°C × 1.8) + 32
```

The conversion is handled on the client side, so changing the unit does not require another API request.

## ⚠️ Error Handling

The dashboard handles common API errors and displays appropriate messages to the user.

### City Not Found

```text
City not found. Please check the spelling and try again.
```

### API Authentication Error

```text
API error. Please contact your mentor.
```

### Other HTTP Errors

The application displays the corresponding HTTP status code.

## 🔑 Environment Variables

The OpenWeather API key is stored in an environment variable rather than being written directly into the source code.

Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

> **Important:** Do not commit your `.env` file to GitHub. Add it to `.gitignore`.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd weather-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env` file:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🧩 Component Architecture

The application is divided into reusable components:

| Component        | Responsibility                                         |
| ---------------- | ------------------------------------------------------ |
| `App`            | Main application logic, API requests, state management |
| `SearchBar`      | Handles city search input                              |
| `LoadingSpinner` | Displays loading state                                 |
| `ErrorMessage`   | Displays API/request errors                            |
| `CurrentWeather` | Displays current weather information                   |
| `Forecast`       | Renders the forecast cards                             |
| `ForecastCard`   | Displays individual forecast information               |
| `ConvertBtn`     | Toggles between Celsius and Fahrenheit                 |

## 📚 What I Practiced

This project helped me practice several important React and frontend concepts:

* React functional components
* `useState`
* `useEffect`
* Props and component communication
* Conditional rendering
* Controlled form inputs
* API requests with `fetch()`
* Async/await
* `Promise.all()`
* Error handling with `try/catch`
* Processing and transforming API data
* Environment variables with Vite
* Responsive layouts with Tailwind CSS
* Dynamic Tailwind classes
* Reusable components
* Client-side temperature conversion

## 🔮 Future Improvements

Some possible improvements for future versions:

* 📍 Detect weather using the user's current location
* ⭐ Save favorite cities
* 🕐 Add hourly forecasts
* 🌅 Display sunrise and sunset times
* 🌙 Add light/dark mode
* 🌍 Support more weather units
* 📊 Add weather charts
* 🔍 Add city autocomplete
* 💾 Cache recently searched cities
* 🌐 Add multi-language support

## 👨‍💻 Author

**Muhammad Saad Sultan**

Built as a React weather dashboard project to practice working with APIs, state management, reusable components, and responsive UI development.
