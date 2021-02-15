import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import CartSVG from '../../assets/CartSVG';

import styles from './CartView.module.css';
import TrashSVG from '../../assets/TrashSVG';

const CartView = () => {
  const { cart, removeProduct, saveCart } = useContext(AppContext);

  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [frete, setFrete] = useState(0);

  useEffect(() => {
    getTotal('price');
  }, [cart]);

  const getTotal = (key) => {
    const totalSum = cart.reduce((a, b) => a + (b[key] || 0), 0);
    setTotal(totalSum);
    setSubtotal(totalSum);
  };

  return (
    <div className={styles.cartView}>
      <button
        className={styles.cartBtn}
        onClick={() => saveCart(total, subtotal, frete, cart)}
      >
        Ver Carrinho <CartSVG />
      </button>
      <h3>Frete: {frete}</h3>
      <h3>Subtotal: {subtotal.toLocaleString()}</h3>
      <h3>Total: R$ {total.toLocaleString()}</h3>
      <div className={styles.prods}>
        {cart.map((prod, index) => (
          <div className={styles.prod} key={index}>
            <h3>{prod.name}</h3>
            <button onClick={() => removeProduct(prod)}>
              <TrashSVG />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartView;
