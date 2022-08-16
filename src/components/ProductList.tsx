import { Grid, Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchAllProducts } from '../redux/reducers/productReducer'
import setupStore from '../redux/store'
import { Product, ProductImage } from '../styles/products'
import SingleProduct from './SingleProduct'

function ProductList() {

  const { currentList } = useAppSelector(state => state.productReducer)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const renderProducts = currentList.map((product) => (
    <SingleProduct 
      id={product.id} 
      title={product.title} 
      description={product.description} 
      price={product.price} 
      category={product.category}
      images={product.images}  
    />
  ))
  return (
    <Grid 
      container
      justifyContent={'center'}
      sx={{margin: '20px 4px 10px 4px'}}>
        {renderProducts}
    </Grid>
  )
}

export default ProductList