import axios from 'axios';

export const getQuizData = () => async (dispatch) => {
  dispatch({ type: 'GET_QUIZ_START' });
  try {
    const res = await axios.get('/quiz', {
      withCredentials: true,
    });
    dispatch({ type: 'GET_QUIZ_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_QUIZ_ERROR', payload: error.mesage });
  }
};

export const increaseIndex = () => {
  return {
    type: 'INCREASE_INDEX',
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
