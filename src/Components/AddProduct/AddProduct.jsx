import React, { useState } from 'react';

import firebase from '../../Firebase';

import './AddProduct.scss';

const AddProduct = () => {
  const initialFormState = { name: '', prize: '', stock: '' };
  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (!product.name || !product.prize) return;

    firebase
      .firestore()
      .collection('products')
      .add({ ...product })
      .then(() => setProduct(initialFormState));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={product.name || ''}
        onChange={handleInputChange}
      />
      <label>Prize</label>
      <input
        type="text"
        name="prize"
        value={product.prize || ''}
        onChange={handleInputChange}
      />
      <label>Stock</label>
      <input
        type="text"
        name="stock"
        value={product.stock || ''}
        onChange={handleInputChange}
      />
      <button>Add new product</button>
    </form>
  );
};

export default AddProduct;
