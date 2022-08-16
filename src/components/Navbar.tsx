import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          qzEro-Market
        </Typography>
        <Button color="inherit">
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>Home</Link>
        </Button>
        <Button color="inherit">
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='/cart'>Cart</Link></Button>
        <Button color="inherit">
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='/profile'>
            Login
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar