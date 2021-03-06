import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from './Checkout.module.css';

const Checkout = () => {
  const { myCart, buy } = useContext(AppContext);

  return (
    <section className={`animeLeft ${styles.sec}`}>
      <div className={styles.checkout}>
        <h1>Total: R$ {myCart[0].total.toLocaleString(2)}</h1>
        {myCart[0].produtos.map((prod, index) => (
          <p key={index}>
            {prod.name} 1un. - R$ {prod.price.toLocaleString()}
          </p>
        ))}
        <button onClick={buy}>Finalizar compra</button>
      </div>
    </section>
  );
};

export default Checkout;
