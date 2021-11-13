import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { NavLink } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

const drawerWidth = 240;

const Dashboard = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
              <NavLink to="/" style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
              </NavLink>
            </ListItem>
            {admin || <div>

            <ListItem>
            <NavLink to={`${url}/pay`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <PaymentIcon />
            </ListItemIcon>
            <ListItemText>Pay</ListItemText>
            </NavLink>
             </ListItem>

             <ListItem>
            <NavLink to={`${url}/myOrder`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>My Order</ListItemText>
            </NavLink>
           </ListItem>

             <ListItem>
            <NavLink to={`${url}/review`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <ReviewsIcon />
            </ListItemIcon>
            <ListItemText>Review</ListItemText>
            </NavLink>
           </ListItem>

             <ListItem style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black', cursor:'pointer'}}>
            <ListItemIcon>
             <LogoutIcon />
            </ListItemIcon>
            <ListItemText onClick={logout}>Logout</ListItemText>
           </ListItem>

            </div>
            }

            {admin && <div>

             <ListItem>
            <NavLink to={`${url}/manageOrders`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText>Manage All Orders</ListItemText>
            </NavLink>
            </ListItem>

             <ListItem>
            <NavLink to={`${url}/addProduct`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <AddIcon />
            </ListItemIcon>
            <ListItemText>Add Product</ListItemText>
            </NavLink>
            </ListItem>

             <ListItem>
            <NavLink to={`${url}/makeAdmin`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText>Make Admin</ListItemText>
            </NavLink>
            </ListItem>

             <ListItem>
            <NavLink to={`${url}/manageProducts`} style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black'}}>
            <ListItemIcon>
             <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText>Manage Products</ListItemText>
            </NavLink>
            </ListItem>

            <ListItem style={{display:'flex', alignItems:'center', textDecoration:'none', color:'black', cursor:'pointer'}}>
            <ListItemIcon>
             <LogoutIcon />
            </ListItemIcon>
            <ListItemText onClick={logout}>Logout</ListItemText>
           </ListItem>

            </div>
            }

        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          
          <Switch>
                <Route path={`${path}/pay`}>
                     <Pay></Pay>   
                </Route>
                <Route path={`${path}/myOrder`}>
                     <MyOrders></MyOrders>   
                </Route>
                <Route path={`${path}/review`}>
                     <AddReview></AddReview>  
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                     <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                     <AddProducts></AddProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                     <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageOrders`}>
                     <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
            </Switch>

        </Box>
      </Box>
    );
  }
  
  Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Dashboard;