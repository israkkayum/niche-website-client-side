import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Shop from '../Shop/Shop';
import { useHistory } from 'react-router';

const Shops = ({cart, setCart}) => {

    const [products, setProducts] = useState([]);

    const history = useHistory()

    const redirect_uri = '/purchase';


    useEffect( () => {
        fetch('https://damp-island-81806.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        history.push(redirect_uri); 

    
    }

    return (
        <div>
            <Container>
                <Typography sx={{textAlign: 'center', fontWeight: 600, my: 5 }} variant="h5" component="div">
                    OUR PRODUCTS
                </Typography>
                <div className="products-card"> 
                    
                           {  
                              products.map(product => <Shop
                                    key={product._id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                >

                                </Shop>)
                            }

                </div>
            </Container>
        </div>
    );

};

export default Shops;