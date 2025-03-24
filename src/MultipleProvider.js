import React, { createContext, useContext } from "react";

// Create two contexts
const ThemeContext = createContext();
const UserContext = createContext();

// ThemeProvider
function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}

// UserProvider
function UserProvider({ children }) {
  return (
    <UserContext.Provider value="John Doe">
      {children}
    </UserContext.Provider>
  );
}

// Consumer Component
function DisplayInfo() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <p>User: {user}</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <DisplayInfo />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
