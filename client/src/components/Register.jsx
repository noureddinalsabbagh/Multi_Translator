import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegisterForm } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import SVG from '../images/undraw_profile_details_re_ch9r.svg';
//Animation Imports
import { motion } from 'framer-motion';
import {
  fadeInVariants,
  inputLeftVariants,
  inputRightVariants,
  buttonVariants,
} from '../animation/register';

const Register = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.userReducer);

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
      <motion.img
        className="image"
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
          type="text"
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
          <label className="registerForm__langLable" htmlFor="de">
            🇩🇪 DE
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="de"
            id="de"
            value="de"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="es">
            🇪🇸 ES
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="es"
            id="es"
            value="es"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="ar">
            🇸🇦 AR
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="ar"
            id="ar"
            value="ar"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="tr">
            🇹🇷 TR
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="tr"
            id="tr"
            value="tr"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="it">
            🇮🇹 IT
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="it"
            id="it"
            value="it"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="pt">
            🇵🇹 PT
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="pt"
            id="pt"
            value="pt"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="jp">
            🇯🇵 JP
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="jp"
            id="jp"
            value="jp"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="el">
            🇬🇷 Greek
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="el"
            id="el"
            value="el"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="he">
            🇮🇱 He
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="he"
            id="he"
            value="he"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />

          <label className="registerForm__langLable" htmlFor="ru">
            {' '}
            🇷🇺 Rus
          </label>
          <input
            className="registerForm__checkbox"
            type="checkbox"
            name="ru"
            id="ru"
            value="ru"
            onChange={(e) => {
              handleLangsChange(e);
            }}
          />
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
