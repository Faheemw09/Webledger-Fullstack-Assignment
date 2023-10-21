import React, { useState } from "react";
import "./Navbar.css";
// import localImage from './images/Fazu pic.jpg';
import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Redux/AuthRedux/Action";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.Authreducer.isAuth);

  const dispatch = useDispatch();

  // Dispatch the SIGN_OUT action to sign the user out

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div
          className={`menu-icon ${isMenuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </div>
        <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
          <Link to="/">
            {" "}
            <h5 onClick={closeMenu}>Home</h5>
          </Link>
          <Link to={"/recipe"}>
            {" "}
            <h5 onClick={closeMenu}>Recipes</h5>
          </Link>

          <h5 onClick={closeMenu}>Ingredients</h5>
          <h5 onClick={closeMenu}>Categories</h5>
          <h5 onClick={closeMenu}>Contact Us</h5>
          <div>
            {isAuth ? (
              <button onClick={handleSignOut} className="signup-button">
                Sign Out
              </button>
            ) : (
              <button onClick={closeMenu} className="signup-button">
                <Link to="/signin" style={{ color: "black" }}>
                  Sign Up
                </Link>
              </button>
            )}
          </div>

          <Link to={"/favtlist"}>
            {" "}
            <button onClick={closeMenu} className="signup-button">
              wishlist
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
