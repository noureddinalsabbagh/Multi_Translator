import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { sendLoginForm } from "../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.userReducer)
  console.log(selector);
  const [userCreds, setUserCreds] = useState({ email: "", password: "", })

  const handleChange = (e) => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendLoginForm(userCreds))
  }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <label htmlFor="">Your email:</label>
      <input onChange={(e) => handleChange(e)} type="email" name="email" id="loginEmail" />
      <input onChange={(e) => handleChange(e)} type="password" name="password" id="loginPass" />
      <button type="submit">submit</button>
    </form>
  )
}

export default Login