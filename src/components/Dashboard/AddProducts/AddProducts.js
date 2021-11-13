import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';

const AddProducts = () => {

    const [product, setProduct] = useState([]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const addProduct = { ...product };
        addProduct[field] = value;
        setProduct(addProduct);

    }

    const handleProductSubmit = e => {

        const Products = {
            ...product
        }

        fetch('https://damp-island-81806.herokuapp.com/Products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Products)
        })
            .then(res => res.json())
            .then(data => {
            });

        e.preventDefault();
    }

    return (
        <div>

<Container>
            <h3 style={{textAlign:'center', marginTop:'-50px'}}>Add Product</h3>

            <form onSubmit={handleProductSubmit}>

                    <Box
                        sx={{
                            padding: '50px',
                    
                        }}
                        >
                        <TextField 
                        fullWidth label="Product Name"
                        id="fullWidth"
                        name="title"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Product Image Link"
                        id="fullWidth"
                        name="img"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Product Price"
                        id="fullWidth"
                        name = 'price'
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Product Description"
                        id="fullWidth"
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        name="description"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                         
                         <Button style={{marginTop:'20px'}} type="submit" variant="contained">Submit</Button>
                    </Box>
                     
                      
                    </form>
            </Container>

        </div>
    );
};

export default AddProducts;