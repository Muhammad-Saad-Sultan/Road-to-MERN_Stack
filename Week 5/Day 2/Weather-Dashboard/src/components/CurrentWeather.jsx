const CurrentWeather = ({ data, unit }) => {
    const styles =
        data.condition === 'Clear' ? {
            bg: "bg-blue-200",
            primaryText: "text-black",
            secondaryText: "text-black/50",
        } : data.condition === 'Clouds' ? {
            bg: "bg-gray-400",
            primaryText: "text-white",
            secondaryText: "text-black/70",
        } : data.condition === 'Rain' ? {
            bg: "bg-gray-800",
            primaryText: "text-white",
            secondaryText: "text-white/70",

        } : {
            bg: "bg-white",
            cityText: "text-black",
            countryText: "text-white",
        }
    ;

    let currentTemp = data.currentTemp;
    let feelLike = data.feelLike;
    if(unit) {
        const conversion = (val) => {
            const value = val*(1.8);
            return value + 32;
        }
        currentTemp = Math.round(conversion(data.currentTemp));
        feelLike = Math.round(conversion(data.feelLike));
    }

    return (
        <div className={`w-[min(90%,650px)] flex flex-col gap-6 p-5 md:p-8 my-8 rounded-2xl border-2 border-[var(--color-primary)] shadow-[0_5px_20px_var(--color-primary-shadow)] ${styles.bg}`}>
            <div className="flex items-baseline gap-[10px]">
                <p className={`text-[2rem] font-bold ${styles.primaryText}`}>{data.name}</p>
                <p className={`text-[1rem] ${styles.secondaryText}`}>{data.country}</p>
            </div>

            <div className=" flex justify-between items-center">
                <div>
                    <p className={`m-0 font-bold text-[3rem] md:text-[4rem] ${styles.primaryText}`}>{currentTemp}°{unit ? "F" : "C"}</p>
                    <span className={`text-[1.1rem] capitalize ${styles.secondaryText}`}>{data.condition}</span>
                </div>
                <img className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]" src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.condition} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 [&>div]:p-4 [&>div]:rounded-2xl [&>div]:bg-[rgba(128,128,128,0.2)] [&>div]:text-center [&_span]:block [&_span]:text-[0.85rem] [&_p]:mt-1 [&_p]:text-[1.1rem] [&_p]:font-bold">
                <div>
                    <span className={` ${styles.secondaryText}`}>Feels like</span>
                    <p className={` ${styles.primaryText}`}>{feelLike}°{unit ? "F" : "C"}</p>
                </div>

                <div>
                    <span className={` ${styles.secondaryText}`}>Humidity</span>
                    <p className={` ${styles.primaryText}`}>{data.humidity}%</p>
                </div>

                <div>
                    <span className={` ${styles.secondaryText}`}>Wind</span>
                    <p className={` ${styles.primaryText}`}>{data.windSpeed} km/h</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;