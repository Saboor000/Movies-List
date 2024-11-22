// src/contexts/ThemeContext.jsx
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const light = { syntax: "black", ui: "#c0c0c0", bg: "#f1f1f1" };
  const dark = { syntax: "#ddd", ui: "#333", bg: "#555" };

  const toggleTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
