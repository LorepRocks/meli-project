import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Error from './Error';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import BreadCrumb from '../components/BreadCrumb';
import { Category, Result } from '../types';
import './itemsList.scss';

const ItemsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const url = `${process.env.REACT_APP_API_URL}/items?q=${query}`;
  const { data, loading, error } = useFetch(url);

  console.log('__data', data);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={error} />;
  }

  return (
    <section id="results" className="wrapper">
      <BreadCrumb data={data.categories}></BreadCrumb>
      <div className="resultsContainer">Itrems</div>
    </section>
  );
};

export default ItemsList;
