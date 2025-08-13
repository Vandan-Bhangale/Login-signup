import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(' http://localhost:3000/register', {name,email,password}).then((result) => {
            console.log("Register successful",result);
            navigate("/login");
        }).catch((error) => {
            console.error("There was an error registering!", error);
        });
    }

    return (
    <>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="name" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary w-100">Signup</button>
        <p>Already have an account</p>
        <Link to = "/login" className="btn btn-success w-100">Login</Link>
      </form>
    </div>
    </div>
    </>
  );
}

export default Signup;