import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <a href="#!">
            Social<span>Network</span>
          </a>
        </div>
        <nav className="navbar__nav">
          <div className="navbar__mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>

          <ul className="navbar__list">
            <li>
              <div className="navbar__search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Find.."
                />
                <button type="submit" className="searchButton">
                  search
                </button>
              </div>
            </li>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Profile</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
