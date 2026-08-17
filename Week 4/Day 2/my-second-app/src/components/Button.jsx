const Button = ({myColor, isActive, handleColor}) => {
    return (
        <>
            <button onClick={() => {handleColor(myColor)}} className={isActive ? "btn width active" : "btn width"} style={{backgroundColor: myColor}}>{myColor}</button>
        </>
    )
}

export default Button
