import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    
    useEffect( () => {
        fetch('https://damp-island-81806.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    const handleRemoveProduct = id =>{

        const proceed = window.confirm('Are you sure, you want to delete');

        if(proceed){
            
            fetch(`https://damp-island-81806.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const remainingProducts = products.filter(order => order._id != id);
                        setProducts(remainingProducts);
                    }
                })

        }
    };


    return (
        <div>

<Container>
            <h3 style={{textAlign:'center', marginTop:'-50px'}}>Manage Products</h3>

            {
             
             products.map(product => <ManageProduct
             
               key = {product._id}
               product = {product} 
               handleRemoveProduct = {handleRemoveProduct }
             >
        
             </ManageProduct>)

            }

            </Container>
            
        </div>
    );
};

export default ManageProducts;