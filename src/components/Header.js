import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import './general.css';
import { selectIsLoggedIn } from "redux/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {isLoggedIn ? (
            <li className="header__nav-item">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          ) : (
            <>
              <li className="header__nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/registration">Register</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/login">Log in</NavLink>
              </li>
            </>
          )}
        </ul>
        <div style={{ marginLeft: 150 }}>
          <UserMenu />
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;