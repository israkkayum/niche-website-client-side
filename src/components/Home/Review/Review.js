import { Rating, Typography } from '@mui/material';
import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const {name, img, rating, report} = review;

    return (
        <div>
            <div className="review-card">
            <div>
                <img src={img} style={{height:'100px', width:'100px', borderRadius:'50px'}}/>
                <Typography variant="h6" component="div" sx={{mb: 3}}>
                        {name}
                </Typography>  
            </div>
            <div>
            <Rating sx={{mb: 3}} name="half-rating-read" defaultValue={rating} readOnly />
            <Typography paragraph>
                 {report}
            </Typography>    
            </div>
            </div>
        </div>
    );
};

export default Review;