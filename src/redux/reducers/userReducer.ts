import { User, UserReducerState, LoginType } from './../../types/user';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';


const initialState: UserReducerState = {
  userList: [],
  currentUser: undefined
}

export const fetchAllUsers = createAsyncThunk(
  'fetchAllUsers',
  async(user: User) => {
    if (user.role === 'admin') {
      const response = await axios.get('https://api.escuelajs.co/api/v1/users')
      return response.data
    } else {
      return []
    }
  }
)

export const login = createAsyncThunk(
  'login',
  async(
    {email, password}: LoginType
  ) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email, 
        password
      })
      if(response.data.access_token) {
        // save token in local storage
        localStorage.setItem("access_token", response.data.access_token)
        const user = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            Authorization : `Bearer ${localStorage.getItem("access_token")}`
          }
        })
        return user.data
      }
      return undefined
    } catch(e) {
      console.log("user not found")
      toast.error('Your credentials are invalid', {
        position: 'top-center'
      })
    }
  }
)

export const loginByToken = createAsyncThunk(
  'loginByToken',
  async (token: string) => {
    const user = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    return user.data
  }
)

const userSlice = createSlice({
  name: 'user reducer',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('access_token')
      state.currentUser = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.userList = action.payload
    })
    .addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload
    })
    .addCase(loginByToken.fulfilled, (state, action) => {
      state.currentUser = action.payload
    })
  }
})

export const userReducer = userSlice.reducer

export const {
  logout
} = userSlice.actions