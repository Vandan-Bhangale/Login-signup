import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/status", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.loggedIn);
      });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">
        MyApp
      </a>

      {/* Toggler for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* Login & Signup Buttons */}
        <div className="d-flex gap-2">
          {isLoggedIn ? (
            <Link to="/logout" className="btn btn-success">
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
