import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar bg-light">
        <div className="container-sm">
          <span className="navbar-brand mb-0 h1"><NavLink to="/" className="text-decoration-none">Super Folio</NavLink></span>
          <ul className="nav justify-content-end">
            <li className="nav-item mx-2"><NavLink to="/about" className="text-decoration-none">About</NavLink></li>
            <li className="nav-item mx-2"><NavLink to="/Services" className="text-decoration-none">Services</NavLink></li>
            <li className="nav-item mx-2"><NavLink to="/Skils" className="text-decoration-none">Skils</NavLink></li>
            <li className="nav-item mx-2"><NavLink to="/Portfolio" className="text-decoration-none">Portfolio</NavLink></li>
            <li className="nav-item mx-2"><NavLink to="/Experience" className="text-decoration-none">Experience</NavLink></li>
            <li className="nav-item mx-2"><NavLink to="/contact" className="text-decoration-none">contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
