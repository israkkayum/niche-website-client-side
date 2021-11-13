import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../../hooks/useAuth';
import { AccountCircle } from '@mui/icons-material';
import { Stack } from '@mui/material';

const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <NavLink to="/home" style={{textDecoration:'none', color:'white'}}>
                        KOMO BIKE
                      </NavLink>
                </Typography>
                        
                        <NavLink to="/shop" style={{color:'white',textDecoration:'none'}}>
                           <Button color="inherit">Shop</Button>
                        </NavLink>
                 
                        {user?.email ?<div>
                        <NavLink to="/dashboard" style={{color:'white',textDecoration:'none'}}>
                           <Button color="inherit">Dashboard</Button>
                         </NavLink>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                              <AccountCircle />
                       </IconButton>
                            </div> :
                             <NavLink to="/login" style={{textDecoration:'none', color:'white'}}>
                             <Button color="inherit">Login</Button>
                            </NavLink>
                            }

                </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
};

export default Header;