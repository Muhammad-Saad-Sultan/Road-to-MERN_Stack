import { useState } from 'react';
import useFetch from './hooks/useFetch';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ConvertBtn from './components/ConvertBtn';

const App = () => {    
    const [value, setValue] = useState('');
    const {data, loading, error} = useFetch(value);
    const [unit, setUnit] = useState(false);

    const convert = () => {
        setUnit((prev) => !prev);
    }

    return (
        <>
            <SearchBar value={value} setValue={setValue} />
            <main className="min-w-screen min-h-[90vh] relative flex flex-col justify-center items-center">
                {loading ? (
                    <LoadingSpinner />
                ) : error !== null ? (
                    <ErrorMessage error={error} />
                ) : value !== '' ? (
                    <>
                        <ConvertBtn convert={convert} unit={unit} />
                        <CurrentWeather data={data.weather} unit={unit} />
                        <Forecast data={data.forecast} unit={unit} />
                    </>
                ) : (
                    <div className="empty-state text-center px-2">
                        <h2 className="text-2xl font-semibold">
                            Where would you like to check the weather? 🌤️
                        </h2>
                        <p className="mt-2 text-gray-500">
                            Search for a city above and discover its current conditions and upcoming forecast.
                        </p>
                    </div>
                )}
            </main>
        </>
    );
};

export default App;