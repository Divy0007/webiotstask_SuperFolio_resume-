import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-sm-5 position-sticky top-0 border-bottom border-secondary">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="text-decoration-none color-secondary text-dark fw-bold h3"
        >
          Super Folio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  justify-content-end ">
            <li className="nav-item m-2">
              <NavLink
                to="/about"
                className="text-decoration-none text-dark nav-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                to="/Services"
                className="text-decoration-none text-dark nav-link"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                to="/Skils"
                className="text-decoration-none text-dark nav-link"
              >
                Skils
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                to="/Portfolio"
                className="text-decoration-none text-dark nav-link"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                to="/Experience"
                className="text-decoration-none text-dark nav-link"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                to="/contact"
                className="text-decoration-none text-dark nav-link"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;