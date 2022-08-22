import { useEffect } from 'react'
import { fetchAllProducts } from '../redux/reducers/productReducer'
import SingleProduct from './SingleProduct'

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import {RelativeGrid} from '../styles/ProductList'

function ProductList() {
  const { currentList } = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])
  const renderProducts = currentList.map((product) => (
    <SingleProduct key={product.id}
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