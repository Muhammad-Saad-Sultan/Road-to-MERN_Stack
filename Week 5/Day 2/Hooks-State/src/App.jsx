import ThemeProvider from "./components/ThemeProvider";
import Toggler1 from "./components/Toggler1";
import Toggler2 from "./components/Toggler2";

const App = () => {
    return (
        <ThemeProvider>
            <Toggler1 />
            <Toggler2 />
        </ThemeProvider>
    );
};

export default App;
