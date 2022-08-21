import { Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'
import ShoppingCart from '../../components/ShoppingCart'

function Home() {
  return (
    <>
      <Navbar/>
      <Typography 
        variant='h2' 
        sx={{textAlign: 'center', margin: '50px 0'}}
      >
        New Arrivals
      </Typography>
      <ProductList />
      <ShoppingCart />
    </>
  )
}

export default Home