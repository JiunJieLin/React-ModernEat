import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({});
export const ThemeContext = createContext();
export const AuthContext = createContext();

export const ProductProvider = ({ children }) => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const initialDarkMode =
    (isLocalStorageAvailable && localStorage.getItem("darkMode") === "true") ||
    false;
  const initialCart =
    (isLocalStorageAvailable && JSON.parse(localStorage.getItem("cart"))) || [];

  const [cart, setCart] = useState(initialCart);
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode, isLocalStorageAvailable]);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLocalStorageAvailable]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const contextValue = {
    cart,
    setCart,
    darkMode,
    toggleDarkMode,
    loggedIn,
    setLoggedIn,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
          {children}
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </ProductContext.Provider>
  );
};
