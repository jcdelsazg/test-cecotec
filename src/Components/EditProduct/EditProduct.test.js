import React from 'react';
import ReactDOM from 'react-dom';
import EditProduct from './EditProduct';

it('renders without crashing', () => {
  const editing = () => {};
  const setEditing = () => {};
  const currentProduct = {};
  const div = document.createElement('div');
  ReactDOM.render(
    <EditProduct
      editing={editing}
      setEditing={setEditing}
      currentProduct={currentProduct}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
