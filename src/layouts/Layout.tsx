import React, { FC, ReactNode } from 'react';
import Header from '../components/Header';
import './layout.scss';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
