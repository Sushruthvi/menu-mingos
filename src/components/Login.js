// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({
    userId: '',
    password: ''
  });
  const [error, setError] = useState(""); 

  const handleChange = ({ currentTarget: input}) => {
    setData({...data,[input.name]: input.value})
  }

  const handleSubmit= async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/auth";
      const {data:res} = await axios.post(url,data);
      localStorage.setItem("token", res.data);
      window.location = "/restaurant"
    } catch(error){
      if(error.response &&
         error.response.status >= 400 &&
         error.response <= 500
      ){
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <h2><span>Cafe</span> Mingos</h2>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Sign Up</Link></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#info">Info</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </nav>
      </header>
      <div className="login-container">
        <h1><span>Menu</span> Mingos</h1>
        <h2><span>LOGIN</span></h2>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={data.usn}
              onChange={handleChange}
              placeholder="Enter your USN"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <span><button type="submit">
           Login
          </button></span>
        </form>
      </div>
    </div>
  );
};

export default Login;