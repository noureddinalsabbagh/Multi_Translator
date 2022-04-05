import axios from "axios"

export const getQuizData = () => async (dispatch) => {
  dispatch({ type: "GET_QUIZ_START" })
  try {
    const res = await axios.get("http://localhost:4001/quiz", { withCredentials: true })
    dispatch({ type: 'GET_QUIZ_SUCCESS', payload: res.data })
  } catch (error) {
    dispatch({ type: 'GET_QUIZ_ERROR', payload: error.mesage })
  }
}