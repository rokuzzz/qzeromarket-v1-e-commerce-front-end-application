import { useEffect, useState } from 'react';
import { Box, Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  fetchAllProducts,
  sortByCategory,
  sortByPriceAsc,
  sortByPriceDesc,
} from '../../redux/reducers/productReducer';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { RelativeBox, StyledGrid } from '../../styles/products';
import SingleProduct from './SingleProduct';
import AppPagination from './AppPagination';
import { loginByToken } from '../../redux/reducers/userReducer';

function ProductList() {
  const { currentList, productsList, currentPageProducts } = useAppSelector(
    (state) => state.productReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());

    const token = localStorage.getItem('access_token');
    if(token) {
      dispatch(loginByToken(token))
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFetchAll = () => {
    dispatch(fetchAllProducts());
    setAnchorEl(null);
  };

  const handleSortByPriceAsc = () => {
    dispatch(sortByPriceAsc());
    setAnchorEl(null);
  };

  const handleSortByPriceDesc = () => {
    dispatch(sortByPriceDesc());
    setAnchorEl(null);
  };

  // get the category name of each product
  const categories = productsList.map((product) => product.category.name);
  // remove duplicate names
  const uniqueCategories = categories.filter((c, index) => {
    return categories.indexOf(c) === index;
  });

  const handleSortByCategories = (category: string) => {
    dispatch(sortByCategory(category));
    setAnchorEl(null);
  };

  const renderCategories = uniqueCategories.map((category) => (
    <MenuItem key={category} onClick={() => handleSortByCategories(category)}>
      {category}
    </MenuItem>
  ));

  const renderProducts = currentPageProducts.map((product) => (
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
    <RelativeBox
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      margin='auto'
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent={'space-between'}
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            ml: 1,
          }}
        >
          {currentList.length} products
        </Typography>
        <Button
          variant='outlined'
          size='medium'
          sx={{ mr: 1 }}
          endIcon={<ExpandMoreIcon />}
          aria-controls='dropdown-menu-categories'
          aria-haspopup='true'
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleClick}
        >
          Sort By
        </Button>
        {/* Dropdown Items */}
        <Menu
          id='dropdown-menu-categories'
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          sx={{ height: '200px' }}
        >
          <MenuItem onClick={handleFetchAll}>All</MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleSortByPriceDesc}>Price: High-Low</MenuItem>
          <MenuItem onClick={handleSortByPriceAsc}>Price: Low-High</MenuItem>
          <Divider sx={{ my: 0.5 }} />
          {renderCategories}
        </Menu>
      </Box>
      {/* list of products */}
      <StyledGrid container rowSpacing={3} columnSpacing={0}>
        {renderProducts}
      </StyledGrid>
      <AppPagination
        currentList={currentList}
        productsList={productsList}
        currentPageProducts={currentPageProducts}
      />
    </RelativeBox>
  );
}

export default ProductList;
