import { Container, TableBody } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const ManageAllOrders = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://damp-island-81806.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    const handleRemoveProduct = id =>{

      const proceed = window.confirm('Are you sure, you want to delete');

      if(proceed){
          
          fetch(`https://damp-island-81806.herokuapp.com/purchase/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if(data.deletedCount > 0){
                      const remainingProducts = products.filter(product => product._id != id);
                      setProducts(remainingProducts);
                  }
              })

      }
  };

    const handleStatusProduct = id =>{

      const proceed = window.confirm('Are you sure, you want to Shipped');

      if(proceed){
          
          fetch(`https://damp-island-81806.herokuapp.com/purchase/${id}`, {
              method: 'PUT',
              headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
          })
              .then(res => res.json())
              .then(data => {
          
              })

      }
  };

    return (
        <div>
            <Container>
            <h3 style={{textAlign:'center', marginTop:'-50px'}}>Manage All Orders</h3>

            <TableContainer component={Paper} style={{overflow: 'auto'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="left">Customer Email</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Product Price</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => <ManageAllOrder
          
               key={product._id}
               product={product}
               handleStatusProduct = {handleStatusProduct}
               handleRemoveProduct = {handleRemoveProduct }
          >

          </ManageAllOrder>)}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
        </div>
    );
};

export default ManageAllOrders;