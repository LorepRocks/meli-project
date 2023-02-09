import React, { FC } from 'react';
import { Category } from '../../types';
import './breadCrumb.scss';

type BreadCrumbProps = {
  data: Category[] | undefined;
};
const BreadCrumb: FC<BreadCrumbProps> = ({ data }) => {
  let value = '';
  console.log('__data', data);
  if (data) {
    const selectedItems = data.slice(0, 4);
    selectedItems.map((item, index) => {
      value = value + item.name;
      if (index + 1 !== selectedItems.length) {
        value = value + ' > ';
      }
    });
  }
  return <div className="breadCrumb">{value}</div>;
};

export default BreadCrumb;
