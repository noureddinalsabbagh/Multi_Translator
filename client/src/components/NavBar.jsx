import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { Toaster } from 'react-hot-toast';

const NavBar = () => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ul className="navList">

        {!state.isLoggedIn && (
          <div className="navList__loggedOut">
            <li>
              <Link className="navList__item" to={'/register'}>
                Register
              </Link>
            </li>
            <li>
              <Link className="navList__item" to="/login">
                Login
              </Link>
            </li>
          </div>
        )}

        {state.isLoggedIn && (
          <div className="navList__loggedIn">
            <li>
              <Link className="navList__item" to="/home">
                home
              </Link>
            </li>
            <li>
              <Link className="navList__item" to="/quiz">
                quiz
              </Link>
            </li>

            <li>
              <Link className="navList__item" to="/account">
                account
              </Link>
            </li>

            <li>
              <Link
                onClick={handleLogout}
                className="navList__item navList__item--logout"
                to="/login"
              >
                logout
              </Link>
            </li>
          </div>
        )}
      </ul>
    </>
  );
};

export default NavBar;
