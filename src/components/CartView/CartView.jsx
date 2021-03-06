import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import CartSVG from '../../assets/CartSVG';

import styles from './CartView.module.css';
import TrashSVG from '../../assets/TrashSVG';

const CartView = () => {
  const {
    cart,
    removeProduct,
    saveCart,
    total,
    subtotal,
    frete,
    setTotal,
    setSubtotal,
  } = useContext(AppContext);

  useEffect(() => {
    getTotal('price');
  }, [cart]);

  const getTotal = (key) => {
    const totalSum = cart.reduce((a, b) => a + (b[key] || 0), 0);
    setSubtotal(totalSum);

    total > 249 ? setTotal(totalSum) : setTotal(totalSum + frete);
  };

  return (
    <div className={styles.cartView}>
      <button
        className={styles.cartBtn}
        onClick={() => saveCart(total, subtotal, frete, cart)}
      >
        Ver Carrinho <CartSVG />
      </button>
      {total < 250 ? (
        <h3>Frete: R$ {frete.toLocaleString()}</h3>
      ) : (
        <h3 className={styles.free}>Frete Grátis!</h3>
      )}
      <h3>Subtotal: R$ {subtotal.toLocaleString()}</h3>
      <h3 className={styles.total}>Total: R$ {total.toLocaleString()}</h3>
      <div className={styles.prods}>
        {cart.map((prod, index) => (
          <div className={styles.prod} key={index}>
            <h3>{prod.name}</h3>
            <button type="button" onClick={() => removeProduct(prod)}>
              <TrashSVG />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartView;
