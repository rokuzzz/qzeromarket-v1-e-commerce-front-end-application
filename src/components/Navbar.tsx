import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            qzEro-Market
          </Typography>
          <Button color="inherit">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'>Home</Link>
          </Button>
          <Button color="inherit">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/cart'>Cart</Link></Button>
          <Button color="inherit">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/profile'>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar