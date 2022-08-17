import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar(props) {
   return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }
      >
        <div className="container-fluid"> 
          <Link
            className={`navbar-brand text-${props.textColor} `}
            to="/"
          >
            {props.title}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${props.textColor}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link text-${props.textColor}`}
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {/* <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div> */}
              <div
                className="bg-light rounded mx-2"
                onClick={() => {
                  props.toggleMode("light");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer", border: '2px solid' }}
              ></div>
              <div
                className="bg-dark rounded mx-2"
                onClick={() => {
                  props.toggleMode("dark");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "about text here",
};
