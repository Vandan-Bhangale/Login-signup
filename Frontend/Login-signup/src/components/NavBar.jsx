import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Navbar({isLoggedIn,setIsLoggedIn}) {

  const HandleLogout = () => {
    axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data);

        if(response.data === "Logout Successful") {
          fetch("http://localhost:3000/status", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            setIsLoggedIn(data.loggedIn);
          })
          .catch((error) => {
            console.error("Error fetching status after logout:", error);
          });
        }
      })
      .catch((error) => {
        console.error("There was an error logging out!", error);
      });
  }
 
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
            <Link onClick={HandleLogout} className="btn btn-success">
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
