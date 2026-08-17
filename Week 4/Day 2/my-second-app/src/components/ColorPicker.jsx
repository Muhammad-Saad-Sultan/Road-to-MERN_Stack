import { useState } from "react"
import Button from "./Button"

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('white');
    const colors = ['red', 'green', 'indigo', 'blue', 'salmon'];
    
    function handleColor(color) {
        setSelectedColor(color);
    }

    return (
        <>
            <h2>Color Picker</h2>
            <div className="colorPicker" style={{backgroundColor: `${selectedColor}`}}></div>
            <div className="buttons">
                {
                    colors.map((color) => {
                        let isActive = (color === selectedColor);
                        return <Button myColor={color} isActive={isActive} handleColor={handleColor}/>
                    })
                }
            </div>
        </>
    )
}

export default ColorPicker
