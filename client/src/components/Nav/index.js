import React from "react";
import { useLocation, Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                useLocation().pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                useLocation().pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
