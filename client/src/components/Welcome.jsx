import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Welcome = () => {
  const { code } = useParams()
  const API_URL = "http://localhost:4001/"
  const verifyUser = (token) => {
    return axios.get(API_URL + "user/confirm/" + token).then((response) => {
      return response.data;
    });
  };
  verifyUser(code);
  return (<>
    <h1>Account confirmed successfully!</h1>
    <Link to={"/login"}>
      Please Login
    </Link>
  </>
  )
}

export default Welcome