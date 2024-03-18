import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/TextUtilsBro/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/TextUtilsBro/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/TextUtilsBro/about">{props.aboutText}</Link>

              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} >
              <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" onChange={props.toggleMode} />
              <label className="form-check-label" htmlFor="darkModeSwitch">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About"
}