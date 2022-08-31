import { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { fetchAllProducts, sortByPriceAsc, sortByPriceDesc } from '../../redux/reducers/productReducer';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { RelativeBox, StyledGrid } from '../../styles/ProductList';
import SingleProduct from './SingleProduct';

function ProductList() {
  const { currentList } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = Boolean(anchorEl)

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFetchAll = () => {
    dispatch(fetchAllProducts());
    setAnchorEl(null)
  }

  const handleSortByPriceAsc = () => {
    dispatch(sortByPriceAsc())
    setAnchorEl(null)
  }

  const handleSortByPriceDesc = () => {
    dispatch(sortByPriceDesc())
    setAnchorEl(null)
  }

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
    <RelativeBox
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='end'
      margin='auto'
    >
      <Box display='flex' flexDirection='row'>
        <Button 
          variant='outlined' 
          size='small' 
          sx={{mr: 1}}
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
        >
          <MenuItem onClick={handleFetchAll}>All</MenuItem>
          <MenuItem onClick={handleSortByPriceDesc}>Price: High-Low</MenuItem>
          <MenuItem onClick={handleSortByPriceAsc}>Price: Low-High</MenuItem>
        </Menu>
      </Box>
      <StyledGrid container rowSpacing={5} columnSpacing={0}>
        {renderProducts}
      </StyledGrid>
    </RelativeBox>
  );
}

export default ProductList;
