import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';

const AddReview = () => {

    const [review, setReview] = useState([]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const addReview = { ...review };
        addReview[field] = value;
        setReview(addReview);

    }

    const handleReviewSubmit = e => {

        const reviews = {
            ...review
        }

        fetch('https://damp-island-81806.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
            });

        e.preventDefault();
    }

    return (
        <div>
            <Container>
            <h3 style={{textAlign:'center', marginTop:'-50px'}}>MY Review</h3>

            <form onSubmit={handleReviewSubmit}>

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
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your Photo Link"
                        id="fullWidth"
                        name="img"
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Give Ratting (1 to 5)"
                        id="fullWidth"
                        name = 'rating'
                        onBlur={handleOnBlur}
                        margin="dense"
                         />
                        <TextField 
                        fullWidth label="Your Feedback"
                        id="fullWidth"
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        name="report"
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

export default AddReview;