import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  // useEffect(() => {
  //   // Google Analytics
  //  console.log(location.pathname)
  // }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} to="/about">About</Link>

         
            </div>
          </div>
          <Link  className="btn btn-primary mx-2" to="/login" role='button'>Login</Link>
          <Link  className="btn btn-primary mx-2" to="/signup" role='button'>SignUp</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
