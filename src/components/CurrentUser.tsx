import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loginByToken } from '../redux/reducers/userReducer';

function CurrentUser() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(
    (state) => state.userReducer
  );
  
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(loginByToken(token));
    }
  }, []);
  return <div>Profile</div>;
}

export default CurrentUser;
