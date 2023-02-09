import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Error from '../Error/Error';
import useFetch from '../../hooks/useFetch';
import { Item } from '../../types';
import ItemLayout from '../../layouts/itemLayout/ItemLayout';
import { formatPrice, parseCondition } from '../../utils';
import './itemDetail.scss';

const ItemDetails = () => {
  const { id: itemId } = useParams();
  const location = useLocation();
  const { categories } = location.state || [];
  const url = `${process.env.REACT_APP_API_URL}/items/${itemId}`;
  const { data, loading, error } = useFetch(url);
  const item = data.item as Item;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error msg={error} />;
  }

  return (
    <ItemLayout categories={categories}>
      <div className="item-container">
        <div className="item-info">
          <img src={item.picture} alt="product-img"></img>
          <div>
            <span id="condition">
              {parseCondition(item.condition)} - {item.sold_quantity} vendidos
            </span>
            <span id="title">{item.title}</span>
            <span id="price">$ {formatPrice(item.price.amount)}</span>
            <button>Comprar</button>
          </div>
        </div>
        <div className="item-description">
          <h2>Descripción del Producto</h2>
          <p>{item.description || 'Sin descripción'}</p>
        </div>
      </div>
    </ItemLayout>
  );
};

export default ItemDetails;
