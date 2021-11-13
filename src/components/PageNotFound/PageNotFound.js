import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import notFound from '../../images/page-not-found.jpg';
import { Container } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PageNotFound = () => {
    return (
        <div>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} style={{display:'grid',alignItems:'center'}}>
          <Item>
              <div>
                           <h2>OOPS!!!</h2>
                           <h1>Page Not Be FoundPage</h1>
                           </div>

                           <NavLink to="/home" style={{textDecoration:'none'}}> <Button variant="contained">Home</Button> </NavLink></Item>
        </Grid>
        <Grid item xs={8}>
          <img src={notFound} style={{width:'100%', height:'100%'}} />
        </Grid>
      </Grid>
    </Box>
            </Container>
        </div>
    );
};

export default PageNotFound;