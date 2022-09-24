import {
  AppBar,
  Badge,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout, userReducer } from '../redux/reducers/userReducer';
import ShoppingCart from './Cart/ShoppingCart';

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, total } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  const { userList, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  console.log(currentUser)
  return (
    <Box sx={{ marginBottom: 15 }}>
      <AppBar position='absolute'>
        <Toolbar>
          <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
            qzEro-Market
          </Typography>
          <Button color='inherit'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
              Home
            </Link>
          </Button>
          <Drawer
            open={cartOpen}
            onClose={() => setCartOpen(false)}
            anchor='right'
            transitionDuration={{ enter: 500, exit: 1000 }}
            PaperProps={{
              elevation: 8,
              sx: {
                width: {
                  xs: '100%',
                  sm: 430,
                },
              },
            }}
          >
            <Toolbar />
            <ShoppingCart />
          </Drawer>
          <Badge
            badgeContent={total}
            max={9}
            color='secondary'
            overlap='circular'
          >
            <Button
              color='inherit'
              onClick={() =>
                cartOpen ? setCartOpen(false) : setCartOpen(true)
              }
            >
              Cart
            </Button>
          </Badge>
          {currentUser != undefined ? (
            <Button
              color='inherit'
              onClick={() => {
                dispatch(logout());
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to='/login'
              >
                Logout
              </Link>
            </Button>
          ) : (
            <Button color='inherit'>
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to='/login'
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
