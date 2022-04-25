import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegisterForm } from '../redux/actions/userActions';
import { Link, useNavigate } from 'react-router-dom';
import creatCheckbox from '../helpers/createCheckbox';
import SVG from '../images/undraw_profile_details_re_ch9r.svg';
//Animation Imports
import { motion } from 'framer-motion';
import {
  fadeInVariants,
  inputLeftVariants,
  inputRightVariants,
  buttonVariants,
} from '../animation/formAnimations';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { message } = state


  // user credentials state
  const [userCreds, setUserCreds] = useState({
    username: '',
    email: '',
    password: '',
    languages: [],
  });

  // Handle input change (credentials)

  const handleCredsChange = (e) => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  // Handle input change (languages)
  const handleLangsChange = (e) => {
    let updatedLanguages = [...userCreds.languages];
    e.target.checked
      ? (updatedLanguages = [...updatedLanguages, e.target.value])
      : updatedLanguages.splice(userCreds.languages.indexOf(e.target.value), 1);
    setUserCreds({
      ...userCreds,
      languages: updatedLanguages,
    });
  };

  // Handle form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendRegisterForm(userCreds));

  };

  return (
    <div className="registerContainer">
      {/* <Toaster /> */}
      <motion.img
        className="imageRegister"
        src={SVG}
        alt="alt"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
      <form
        className="registerForm"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <motion.label
          className="registerForm__label"
          htmlFor="username"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Username
        </motion.label>
        <motion.input
          name="username"
          className="registerForm__input"
          type="text"
          id="username"
          onChange={(e) => {
            handleCredsChange(e);
          }}
          variants={inputLeftVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.label
          className="registerForm__label"
          htmlFor="email"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Email
        </motion.label>
        <motion.input
          name="email"
          className="registerForm__input"
          type="email"
          id="email"
          onChange={(e) => {
            handleCredsChange(e);
          }}
          variants={inputRightVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.label
          className="registerForm__label"
          htmlFor="password"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Password
        </motion.label>
        <motion.input
          name="password"
          className="registerForm__input"
          type="password"
          id="password"
          onChange={(e) => {
            handleCredsChange(e);
          }}
          variants={inputLeftVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.p
          className="registerForm__text"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Choose your preferred languages
        </motion.p>
        <motion.div
          className="registerForm__languages"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {creatCheckbox('de', '🇩🇪 DE', (e) => handleLangsChange(e))}
          {creatCheckbox('es', '🇪🇸 ES', (e) => handleLangsChange(e))}
          {creatCheckbox('ar', '🇸🇦 AR', (e) => handleLangsChange(e))}
          {creatCheckbox('tr', '🇹🇷 TR', (e) => handleLangsChange(e))}
          {creatCheckbox('it', '🇮🇹 IT', (e) => handleLangsChange(e))}
          {creatCheckbox('pt', '🇵🇹 PT', (e) => handleLangsChange(e))}
          {creatCheckbox('fr', '🇫🇷 FR', (e) => handleLangsChange(e))}
          {creatCheckbox('el', '🇬🇷 EL', (e) => handleLangsChange(e))}
          {creatCheckbox('he', '🇮🇱 He', (e) => handleLangsChange(e))}
          {creatCheckbox('ru', '🇷🇺 Rus', (e) => handleLangsChange(e))}
        </motion.div>

        <motion.input
          className="registerForm__submit"
          type="submit"
          value="Register"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.p
          className="registerForm__text"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Registered already? <Link to="/login">Login</Link>
        </motion.p>
      </form>
    </div>
  );
};

export default Register;
