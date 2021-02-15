import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import CartSVG from '../../assets/CartSVG';
import { AppContext } from '../../context/AppContext';

import styles from './ProductCards.module.css';

const ProductCards = ({ product }) => {
  const { addProduct } = useContext(AppContext);

  return (
    <div className={styles.card}>
      <img
        role="image"
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

ProductCards.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
  }),
};

export default ProductCards;
