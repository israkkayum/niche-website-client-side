import { Box, Button, Container, TextField } from '@mui/material';
import { CenterFocusStrong } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = ({cart}) => {

    const {user} = useAuth();

    const initialInfo = { name: user.displayName, email: user.email, phone: '', address: '', city: '' }

    const [orderInfo, setOrderInfo] = useState(initialInfo);


    const history = useHistory()
    const redirect_uri = '/shop';
    const redirect_uri_delivery = '/dashboard';

    
    if(!cart[0]){
        history.push(redirect_uri); 
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handlePlaceOrderSubmit = e => {

        const purchase = {
            ...orderInfo,
            title: cart[0].title,
            price: cart[0].price,
            quantity: cart[0].quantity,
            img: cart[0].img,
            status: 'Pending'
        }
       
        fetch('https://damp-island-81806.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
            });

        history.push(redirect_uri_delivery); 

        e.preventDefault();
    }


    return (
         <div>
                <Container>
                    <h1 className="purchase-title">YOUR ORDER</h1>
                <div className="cart-product">
                    <div>
                    <img src={cart[0]?.img} />
                    </div>
                    <div>
                    <h2>{cart[0]?.title}</h2>
                    <h5>Price : $ {cart[0]?.price}</h5>
                    <h5>Quantity : {cart[0]?.quantity}</h5>
                    <p>Description : {cart[0]?.description}</p>
                    </div>
                </div>
                <h1 className="purchase-title">PLACE ORDER</h1>

                <form onSubmit={handlePlaceOrderSubmit}>

                    <Box
                        sx={{
                            padding: '50px',
                    
                        }}
                        >
                        <TextField 
                        fullWidth label="Full Name"
                        id="fullWidth"
                        name="name"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        disabled
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your Email"
                        id="fullWidth"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        disabled
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your Phone Number"
                        id="fullWidth"
                        name="phone"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your Address"
                        id="fullWidth"
                        name="address"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your City"
                        id="fullWidth"
                        name="city"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                         
                         <Button style={{marginTop:'20px'}} type="submit" variant="contained">Place Order</Button>
                    </Box>
                     
                      
                    </form>

                </Container>
         </div>
    );
};

export default Purchase;