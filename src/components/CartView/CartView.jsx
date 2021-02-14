import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from './CartView.module.css';

const CartView = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className={styles.cartView}>
      <h1>Cart:</h1>
      <h3>Frete:</h3>
      <h3>SubTotal:</h3>
      <h3>Total:</h3>
      <div>
        {cart.map((prod) => (
          <h3>{prod.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default CartView;
