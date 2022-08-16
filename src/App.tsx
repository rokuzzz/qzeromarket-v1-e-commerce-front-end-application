import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import PageNotFound from './pages/NotFound';
import { useEffect } from 'react';


function App() {
  
  useEffect(() => {
    document.title = 'qzEro-Market'
  }, [])
  return (
    <div className="App">
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
