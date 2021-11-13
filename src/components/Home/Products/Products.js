import * as React from 'react';
import './Products.css';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const Products = () => {

    const[products, setProducts] = React.useState([]);

    React.useEffect( () => {
        fetch('https://damp-island-81806.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])


    return (
        <div>

            <Container>
                <Typography sx={{textAlign: 'center', fontWeight: 600, my: 5 }} variant="h5" component="div">
                    OUR PRODUCTS
                </Typography>
                <div className="products-card"> 
                    
                           {  
                              products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                >

                                </Product>)
                            }

                </div>
            </Container>

        </div>
    );
};

export default Products;