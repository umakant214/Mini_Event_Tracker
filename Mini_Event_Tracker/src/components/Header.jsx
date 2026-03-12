import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    setToken(data);
  }, [location.pathname]);

  const HandleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="bg-light navbar">
        <div className="container-fluid">
          <ul className="nav">
            <a className="navbar-brand" href="#">
              Navbar
            </a>

            {!token ? (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/view" className="nav-link">
                    View
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={HandleLogout} to="/" className="nav-link">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
