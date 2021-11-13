import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const Footer = () => {

    return (
        <div style={{backgroundColor:'black', color:'white'}}>

            <Container>
            <Box sx={{ flexGrow: 1., mt: 5, pt: 5 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={4}>
                    <div>
                    <Typography sx={{pb:5}} variant="h5" component="div">
                    KOMO MARKET
                    </Typography>
                    <Typography paragraph>
                      Terms
                    </Typography>
                    <Typography paragraph>
                       Licenses
                    </Typography>
                    <Typography paragraph>
                       Market API
                    </Typography>
                    <Typography paragraph>
                    Become an affiliate
                    </Typography>
                    </div>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography sx={{pb:5}} variant="h5" component="div">
                       MEET KOMO
                    </Typography>
                    <Typography paragraph>
                       About Komo Bike
                    </Typography>
                    <Typography paragraph>
                       Careers
                    </Typography>
                    <Typography paragraph>
                       Sitemap
                    </Typography>
                    <Typography paragraph>
                       Privacy Policy
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <div>
                    <Typography sx={{pb:5}} variant="h5" component="div">
                    OUR COMMUNITY
                    </Typography>
                    <Typography paragraph>
                      Community
                    </Typography>
                    <Typography paragraph>
                       Blog
                    </Typography>
                    <Typography paragraph>
                       Forums
                    </Typography>
                    <Typography paragraph>
                       Meetups
                    </Typography>
                    </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Footer;