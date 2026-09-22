const ForecastCard = ({ condition, day, icon, high, low, unit }) => {
    const styles =
        condition === 'Clear' ? {
            bg: "bg-blue-200",
            primaryText: "text-black",
            secondaryText: "text-black/50",
        } : condition === 'Clouds' ? {
            bg: "bg-gray-400",
            primaryText: "text-white",
            secondaryText: "text-black/60",
        } : condition === 'Rain' ? {
            bg: "bg-gray-800",
            primaryText: "text-white",
            secondaryText: "text-white/50",
        } : {
            bg: "bg-white",
            primaryText: "text-black",
            secondaryText: "text-white",
        }
    ;
    if(unit) {
        const conversion = (val) => {
            const value = val*(1.8);
            return value + 32;
        }
        high = Math.round(conversion(high));
        low = Math.round(conversion(low));
    }

    return (
        <div className={`py-[18px] px-3 rounded-2xl border border-[var(--color-primary)] shadow-[0_3px_10px_var(--color-primary-shadow)] flex flex-col items-center transition-[transform, box-shadow] duration-200 ease-[ease] hover:-translate-y-[5px] hover:shadow-[0_6px_15px_var(--color-primary-shadow-hover)] ${styles.bg}`}>
            <p className={`m-0 text-base font-bold ${styles.primaryText}`}>{day}</p>
            <img className="w-[65px] h-[65px] my-[10px]" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${day} weather`}/>
            <div className="*:m-0 flex gap-4">
                <p className={`font-bold ${styles.primaryText}`}>{high}°{unit ? "F" : "C"}</p>
                <p className={`${styles.secondaryText}`}>{low}°{unit ? "F" : "C"}</p>
            </div>
        </div>
    );
};

export default ForecastCard;