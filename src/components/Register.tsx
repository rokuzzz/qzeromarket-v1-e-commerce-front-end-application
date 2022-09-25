import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { theme } from '../index';
import { LoginForm } from '../styles/login';

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {userList, currentUser} = useAppSelector(
    (state) => state.userReducer
  )

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [navigate, dispatch, currentUser, userList])
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    
    if(password !== password2) {
      toast.error('Password do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

    }
  }

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
            name='name'
            value={name}
            required
            sx={{
              mt: 4,
            }}
            onChange={onChange}
          />
          <TextField
            label='Email address'
            placeholder='name@company.com'
            type='email'
            name='email'
            value={email}
            required
            sx={{
              mt: 1,
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
          <TextField
            label='Confirm your password'
            placeholder='********'
            type='password'
            name='password2'
            value={password2}
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
            onSubmit={onSubmit}
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
    </form>
  );
}

export default Register;
