import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendLoginForm } from '../redux/actions/userActions';
import SVG from '../images/login.svg';
import { motion } from 'framer-motion';
import {
  buttonVariants,
  fadeInVariants,
  inputLeftVariants,
  inputRightVariants,
} from '../animation/formAnimations';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { error, message } = state
  const [userCreds, setUserCreds] = useState({ email: '', password: '' });

  // Handle input change
  const handleChange = (e) => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userCreds.email === "") {
      return toast.error("please write your email")
    } else if (userCreds.password === "") {
      return toast.error("please write your password")
    }
    dispatch(sendLoginForm(userCreds));

  };
  useEffect(() => {
    if (state.isLoggedIn) {

      navigate('/home');
    }
  }, [state.isLoggedIn]);


  return (
    <>

      <div className="loginContainer">
        <motion.img
          className="imageLogin"
          src={SVG}
          alt="login_photo"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        />
        <form onSubmit={handleSubmit} className="loginForm">


          <motion.label
            className="loginForm__label"
            htmlFor=""
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Your E-mail:
          </motion.label>
          <motion.input
            className="loginForm__input"
            onChange={(e) => handleChange(e)}
            type="email"
            name="email"
            id="email"
            variants={inputLeftVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.label
            className="loginForm__label"
            htmlFor="password"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Your Password:
          </motion.label>
          <motion.input
            className="loginForm__input"
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            id="password"
            variants={inputRightVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.button
            className="loginForm__submit"
            type="submit"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Submit
          </motion.button>
          <motion.p
            className="loginForm__text"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Or register <Link to="/register">here</Link>
          </motion.p>
        </form>
      </div>

    </>
  );
};

export default Login;
