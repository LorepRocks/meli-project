import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Error from '../Error/Error';
import Loader from '../../components/Loader/Loader';
import useFetch from '../../hooks/useFetch';
import { Category, Item } from '../../types';
import './itemsList.scss';
import ListItem from '../../components/ListItem/ListItem';
import ItemLayout from '../../layouts/itemLayout/ItemLayout';

const ItemsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const url = `${process.env.REACT_APP_API_URL}/items?q=${query}`;
  const { data, loading, error } = useFetch(url);
  const categories = data.categories as Category[];
  const items = data.items?.slice(0, 4) as Item[];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={error} />;
  }

  return (
    <ItemLayout categories={categories}>
      <ul className="resultsContainer">
        {items?.map((item) => (
          <ListItem key={item.id} item={item} categories={categories}></ListItem>
        ))}
      </ul>
    </ItemLayout>
  );
};

export default ItemsList;
