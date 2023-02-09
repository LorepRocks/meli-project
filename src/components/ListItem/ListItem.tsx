import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Category, Item } from '../../types';
import { formatPrice } from '../../utils';
import './listItem.scss';

const ListItem: FC<{ item: Item; categories: Category[] }> = ({ item, categories }) => {
  return (
    <Link
      to={`/items/${item.id}`}
      state={{ categories: categories }}
      className="link"
      data-testid="link"
    >
      <li role="listitem">
        <div className="card-img">
          <img src={item.picture} alt="product-img"></img>
        </div>
        <div className="card-details">
          <div>
            <span data-testid="price">$ {formatPrice(item.price.amount)}</span>
            {item.free_shipping && <img className="shipping-icon" src="./shipping.png"></img>}
          </div>
          <span data-testid="title" className="title">
            {item.title}
          </span>
        </div>
        <div data-testid="city" className="card-info">
          <span>{item.city}</span>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
