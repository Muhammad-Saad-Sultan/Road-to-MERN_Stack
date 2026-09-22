import useLocalStorage from "../hooks/useLocalStorage";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', false);
    const toggleTheme = () => setTheme((theme) => !theme);
    
    return (
        <ThemeContext value={{theme, toggleTheme}}>
            { children }
        </ThemeContext>
    );
};

export default ThemeProvider;