import { useEffect } from 'react';
import { fetchAllProducts } from '../../redux/reducers/productReducer';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { RelativeGrid } from '../../styles/ProductList';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import SingleProduct from './SingleProduct';

function ProductList() {
  const { currentList } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const renderProducts = currentList.map((product) => (
    <SingleProduct
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      category={product.category}
      images={product.images}
    />
  ));

  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          borderRadius: 1,
          width: '70%',
          margin: 'auto',
        }}
      >
        <SearchBar />
      </Box>
      <RelativeGrid container rowSpacing={5} columnSpacing={0}>
        {renderProducts}
      </RelativeGrid>
    </Box>
  );
}

export default ProductList;
