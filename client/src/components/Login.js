import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendLoginForm } from '../redux/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.userReducer);

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

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <label htmlFor="">Your email:</label>
      <input
        onChange={(e) => handleChange(e)}
        type="email"
        name="email"
        id="email"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;
