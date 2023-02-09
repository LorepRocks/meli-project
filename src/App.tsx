import React from 'react';
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import ItemsList from './pages/ItemList/ItemsList';
import ItemDetails from './pages/ItemDetail/ItemDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
