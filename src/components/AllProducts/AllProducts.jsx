import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

import data from '../../services/products.json';
import ProductCards from '../ProductCards/ProductCards';

import styles from './AllProducts.module.css';

const AllProducts = () => {
  const history = useHistory();
  const { products, setProducts } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProducts(data);
    setTimeout(() => {
      setLoading(false);
      console.log(products);
    }, 1000);
  }, []);

  const sortBy = (key) => {
    if (key === 'name') {
      products.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      products.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    }
    history.push('/');
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className={styles.productsGrid}>
      <button onClick={() => sortBy('name')}>Name</button>
      <button onClick={() => sortBy('price')}>Price</button>
      <button onClick={() => sortBy('score')}>Score</button>

      {products.map((product, index) => (
        <ProductCards key={index} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
