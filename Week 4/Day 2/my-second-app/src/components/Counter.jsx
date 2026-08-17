import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Counter</h2>
            <p className="counter"><span className="count">{count}</span></p>
            <div className="buttons">
                <button onClick={() => {
                    if(count > 0) {
                        setCount((prevCount) => {
                            return prevCount - 1
                        })
                    }
                }} className="btn red">-</button>
                
                <button onClick={() => {
                    setCount(() => {
                        return 0
                    })
                }} className="btn reset yellow">reset</button>
                
                <button onClick={() => setCount((prevCount) => {
                    return prevCount + 1
                })} className="btn green">+</button>
            </div>
        </>
    )
}

export default Counter
