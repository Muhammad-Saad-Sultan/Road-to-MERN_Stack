import ForecastCard from "./ForecastCard";

const Forecast = ({ data, unit }) => {
    return (
        <div className="w-[min(90%,900px)] grid gap-4 grid-cols-2 md:grid-cols-5">
            {
                data.map((data) => (
                    <ForecastCard key={data.day} condition={data.condition} day={data.day} icon={data.icon} high={data.high} low={data.low} unit={unit} />
                ))
            }
        </div>
    );
};

export default Forecast;
