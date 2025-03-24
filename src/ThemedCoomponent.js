import { useContext } from "react";

function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    );
  }
  export default ThemedComponent;