import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const login = () =>{
        localStorage.setItem('login', true)
        navigate('/')
    }
    useEffect (() =>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
    <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control"
        name="email"
        placeholder="Enter Your Email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Enter Your Password"
      />
      <button onClick={login} className="btn btn-primary my-3">Login</button>
    </div>
    </div>

  );
}

export default Login;
