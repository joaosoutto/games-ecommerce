import React from 'react';
import AllProducts from '../../components/AllProducts/AllProducts';
import CartView from '../../components/CartView/CartView';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={`animeLeft ${styles.sec}`}>
      <AllProducts />
      <CartView />
    </section>
  );
};

export default Home;
