import {
  Avatar,
  Badge,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { logout } from '../../redux/reducers/userReducer';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Link } from 'react-router-dom';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const { total } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  const { currentUser } = useAppSelector((state) => state.userReducer);
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchor='right'
        PaperProps={{
          elevation: 8,
          sx: {
            width: 120,
          },
        }}
      >
        <>
          <Toolbar />
          <Button
            color='inherit'
            onClick={() => {
              setCartOpen(false);
              setIsOpen(false);
            }}
          >
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
              Home
            </Link>
          </Button>

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
                  setIsOpen(false);
                }}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to='/login'
                >
                  Logout
                </Link>
              </Button>
            </>
          ) : (
            <Button
              color='inherit'
              onClick={() => {
                setCartOpen(false);
                setIsOpen(false);
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to='/login'
              >
                Login
              </Link>
            </Button>
          )}
        </>
      </Drawer>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon htmlColor='#FFFFFF' />
      </IconButton>
    </>
  );
}

export default Hamburger;
