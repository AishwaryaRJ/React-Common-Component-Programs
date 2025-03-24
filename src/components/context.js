const ThemeContext = React.createContext('light');
const App = () => {
    return (
        < ThemeContext.Provider value='dark' >
            <Toolbar />
        </ThemeContext.Provider >
    )
}

const Toolbar = () => {
    const theme = React.useContext(ThemeContext);
    return <div>Current Theme: {theme}</div>
}