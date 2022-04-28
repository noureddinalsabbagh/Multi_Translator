import axios from 'axios';

let API_URL = "http://localhost:4001"
if (process.env.NODE_ENV === 'production') {
  API_URL = ""
}

export const translate = (text) => async (dispatch) => {
  dispatch({ type: 'TRANSLATE_START' });

  try {
    const res = await axios.post(`${API_URL}/translate`, text, {
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
    const res = await axios.get(`${API_URL}/translate/history`, {
      withCredentials: true,
    });

    dispatch({ type: 'TRANSLATE_HISTORY_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'TRANSLATE_HISTORY_ERROR', payload: error.message });
  }
};
