import PropTypes from "prop-types";
import React, { useContext } from 'react';
import CartSVG from '../../assets/CartSVG';
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
      <h4>R$: {product.price}</h4>
      <h4>Nota: {product.score}</h4>
      <button onClick={() => addProduct(product)}>
        Adicionar ao carrinho <CartSVG />
      </button>
    </div>
  );
};

CompName.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number
  })
}

export default CompName;
