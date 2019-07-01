import React, { useState } from 'react';

import firebase from '../../Firebase';

import './EditProduct.scss';

const EditProduct = props => {
  const [product, setProduct] = useState(props.currentProduct);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (!product.name || !product.prize || !product.stock) return;

    firebase
      .firestore()
      .collection('products')
      .doc(product.id)
      .update({ ...product })
      .then(() => props.setEditing(false));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        required
      />
      <label>Prize</label>
      <input
        type="text"
        name="prize"
        value={product.prize}
        onChange={handleInputChange}
        required
      />
      <label>Stock</label>
      <input
        type="text"
        name="stock"
        value={product.stock}
        onChange={handleInputChange}
        required
      />
      <button>Edit product</button>
      <button onClick={() => props.setEditing(false)}>Cancel Edit</button>
    </form>
  );
};

export default EditProduct;
