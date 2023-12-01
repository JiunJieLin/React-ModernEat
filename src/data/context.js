import { createContext, useState } from "react";
export const ProductContext = createContext({});
export const ThemeContext = createContext();
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  const contextValue = {
    cart,
    setCart,
    darkMode,
    toggleDarkMode,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </ProductContext.Provider>
  );
};
