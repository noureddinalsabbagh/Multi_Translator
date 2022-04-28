import axios from 'axios';

let API_URL = "http://localhost:4001"
if (process.env.NODE_ENV === 'production') {
  API_URL = ""
}

// to get user's credentials
export const getUserCreds = () => async (dispatch) => {
  dispatch({ type: 'GET_USERCREDS_START' });
  try {
    const res = await axios.get(`${API_URL}/user/userCreds`, {
      withCredentials: true,
    });
    dispatch({ type: 'GET_USERCREDS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_USERCREDS_ERROR', payload: error.message });
  }
};

// to discard a language from user's language
export const discardLanguage = (index) => {
  return { type: 'DISCARD_LANGUAGES', payload: index };
};

// to add user's language
export const addLanguage = (index) => {
  return { type: 'ADD_LANGUAGES', payload: index };
};

// to update username and email of usernama
export const updUsernameAndEmail = (obj) => {
  return { type: 'UPDATE_CREDS', payload: obj };
};
