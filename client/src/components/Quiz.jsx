import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkIsLoggedIn } from '../redux/actions/userActions';

const Quiz = () => {
  const state = useSelector(state => state.userReducer)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLoggedIn())
    console.log(state.isLoggedIn);
    // if (!state.isLoggedIn) {
    //   navigate("/login")
    // }
  }, [])

  return <div>Quiz</div>;
};

export default Quiz;
