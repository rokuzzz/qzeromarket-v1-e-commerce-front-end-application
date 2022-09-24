import axios from "axios"
import { RegisterType } from "../../types/user"


const API_URL = 'https://api.escuelajs.co/api/v1/users'

const register = async ({name, email, password}: RegisterType) => {
  const response = await axios.post(API_URL, {name, email, password})

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  register
}

export default authService