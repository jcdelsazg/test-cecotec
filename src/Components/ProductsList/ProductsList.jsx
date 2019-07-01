import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const ProductsList = props => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('products')
      .onSnapshot(snapshot => {
        const newProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(newProducts);
      });
  }, []);

  const handleDeleteProduct = id => {
    firebase
      .firestore()
      .collection('products')
      .doc(id)
      .delete();
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Prize</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.prize}</TableCell>
              <TableCell align="right">{product.stock}</TableCell>
              <TableCell align="right">
                <IconButton
                  className={classes.button}
                  size="small"
                  aria-label="Delete"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  className={classes.button}
                  size="small"
                  aria-label="Edit"
                  onClick={() => props.editRow(product)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProductsList;
