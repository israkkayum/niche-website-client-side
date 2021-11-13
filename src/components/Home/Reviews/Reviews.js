import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://damp-island-81806.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])

    return (
        <div>
             <Container>
                <Typography sx={{textAlign: 'center', fontWeight: 600, my: 5, py:5}} variant="h5" component="div">
                    REVIEWS
                </Typography>
                <div className="reviews-card"> 
                    
                           {  
                              reviews.map(review => <Review
                                    key={review._id}
                                    review={review}
                                >

                                </Review>)
                            }

                </div>
            </Container>
       </div>
    );
};

export default Reviews;