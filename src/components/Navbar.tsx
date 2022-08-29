import {AppBar, Badge, BadgeProps, Box, Button, Drawer, makeStyles, styled, Toolbar, Typography} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import ShoppingCart from './ShoppingCart';

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)
  const {cartItems, total} = useAppSelector((state) => state.cartReducer)

  return (
    <Box sx={{ marginBottom: 15 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            qzEro-Market
          </Typography>
          <Button color="inherit">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>Home</Link>
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
                  sm: 430
                },
              }
            }}
          >
            <Toolbar/>
            <ShoppingCart/>
          </Drawer>
          <Badge 
            badgeContent={total}
            max={9}
            color="secondary"
            overlap="circular" 
          >
            <Button 
              color="inherit" 
              onClick={() => cartOpen ? (setCartOpen(false)) : (setCartOpen(true))}
            >
              Cart
            </Button>
          </Badge>
          <Button color="inherit">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/profile'>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar