import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import './searchInput.scss';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate({
      pathname: '/items',
      search: createSearchParams({
        search: query,
      }).toString(),
    });
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log('enter', query);
      handleRedirect();
    }
  };

  const handleClick = () => {
    console.log('__query to search', query);
    handleRedirect();
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <button onClick={handleClick}>
        <img id="search" src="./search.png" />
      </button>
    </>
  );
};

export default SearchInput;
