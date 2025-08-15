import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(() => {
      fetch("http://localhost:3000/status", { credentials: "include" })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(data.loggedIn);
        });
    }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
