import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendLoginForm } from '../redux/actions/userActions';
import SVG from "../images/login.svg"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);

  const [userCreds, setUserCreds] = useState({ email: '', password: '' });

  // Handle input change
  const handleChange = (e) => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginForm(userCreds));

  };
  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/home")
    }
  }, [])
  return (
    <>
      <div className="loginContainer">
        <img className="image"
          src={SVG} alt="login_photo" />



        <form onSubmit={handleSubmit} className="loginForm">
          <label className="loginForm__label" htmlFor="">Your E-mail:</label>
          <input
            className="loginForm__input"
            onChange={(e) => handleChange(e)}
            type="email"
            name="email"
            id="email"
          />
          <label className="loginForm__label" htmlFor="password">Your Password:</label>
          <input
            className="loginForm__input"
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            id="password"
          />
          <button className="loginForm__submit" type="submit">submit</button>
          <p className="loginForm__text">
            Or register <Link to="/register">here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
