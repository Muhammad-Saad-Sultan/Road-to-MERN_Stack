import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [theme, setTheme] = useState(() => {
        const val = localStorage.getItem(key);
        return val !== null ? JSON.parse(val) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(theme));
    }, [key, theme]);

    return [theme, setTheme];
};

export default useLocalStorage;