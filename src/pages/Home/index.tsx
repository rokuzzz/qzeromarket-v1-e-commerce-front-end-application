import React from 'react'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <ProductList />
    </div>
  )
}

export default Home