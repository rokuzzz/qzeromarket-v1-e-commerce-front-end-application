import { Grid, styled } from '@mui/material'
import { Container, maxWidth } from '@mui/system'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchAllProducts } from '../redux/reducers/productReducer'
import SingleProduct from './SingleProduct'

function ProductList() {
  const RelativeGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
    },
    paddingBottom: 5,
    paddingRight: 2,
    marginTop: 1,
    marginLeft: "auto",
    marginRight: "auto",
  }))

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
    <RelativeGrid container 
      rowSpacing={5}
      columnSpacing={0}
      >
        {renderProducts}
    </RelativeGrid>
  )
}

export default ProductList