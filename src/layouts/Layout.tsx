import React, { FC, ReactNode } from 'react';
import Header from '../components/Header/Header';
import './layout.scss';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;
