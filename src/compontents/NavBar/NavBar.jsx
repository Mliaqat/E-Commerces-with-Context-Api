import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container-fluid px-5">
    <div>
    <Link to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     
      <form className="d-flex ms-0">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};
export default NavBar;
