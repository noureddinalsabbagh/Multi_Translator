import axios from 'axios';

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
    dispatch({ type: 'REGISTER_REGISTER_ERROR', payload: error.message });
  }
};

// to get isLoggedIn value from backend
export const checkIsLoggedIn = () => async (dispatch) => {
  dispatch({ type: "GET_ISLOGGEDIN_START" })
  try {
    const res = await axios.get(
      'http://localhost:4001/user/isloggedin', { withCredentials: true })
    dispatch({ type: "GET_ISLOGGEDIN_SUCCESS", payload: res.data })
  } catch (error) {
    dispatch({ type: "GET_ISLOGGEDIN_ERROR", payload: error.message })

  }
}