import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home";
import Profile from './pages/Profile';
import PageNotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './components/Register';


function App() {
  
  useEffect(() => {
    document.title = 'qzEro-Market'
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
