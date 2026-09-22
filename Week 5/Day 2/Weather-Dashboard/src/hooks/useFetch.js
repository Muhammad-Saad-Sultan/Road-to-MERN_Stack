import { useEffect, useState } from 'react';

const useFetch = (value) => {
    const [data, setData] = useState({weather: {}, forecast: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const request = async(requirement, city) => {
            const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
            const URL = `https://api.openweathermap.org/data/2.5/${requirement}?q=${city}&appid=${key}&units=metric`;
            const response = await fetch(URL);
            if(!response.ok) {
                if(response.status === 404) {
                    throw Error(`City not found. Please check the spelling and try again.`);
                } else if(response.status === 401) {
                    throw Error(`API error. Please contact your mentor.`);
                }
                throw Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        }
        
        function processForecast(data) {
            const grouped = {};

            data.list.forEach((item) => {
                const date = item.dt_txt.split(" ")[0];

                if (!grouped[date]) {
                    grouped[date] = [];
                }

                grouped[date].push(item);
            });

            return Object.entries(grouped).slice(0, 5).map(([date, entries]) => {
                const temperatures = entries.map(
                    (item) => item.main.temp
                );

                const high = Math.max(...temperatures);
                const low = Math.min(...temperatures);

                const daytimeEntry = entries.find(
                    (item) => item.weather[0].icon.endsWith("d")
                );

                const condition = daytimeEntry ? daytimeEntry.weather[0].main : entries[0].weather[0].main;
                const dayName = new Date(date).toLocaleDateString("en-US", {weekday: "short"});
                const icon = daytimeEntry ? daytimeEntry.weather[0].icon : entries[0].weather[0].icon;

                return {
                    condition: condition,
                    day: dayName,
                    icon: icon,
                    high: Math.round(high),
                    low: Math.round(low)
                };
            });
        }

        const fetchData = async(city) => {
            setLoading(true);
            setError(null);
            try {
                const[weatherData, forecastData] = await Promise.all([
                    request('weather', city),
                    request('forecast', city)
                ]);

                const weather_data = {
                    name: weatherData.name,
                    country: weatherData.sys.country,
                    currentTemp: Math.round(weatherData.main.temp),
                    condition: weatherData.weather[0].main,
                    icon: weatherData.weather[0].icon,
                    feelLike: Math.round(weatherData.main.feels_like),
                    humidity: weatherData.main.humidity,
                    windSpeed: weatherData.wind.speed
                };

                const forecast_data = processForecast(forecastData);

                setData({
                    weather: weather_data,
                    forecast: forecast_data
                });
            } catch(err) {
                setError(err.message);
                setData({
                    weather: {},
                    forecast: []
                });
            } finally {
                setLoading(false);
            }
        }

        if(value !== '') {
            fetchData(value);
        }
    }, [value]);

    return {data, loading, error};
};

export default useFetch;