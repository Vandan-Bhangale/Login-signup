import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post("http://localhost:3000/login",
      { email, password },
      { withCredentials: true }
    )
    .then((result) => {
      console.log(result);

      if (result.data === "Login Successful") {
        // Fetch status after login
        fetch("http://localhost:3000/status", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            setIsLoggedIn(data.loggedIn); // updates Navbar immediately
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error fetching status:", error);
          });

      } else if (result.data === "Incorrect Password") {
        alert("Incorrect Password");
      } else {
        alert("User does not exist");
        navigate("/register");
      }
    })
    .catch((error) => {
      console.error("There was an error logging in!", error);
    });
};


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <p>
            Don't have an account <a href="/register"> Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
