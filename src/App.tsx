import { Route, Routes } from 'react-router-dom'

import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
