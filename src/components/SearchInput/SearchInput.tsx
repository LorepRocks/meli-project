import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import './searchInput.scss';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (query) {
      navigate({
        pathname: '/items',
        search: createSearchParams({
          search: query,
        }).toString(),
      });
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      handleRedirect();
    }
  };

  const handleClick = () => {
    handleRedirect();
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        placeholder="Nunca dejes de buscar"
      />
      <button onClick={handleClick}>
        <img id="search" src="./search.png" alt="search icon" />
      </button>
    </>
  );
};

export default SearchInput;
