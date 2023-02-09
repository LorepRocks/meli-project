import React, { FC, ReactNode } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Category } from '../../types';
import './itemLayout.scss';

const ItemLayout: FC<{ children: ReactNode; categories: Category[] }> = ({
  children,
  categories,
}) => {
  return (
    <section data-testid="results" className="wrapper">
      <BreadCrumb data={categories} />
      {children}
    </section>
  );
};

export default ItemLayout;
