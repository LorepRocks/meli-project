import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SearchInput from '../SearchInput/SearchInput';
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="./logo.png" alt="logo" />
      </Link>
      <SearchInput />
    </header>
  );
};

export default Header;
