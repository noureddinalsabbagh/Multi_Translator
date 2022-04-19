import axios from 'axios';

// to send login form
export const sendLoginForm = (userCreds) => async (dispatch) => {
  dispatch({ type: 'SEND_LOGIN_START' });
  try {
    const res = await axios.post(
      'http://localhost:4001/user/login',
      userCreds,
      { withCredentials: true }
    );
    dispatch({ type: 'SEND_LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'SEND_LOGIN_ERROR', payload: error.message });
  }
};

// to send register form
export const sendRegisterForm = (userCreds) => async (dispatch) => {
  dispatch({ type: 'SEND_REGISTER_START' });

  try {
    const res = await axios.post(
      'http://localhost:4001/user/register',
      userCreds,
      { withCredentials: true }
    );
    dispatch({ type: 'SEND_REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'SEND_REGISTER_ERROR', payload: error.message });
  }
};

// to verify user's account
export const verifyUser = (code) => async (dispatch) => {
  dispatch({ type: 'VERIFY_USER_START' });

  try {
    const API_URL = 'http://localhost:4001/';
    const res = await axios.get(API_URL + 'user/confirm/' + code);
    dispatch({ type: 'VERIFY_USER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'VERIFY_USER_ERROR', payload: error.message });
  }
};

// to get isLoggedIn value from backend
export const checkIsLoggedIn = () => async (dispatch) => {
  dispatch({ type: 'GET_ISLOGGEDIN_START' });
  try {
    const res = await axios.get('http://localhost:4001/user/isloggedin', {
      withCredentials: true,
    });
    dispatch({ type: 'GET_ISLOGGEDIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_ISLOGGEDIN_ERROR', payload: error.message });
  }
};

// to update user credentials
export const sendNewCreds = (userCreds) => async (dispatch) => {
  dispatch({ type: 'SEND_NEWCREDS_START' });
  try {
    const res = await axios.post(
      'http://localhost:4001/user/account',
      userCreds,
      { withCredentials: true }
    );
    dispatch({ type: 'SEND_NEWCREDS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'SEND_NEWCREDS_ERROR', payload: error.message });
  }
};

// to logout the user

export const logout = () => async (dispatch) => {
  dispatch({ type: 'LOGOUT_START' });
  try {
    const res = await axios.get('http://localhost:4001/user/logout', {
      withCredentials: true,
    });
    dispatch({ type: 'LOGOUT_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGOUT_ERROR', payload: error.data });
  }
};
