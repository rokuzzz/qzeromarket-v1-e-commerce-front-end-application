import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { theme } from '../index';
import { LoginForm } from '../styles/login';

function Register() {
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
          Sign up
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            opacity: '60%',
            lineHeight: 1.2,
            mt: 1,
          }}
        >
          Fill out the form to create an account.
        </Typography>
        <TextField
          label='Your name'
          placeholder='John'
          type='text'
          required
          sx={{
            mt: 4,
          }}
        />
        <TextField
          label='Email address'
          placeholder='name@company.com'
          type='email'
          required
          sx={{
            mt: 1,
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
          Already have an account?&nbsp;
          <Link
            to='/login'
            style={{
              color: 'primary',
            }}
          >
            Sign in
          </Link>
        </Typography>
      </Box>
    </LoginForm>
  );
}

export default Register;
