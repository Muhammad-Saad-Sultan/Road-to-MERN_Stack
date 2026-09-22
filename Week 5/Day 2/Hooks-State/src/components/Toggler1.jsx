import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Toggler1 = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="box">
            <button className="button" 
                style={
                    theme ? {
                        backgroundColor: 'black', 
                        color: 'white'
                    } : {
                        backgroundColor: 'white',
                        color: 'black'
                    }
                } 
                onClick={toggleTheme}
            >Click me to change the Color (Toggler1.jsx)</button>
        </div>
    );
};

export default Toggler1;
