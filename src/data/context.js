import { createContext, useState } from "react";
export const ProductContext = createContext({});
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextValue = {
    cart,
    setCart,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
