import React, { lazy, Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./general.css"

export const App = () => {

  const Home = lazy(() => import('./pages/Home'));
  const Login = lazy(() => import('./pages/Login'));
  const Registration = lazy(() => import('./pages/Registration'));
  // const Loader = lazy(() => import('./pages/Loader'))
  // const NotFound = lazy(() => import('./pages/NotFound'));

  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="header__nav-item">
          <NavLink to='/registration'>Register</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to='/login'>Log in</NavLink>
          </li>
        </ul>
      </nav>

      <Suspense 
      // fallback={<Loader/>}
      fallback={<h1 style={{fontSize: 25, marginLeft: 25, marginTop: 30}}>Loading...</h1>}
      >
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};