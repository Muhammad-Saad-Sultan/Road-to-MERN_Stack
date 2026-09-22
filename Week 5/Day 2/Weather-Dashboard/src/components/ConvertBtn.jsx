const ConvertBtn = ({convert, unit}) => {
    return (
        <div className="w-full text-end pr-10 pt-5 max-[500px]:pt-4">
            <button className="p-2 border border-[var(--color-primary)] bg-[var(--color-primary)] text-white rounded-lg hover:cursor-pointer hover:bg-[var(--color-primary-hover)]" onClick={convert}>Convert {unit ? "°F to °C" : "°C to °F"}</button>
        </div>
    )
}

export default ConvertBtn
