import React, { lazy, Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./general.css"
import UserMenu from "./pages/UserMenu";

export const App = () => {

  const Home = lazy(() => import('./pages/Home'));
  const Login = lazy(() => import('./pages/Login'));
  const Registration = lazy(() => import('./pages/Registration'));
  // const UserMenu = lazy(() => import('./pages/UserMenu'))

  return (
    <div className="header">

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/registration">Register</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>

        <div style={{marginLeft: 150}}>
        <UserMenu />
        </div>
      </nav>

      <Suspense 
      fallback={<h1 style={{fontSize: 25, marginLeft: 25, marginTop: 30}}>Loading...</h1>}
      >
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </Suspense>

    </div>
  );
};