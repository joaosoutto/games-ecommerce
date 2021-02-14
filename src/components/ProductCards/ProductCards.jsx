import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from './ProductCards.module.css';

const CompName = ({ product }) => {
  const { addProduct } = useContext(AppContext);

  return (
    <div className={styles.card}>
      <img
        alt="Product Cover"
        src={`${process.env.PUBLIC_URL}/assets/${product.image}`}
      />
      <h1>{product.name}</h1>

      <h4>{product.price}</h4>
      <h4>{product.score}</h4>
      <button onClick={() => addProduct(product)}>Add to cart</button>
    </div>
  );
};

export default CompName;
