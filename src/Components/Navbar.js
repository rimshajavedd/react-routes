import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('login'); 
    navigate('/login'); 
  };
  return (
<div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to='about'>About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to='login'>Login</Link>
        </li>
        <button onClick={handleSignOut} className="btn btn-danger">
        Sign Out
      </button>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar