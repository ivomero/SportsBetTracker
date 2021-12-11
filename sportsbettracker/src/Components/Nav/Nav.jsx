import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss';

const Navbar = () => {

    return (
        <div className="App">
      <nav id="nav-bar">
        <div className="container">
          <div className="section">
            <div className="logo flex">
              <Link to="/home">
                <h2 className="book" class="fas fa-book">
                  {" "}
                  <span>Sports Social</span>
                </h2>
              </Link>
            </div>
          </div>
          <div className="section space">
            <div className="navLinks border">
              <ul className="flex">
                <li>
                  <Link to="/home">
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>

                <li>
                  <Link to="/games">
                    <i class="fas fa-dollar-sign"></i>  Games
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <i class="fas fa-shopping-cart"></i> Profiles
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <i class="fas fa-user-plus"></i> Register
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-shopping-cart"></i> Login
                  </Link>
                </li>

                <li>
                  <Link to="/" >
                    <i class="fas fa-sign-in-alt"></i> Logout Here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
}
export default Navbar;