import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Ataris</h1>
      </Link>
    </header>
  );
};

export default Header;
