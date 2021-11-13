import React, { useState } from 'react';
import './Product.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Product = ({product}) => {

    const {title, price, img} = product;

    return (
        <div>
          <Card>
                <img 
                src={img}
                style={{width:'100%', height: '250px', textAlign:'center'}}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                
                <CardActions className="card-footer">
                <Typography variant="body2" style={{color: 'red', fontWeight:'bold'}}>
                       $ {price}
                </Typography>
                <NavLink to ="/shop" style={{textDecoration:'none'}}>
                <Button variant="contained">Shop Now</Button>
                </NavLink>
              </CardActions>
            </Card>
        </div>
    );
};

export default Product;