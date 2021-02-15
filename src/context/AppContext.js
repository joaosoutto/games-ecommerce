import PropTypes from "prop-types";
import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [myCart, setMyCart] = useState([]);

  const addProduct = (product) => {
    setCart((products) => [...products, product]);
  };

  const removeProduct = (product) => {
    const prodIndex = cart.indexOf(product);
    cart.splice(prodIndex, 1);
    setCart((products) => [...products]);
  };

  const saveCart = (total, subtotal, frete, produtos) => {
    const newCart = {
      total: total,
      subtotal: subtotal,
      frete: frete,
      produtos,
    };

    setMyCart((arr) => [...arr, newCart]);

    history.push('/checkout');
  };

  const buy = () => {
    setMyCart([]);
    setCart([]);
    history.push('/');
  };

  const context = {
    products,
    setProducts,

    cart,
    addProduct,
    removeProduct,
    saveCart,
    myCart,
    setMyCart,
    buy,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.any
}

export { AppContext, AppProvider };
