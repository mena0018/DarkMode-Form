import Home from "./Components/Home";
import "./index.scss";
import { createContext, useState } from "react";
import Switch from 'react-js-switch';


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((theme) => theme === "light" ? "dark" : "light" );


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Home />
        <Switch value={theme === "light" ? false : true} onChange={toggleTheme} />
        <label htmlFor="">{theme === "light" ? "DarMode"  : "LightMode"}</label>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
