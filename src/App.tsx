import React from 'react';
import './App.css';
import Layout from './layouts/Layout';
import { Routes, Route } from 'react-router-dom';
import ItemsList from './pages/ItemsList';
import ItemDetails from './pages/ItemDetail';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/items" element={<ItemsList />} />
          <Route path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
