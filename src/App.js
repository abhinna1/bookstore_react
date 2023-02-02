import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Router>
        <nav className="p-4 bg-dark d-flex justify-content-between px-4 fixed-top ">
        <h1 className="text-light">Book Store</h1>
          <div className="">
            <Link
              to="/login"
              className="btn btn-info"
              onClick={() => {
                console.log(true);
              }}
            >
              Login
            </Link>{" "}
            <Link
              to="/register"
              className="btn btn-info"
              onClick={() => {
                console.log(true);
              }}
            >
              Register
            </Link>{" "}
            <Link
              to="/books"
              className="btn btn-info"
              onClick={() => {
                console.log(true);
              }}
            >
              Books
            </Link>{" "}
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
