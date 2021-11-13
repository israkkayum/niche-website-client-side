import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions} from '@mui/material';

const Shop = (props) => {

    const {title, price, img, description} = props.product;

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
                    <Typography paragraph>
                        {description}
                   </Typography>
                </CardContent>

                <CardActions className="card-footer">
                <Typography variant="body2" style={{color: 'red', fontWeight:'bold'}}>
                       $ {price}
                </Typography>
                <Button
                 variant="contained"
                 onClick={() => props.handleAddToCart(props.product)}
                 >Buy Now</Button>
              </CardActions>
            </Card>
        </div>
    );
};

export default Shop;