import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

import data from '../../services/products.json';
import ProductCards from '../ProductCards/ProductCards';

import styles from './AllProducts.module.css';
import SearchInput from '../SearchInput/SearchInput';


const AllProducts = () => {
  const history = useHistory();
  const { products, setProducts } = useContext(AppContext);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    setProducts(data);
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

  return (
    <div className={styles.div}>
      <div className={styles.filters}>
        <SearchInput handleChange={handleChange} />
        <div className={styles.btns}>
          <p>Ordenar por:</p>
          <button onClick={() => sortBy('name')}>Nome</button>
          <button onClick={() => sortBy('price')}>Preço</button>
          <button onClick={() => sortBy('score')}>Nota</button>
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
