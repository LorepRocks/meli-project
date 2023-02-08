import React from 'react';
import './loader.scss';
const Loader = () => {
  return (
    <div className="loader">
      <div data-testid="spinner" />
    </div>
  );
};
export default Loader;
