import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart((products) => [...products, product]);
  };

  const removeProduct = (product) => {
    const prodIndex = cart.indexOf(product);
    cart.splice(prodIndex, 1);
    setCart((products) => [...products]);
  };

  const context = {
    products,
    setProducts,

    cart,
    addProduct,
    removeProduct,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
