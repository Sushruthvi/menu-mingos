// src/components/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';

const SignUp = () => {
  const [data, setData] = useState({
    username: '',
    userId: '',
    mail: '',
    password: ''
  });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input}) => {
    setData({...data,[input.name]: input.value})
  }

  const handleSubmit= async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/users";
      const {data:res} = await axios.post(url,data);
      navigate("/login")
      console.log(res.message)
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
      <div className="signup-container">
        <h1><span>Menu</span> Mingos</h1>
        <h2><span>SIGN UP</span></h2>
        {error && <div className="error-message">{error}</div>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleChange}
              placeholder="Enter your Username"
              required
            />

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

            <label htmlFor="mail">Mail</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
           Sign Up
          </button></span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;