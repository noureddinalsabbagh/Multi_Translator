import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegisterForm } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.userReducer);

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
    setUserCreds({
      ...userCreds,
      languages: [...userCreds.languages, e.target.value],
    });
  };

  // Handle form submit

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendRegisterForm(userCreds));
  };
  return (
    <>
      <form
        className="registerForm"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="registerForm__label" htmlFor="username">
          Username
        </label>
        <input
          name="username"
          className="registerForm__input"
          type="text"
          id="username"
          onChange={(e) => {
            handleCredsChange(e);
          }}
        />

        <label className="registerForm__label" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          className="registerForm__input"
          type="text"
          id="email"
          onChange={(e) => {
            handleCredsChange(e);
          }}
        />

        <label className="registerForm__label" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          className="registerForm__input"
          type="password"
          id="password"
          onChange={(e) => {
            handleCredsChange(e);
          }}
        />

        <p>Choose languages you are interested in</p>

        <label htmlFor="de">German</label>
        <input
          type="checkbox"
          name="de"
          id="de"
          value="de"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="sp">Spanish</label>
        <input
          type="checkbox"
          name="sp"
          id="sp"
          value="sp"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="ar">Arabic</label>
        <input
          type="checkbox"
          name="ar"
          id="ar"
          value="ar"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="tr">Turkish</label>
        <input
          type="checkbox"
          name="tr"
          id="tr"
          value="tr"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="it">Italian</label>
        <input
          type="checkbox"
          name="it"
          id="it"
          value="it"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="pt">Portuguese</label>
        <input
          type="checkbox"
          name="pt"
          id="pt"
          value="pt"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="zh">Chinese</label>
        <input
          type="checkbox"
          name="zh"
          id="zh"
          value="zh"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="el">Greek</label>
        <input
          type="checkbox"
          name="el"
          id="el"
          value="el"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="he">Hebrew</label>
        <input
          type="checkbox"
          name="he"
          id="he"
          value="he"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <label htmlFor="ru">Russian</label>
        <input
          type="checkbox"
          name="ru"
          id="ru"
          value="ru"
          onChange={(e) => {
            handleLangsChange(e);
          }}
        />

        <input type="submit" value="Register" />
      </form>
      <p>
        Registered already? <Link to="/login">Log in</Link>
      </p>
    </>
  );
};

export default Register;
