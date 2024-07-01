import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">The food hub</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome size={25} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <BsCart size={25} />
          </Link>
        </li>
        {token ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
