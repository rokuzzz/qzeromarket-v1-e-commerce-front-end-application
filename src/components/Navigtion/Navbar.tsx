import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../redux/reducers/userReducer';
import ShoppingCart from '../Cart/ShoppingCart';
import Hamburger from './Hamburger';
import { StyledBadge } from '../../styles/navigation';

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const { total } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  const { currentUser } = useAppSelector((state) => state.userReducer);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ marginBottom: 15 }}>
      <AppBar position='absolute'>
        <Toolbar>
          <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to='/'
              onClick={() => setCartOpen(false)}
            >
              qzEro-Market
            </Link>
          </Typography>

          {isMatch ? (
            <>
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
              <StyledBadge
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
                  <ShoppingCartIcon />
                </Button>
              </StyledBadge>
              <Hamburger />
            </>
          ) : (
            <>
              <Button color='inherit' onClick={() => setCartOpen(false)}>
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to='/'
                >
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
              {currentUser !== undefined ? (
                <>
                  {/* 
                  <Button color='inherit'>
                    <Link
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      to='/profile'
                    >
                      Profile
                    </Link>
                  </Button> */}

                  <Button
                    color='inherit'
                    onClick={() => {
                      dispatch(logout());
                      setCartOpen(false);
                    }}
                  >
                    <Link
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      to='/login'
                    >
                      Logout
                    </Link>
                  </Button>
                  <Avatar
                    variant='circular'
                    src={currentUser.avatar}
                    sx={{ width: 30, height: 30, ml: 3 }}
                  />
                </>
              ) : (
                <Button color='inherit' onClick={() => setCartOpen(false)}>
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to='/login'
                  >
                    Login
                  </Link>
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
