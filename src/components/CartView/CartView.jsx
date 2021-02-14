import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { freteHandle } from '../../helpers/freteHandle';
import { useHistory } from 'react-router-dom';

import styles from './CartView.module.css';

const CartView = () => {
  const history = useHistory();
  const { cart, removeProduct } = useContext(AppContext);

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
      <h1>Cart:</h1>
      <h3>Frete: {frete}</h3>
      <h3>Subtotal: {subtotal.toLocaleString()}</h3>
      <h3>Total: R$ {total.toLocaleString()}</h3>
      <div>
        {cart.map((prod, index) => (
          <div key={index}>
            <h3>{prod.name}</h3>
            <button onClick={() => removeProduct(prod)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartView;
