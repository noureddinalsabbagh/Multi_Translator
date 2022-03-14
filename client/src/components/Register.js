import React from 'react';

const Register = () => {
  return (
    <form className="registerForm">
      <label className="registerForm__label" htmlFor="username">
        Username
      </label>
      <input className="registerForm__input" type="text" id="username" />

      <label className="registerForm__label" htmlFor="email">
        Email
      </label>
      <input className="registerForm__input" type="text" id="email" />

      <label className="registerForm__label" htmlFor="password">
        Password
      </label>
      <input className="registerForm__input" type="password" id="password" />

      <p>Choose languages you are interested in</p>

      <label htmlFor="de">German</label>
      <input type="checkbox" name="de" id="de" />

      <label htmlFor="sp">Spanish</label>
      <input type="checkbox" name="sp" id="sp" />

      <label htmlFor="ar">Arabic</label>
      <input type="checkbox" name="ar" id="ar" />

      <label htmlFor="tr">Turkish</label>
      <input type="checkbox" name="tr" id="tr" />

      <label htmlFor="it">Italian</label>
      <input type="checkbox" name="it" id="it" />

      <label htmlFor="pt">Portuguese</label>
      <input type="checkbox" name="pt" id="pt" />

      <label htmlFor="zh">Chinese</label>
      <input type="checkbox" name="zh" id="zh" />

      <label htmlFor="el">Greek</label>
      <input type="checkbox" name="el" id="el" />

      <label htmlFor="he">Hebrew</label>
      <input type="checkbox" name="he" id="he" />

      <label htmlFor="ru">Russian</label>
      <input type="checkbox" name="ru" id="ru" />
    </form>
  );
};

export default Register;
