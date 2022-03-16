import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkIsLoggedIn } from '../redux/actions/userActions';


const PrivateRoute = ({ outlet }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);


  const checkLogin = () => {
    dispatch(checkIsLoggedIn())
  }

  useEffect(() => {
    checkLogin();
  }, [state.isLoggedIn])

  if (state.isLoading) return <div> show loading....</div>

  if (state.isLoggedIn) {
    return outlet
  } else {
    return <Navigate to={{ pathname: "/login" }} />
  }
}

export default PrivateRoute