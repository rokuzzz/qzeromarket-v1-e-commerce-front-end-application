import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { LoginForm } from '../styles/login';
import { theme } from '../index';

function Login() {
  return (
    <LoginForm elevation={theme.breakpoints.up('sm') ? 24 : 0}>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent={'center'}
        sx={{ height: '100%' }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Log in
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            opacity: '60%',
            lineHeight: 1.2,
            mt: 1,
          }}
        >
          Enter your credentials to access your account.
        </Typography>
        <TextField
          label='Email address'
          placeholder='name@company.com'
          type='email'
          required
          sx={{
            mt: 4,
          }}
        />
        <TextField
          label='Password'
          placeholder='********'
          type='password'
          required
          sx={{
            mt: 1,
          }}
        />
        <Button
          variant='contained'
          type='submit'
          color='primary'
          fullWidth
          sx={{
            mt: 3,
            height: '43px',
          }}
        >
          Sign in
        </Button>
        <Typography
          variant='body2'
          align='center'
          sx={{
            opacity: '60%',
            mt: 4,
          }}
        >
          Don't have an account?&nbsp;
          <Link
            to='/register'
            style={{
              color: 'primary',
            }}
          >
            Sign up for free
          </Link>
        </Typography>
      </Box>
    </LoginForm>
  );
}

export default Login;
