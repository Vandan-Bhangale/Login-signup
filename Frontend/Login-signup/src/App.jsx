import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
