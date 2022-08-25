import {AppBar, Box, Button, Drawer, makeStyles, Toolbar, Typography} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

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
          <Button 
            color="inherit" 
            onClick={() => cartOpen ? (setCartOpen(false)) : (setCartOpen(true))}
          >
            Cart
          </Button>
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