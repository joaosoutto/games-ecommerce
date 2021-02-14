import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

import data from '../../services/products.json';
import ProductCards from '../ProductCards/ProductCards';

import styles from './AllProducts.module.css';

const AllProducts = () => {
  const { products, setProducts } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProducts(data);
    setTimeout(() => {
      setLoading(false);
      // console.log(products);
    }, 1000);
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className={styles.productsGrid}>
      {products.map((product, index) => (
        <ProductCards key={index} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
