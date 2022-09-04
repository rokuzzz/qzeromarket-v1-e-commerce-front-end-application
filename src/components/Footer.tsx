import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box, Button, Grid, List, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FooterTitle } from '../styles/footer';

function Footer() {
  return (
    <Box 
      sx={{
        background: 'grey',
        color: 'white',
        p: {xs: 4, md: 10},
        pt: 12,
        pb: 12, 
        fontSize: {xs: '12px', md: '14px'}
      }}  
    >
      <Grid 
        container 
        spacing={2} 
        justifyContent='center'
      >
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>About us</FooterTitle>
          <Typography variant='caption'>
            «qzEro-Market» is an e-commerce web application mockup created by Roman Kuzero. This is a front-end project built using technologies such as TypeScript, React&Redux, MUI, etc. More information is available on github.
          </Typography>
          <Box
            sx={{
              mt: 4
            }}
          >
            <Facebook sx={{ mr: 1}} />
            <Twitter sx={{ mr: 1}} />
            <Instagram />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}
        >
          <FooterTitle variant='body1'>Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>Navigation</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
                  Home
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to='/profile'>
                  Profile
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to='/profile'>
                  Login
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant='caption'>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to='/profile'>
                  Sign up
                </Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
