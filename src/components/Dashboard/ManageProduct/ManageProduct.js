import React from 'react';
import Button from '@mui/material/Button';

const ManageProduct = (props) => {

    const {title, img, price, _id} = props.product;

    return (
        <div className="order-product-list">
            <div className="order-product">
            <div>
            <img src={img} />
            </div>
            <div>
            <h5>{title}</h5>
            <h6>$ {price}</h6>
            </div>
            </div>
            <div>
            <Button onClick={() => props.handleRemoveProduct(_id)} variant="contained">Remove</Button>
            </div>
        </div>
    );
};

export default ManageProduct;