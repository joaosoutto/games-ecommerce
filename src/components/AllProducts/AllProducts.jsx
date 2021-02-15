import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

import data from '../../services/products.json';
import ProductCards from '../ProductCards/ProductCards';

import styles from './AllProducts.module.css';
import SearchInput from '../SearchInput/SearchInput';

import load from '../../assets/loading.gif';

const AllProducts = () => {
  const history = useHistory();
  const { products, setProducts } = useContext(AppContext);

  const [filter, setFilter] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProducts(data);
    setTimeout(() => {
      setLoading(false);
      console.log(products);
    }, 1000);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

  const filteredGames = () => {
    if (filteredProducts.length === 0) {
      return <h3 className={styles.noMatch}>Não encontramos nenhum jogo...</h3>;
    } else {
      return filteredProducts.map((product, index) => (
        <ProductCards key={index} product={product} />
      ));
    }
  };

  const sortBy = (key) => {
    if (key === 'name') {
      products.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      products.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    }
    history.push('/');
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  if (loading) return <img className={styles.load} alt="loading" src={load} />;

  return (
    <div className={styles.div}>
      <div className={styles.filters}>
        <SearchInput handleChange={handleChange} />
        <div className={styles.btns}>
          <p>Ordernar por:</p>
          <button onClick={() => sortBy('name')}>Name</button>
          <button onClick={() => sortBy('price')}>Price</button>
          <button onClick={() => sortBy('score')}>Score</button>
        </div>
      </div>
      <div className={styles.productsGrid}>
        {filter
          ? filteredGames()
          : products.map((product, index) => (
              <ProductCards key={index} product={product} />
            ))}
      </div>
    </div>
  );
};

export default AllProducts;
