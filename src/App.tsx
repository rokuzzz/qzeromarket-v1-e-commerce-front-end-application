import 'react-toastify/dist/ReactToastify.css'

import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home";
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import PageNotFound from './pages/NotFound';


function App() {
  
  useEffect(() => {
    document.title = 'qzEro-Market'
  }, [])
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
