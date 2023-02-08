import React from 'react';
import './header.scss';
import SearchInput from './SearchInput';
const Header = () => {
  return (
    <header>
      <img src="./logo.png" />
      <SearchInput />
    </header>
  );
};

export default Header;
