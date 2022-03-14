const INITIAL_STATE = {
  isLoading: true,
  data: [],
  message: "",
  error: ""
}
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEND_LOGIN_START":
      return state;
    case "SEND_LOGIN_SUCCESS":
      return { ...state, message: action.payload, isLoading: false }
    case "SEND_LOGIN_ERROR":
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}

export default userReducer