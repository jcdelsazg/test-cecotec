import React from 'react';
import './App.scss';
import AddProduct from '../AddProduct/';
import ProductsList from '../ProductsList/';

function App() {
  return (
    <div className="container">
      <h1>CRUD Products</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Products</h2>
          <AddProduct />
        </div>
        <div className="flex-large">
          <h2>View Products</h2>
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
