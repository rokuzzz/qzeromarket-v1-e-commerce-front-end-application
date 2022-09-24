import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { LoginForm } from '../styles/login';
import { theme } from '../index';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login, loginByToken } from '../redux/reducers/userReducer';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userList, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (currentUser) {
      navigate('/');
    } else if (token) {
      dispatch(loginByToken(token));
      navigate('/');
    }
  }, [navigate, dispatch, currentUser]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
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
            name='email'
            value={email}
            required
            sx={{
              mt: 3,
            }}
            onChange={onChange}
          />
          <TextField
            label='Password'
            placeholder='********'
            type='password'
            name='password'
            value={password}
            required
            sx={{
              mt: 1,
            }}
            onChange={onChange}
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
          {/* <Typography
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
          </Typography> */}
        </Box>
      </LoginForm>
    </form>
  );
}

export default Login;
