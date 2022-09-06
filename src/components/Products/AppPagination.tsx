import { Box, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { currentPage } from '../../redux/reducers/productReducer';
import { ProductReducerState } from '../../types/products';

function AppPagination({
  currentList,
  productsList,
  currentPageProducts,
}: ProductReducerState) {
  const pageSize = 12;
  const productsAmount = currentList.length;

  const [pagination, setPagination] = useState({
    from: 0,
    to: pageSize,
  });

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentPage({ offset: pagination.from, limit: pageSize }));
  // }, [pagination.from]);

  useEffect(() => {
    dispatch(currentPage({ from: pagination.from, to: pagination.to }));
  }, [pagination.from, pagination.to, currentPage, currentList]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ from: from, to: to });
  };

  return (
    <Box
      justifyContent={'center'}
      alignItems='center'
      display={'flex'}
      sx={{
        margin: '35px 0',
        width: '100%',
      }}
    >
      <Pagination
        shape='rounded'
        count={Math.ceil(productsAmount / pageSize)}
        defaultPage={1}
        siblingCount={1}
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default AppPagination;
