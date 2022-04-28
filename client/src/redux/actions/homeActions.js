import axios from 'axios';

export const translate = (text) => async (dispatch) => {
  dispatch({ type: 'TRANSLATE_START' });

  try {
    const res = await axios.post('/translate', text, {
      withCredentials: true,
    });
    dispatch({ type: 'TRANSLATE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'TRANSLATE_ERROR', payload: error.message });
  }
};

export const translateHistory = () => async (dispatch) => {
  dispatch({ type: 'TRANSLATE_HISTORY_START' });
  try {
    const res = await axios.get('/translate/history', {
      withCredentials: true,
    });

    dispatch({ type: 'TRANSLATE_HISTORY_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'TRANSLATE_HISTORY_ERROR', payload: error.message });
  }
};
