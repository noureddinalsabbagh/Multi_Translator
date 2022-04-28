import axios from 'axios';
let API_URL = "http://localhost:4001"
if (process.env.NODE_ENV === 'production') {
  API_URL = ""
}

export const getQuizData = () => async (dispatch) => {
  dispatch({ type: 'GET_QUIZ_START' });
  try {
    const res = await axios.get(`${API_URL}/quiz`, {
      withCredentials: true,
    });
    dispatch({ type: 'GET_QUIZ_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_QUIZ_ERROR', payload: error.message });
  }
};

export const increaseIndex = () => {
  return {
    type: 'INCREASE_INDEX',
  };
};
export const makeIndexZero = () => {
  return {
    type: 'MAKE_INDEX_ZERO',
  };
};

export const setScore = (item) => {
  return {
    type: 'SET_SCORE',
    payload: item,
  };
};
export const showOptionInfoCorrect = (item) => {
  return { type: 'SHOW_OPTION_INFO_CORRECT', payload: item };
};

export const showOptionInfoFalse = (item) => {
  return { type: 'SHOW_OPTION_INFO_FALSE', payload: item };
};

export const closeOptionInfo = () => {
  return { type: 'CLOSE_OPTION_INFO' };
};

export const changeClickableTrue = () => {
  return { type: 'CHANGE_CLICKABLE_TRUE' };
};

export const changeClickableFalse = () => {
  return { type: 'CHANGE_CLICKABLE_FALSE' };
};
