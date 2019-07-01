import React, { useState } from 'react';
import './App.scss';
import AddProduct from '../AddProduct/';
import ProductsList from '../ProductsList/';
import EditProduct from '../EditProduct/';

function App() {
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: '', name: '', prize: '', stock: '' };
  const [currentProduct, setCurrentProduct] = useState(initialFormState);
  const editRow = product => {
    setEditing(true);

    setCurrentProduct({
      id: product.id,
      name: product.name,
      prize: product.prize,
      stock: product.stock
    });
  };

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem('logged');
    window.location = '/';
  };
  return (
    <div className="container">
      <div className="flex-row">
        <h1>CRUD Products</h1>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditProduct
                editing={editing}
                setEditing={setEditing}
                currentProduct={currentProduct}
              />
            </div>
          ) : (
            <div>
              <h2>Add Products</h2>
              <AddProduct />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Products</h2>
          <ProductsList editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
