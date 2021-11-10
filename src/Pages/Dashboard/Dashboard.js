import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {
  Switch,
  Route,
  useRouteMatch,
  NavLink
} from "react-router-dom";

import { useHistory } from 'react-router';
import Pay from './UserMenu/Pay/Pay';
import AddReview from './UserMenu/AddReview/AddReview';
import MyOrders from './UserMenu/MyOrders/MyOrders';
import MakeAdmin from './AdminMenu/MakeAdmin/MakeAdmin';
import ManageProducts from './AdminMenu/ManageProducts/ManageProducts';
import AddProduct from './AdminMenu/AddProduct/AddProduct';
import ManageOrders from './AdminMenu/ManageOrders/ManageOrders';
import { useAuth } from '../../Hooks/useAuth';

import './Dashboard.css';
import AdminRoute from '../../AdminRoute/AdminRoute';
import NotFound from '../NotFound/NotFound';

const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history= useHistory()
    let { path, url } = useRouteMatch();

    const { logOut, admin } = useAuth();

    // mui drawer toggle
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // redir to home
    const redirectToHome = () => {
        history.push('/home');
    };
  



    const drawer = (
        <div className=" sidenav text-light">
            <Toolbar/>
            <NavLink to='/dashboard' className="side-nav-common">
                <h5 className="d-flex justify-content-center">Dashboard</h5>
            </NavLink>
            <Divider />
            <div className=" py-5 my-5 d-flex flex-column justify-content-end align-items-center">

                {
                    admin ?
                        <ul className="navbar-nav">
                            {/* admin */}
                            <li className="my-3 fs-4 nav-item">
                                <NavLink to ={`${url}/manageorders`}  className="side-nav-common" activeClassName="side-nav-active" >Manage all orders </NavLink>
                            </li>
                            <li className="my-3 fs-4 nav-item">
                                <NavLink to ={`${url}/addproduct`}  className="side-nav-common" activeClassName="side-nav-active" >Add Product </NavLink>
                            </li>
                            <li className="my-3 fs-4 nav-item">
                                <NavLink to ={`${url}/manageproducts`}  className="side-nav-common" activeClassName="side-nav-active" >Manage Products </NavLink>
                            </li>
                            <li className="my-3 fs-4 nav-item">
                                <NavLink to ={`${url}/makeadmin`}  className="side-nav-common" activeClassName="side-nav-active" >Make Admin </NavLink>
                            </li>
                            {/* always */}
                            <li className="my-3 fs-4 nav-item">
                                <span className="side-nav-common" onClick={() => { logOut(history) }}> Logout</span>
                            </li>
                        </ul> :
                        <ul className="navbar-nav">
                    
                    {/* user */}
                    <li className="my-3 fs-4 nav-item">
                        <NavLink to={`${url}/pay`} className="side-nav-common" activeClassName="side-nav-active"> Pay </NavLink>
                    </li>
                    <li className="my-3 fs-4 nav-item">
                        <NavLink to ={`${url}/myorders`} className="side-nav-common" activeClassName="side-nav-active" >My orders </NavLink>
                    </li>
                    <li className="my-3 fs-4 nav-item">
                        <NavLink to ={`${url}/addreview`}  className="side-nav-common" activeClassName="side-nav-active" >Add Review </NavLink>
                    </li>
                    {/* always */}
                    <li className="my-3 fs-4 nav-item">
                        <span className="side-nav-common"  onClick={()=>{logOut(history)}}> Logout</span>
                    </li>

                    
                </ul>

                }


                
                
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                bgcolor: '#141212',  
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
                    sx={{ mr: 2, display: { sm: 'none' } , bgColor: 'blue'} }
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                        <button className="back-to-home-btn d-flex align-items-center" onClick={redirectToHome}><ArrowBackIosNewIcon></ArrowBackIosNewIcon>Home</button>
                </Typography>
                </Toolbar>
            </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
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
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }  }}
        >
            <Toolbar />
                {
                    admin ?
                    <Switch>
                            <AdminRoute exact path={path}>
                                <ManageOrders/>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders/>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct/>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts/>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin/>
                            </AdminRoute>
                            <AdminRoute path={`${path}/*`}>
                                <NotFound/>
                            </AdminRoute>
                    </Switch>
                        :
                    <Switch>
                        <Route exact path={path}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/addreview`}>
                            <AddReview/>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders/>
                        </Route>
                        <Route path={`${path}/*`}>
                            <NotFound/>
                        </Route>
                    </Switch>    
            }
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
