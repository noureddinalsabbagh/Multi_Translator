import axios from 'axios';

export const translate = (text) => async (dispatch) => {
  dispatch({ type: 'TRANSLATE_START' });
  try {
    const res = await axios.post('http://localhost:4001/translate', text, {
      withCredentials: true,
    });
    dispatch({ type: 'TRANSLATE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'TRANSLATE_ERROR', payload: error.message });
  }
};
