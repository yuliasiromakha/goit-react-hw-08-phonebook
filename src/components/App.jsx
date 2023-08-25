import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./general.css";
import PrivateRoute from "PrivateRoute/PrivateRoute";

export const App = () => {
  const Home = lazy(() => import('./pages/Home'));
  const Login = lazy(() => import('./pages/Login'));
  const Registration = lazy(() => import('./pages/Registration'));
  const NotFound = lazy(() => import('./pages/NotFound'));
  const Header = lazy(() => import('./pages/Header'));
  const Contacts = lazy(() => import('./pages/Contacts'));

  return (

    <Suspense fallback={<h1 style={{marginLeft: 25, marginTop: 30, fontSize: 25}}>Loading...</h1>}>

      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts/>
            </PrivateRoute>
          } />
        </Route>
      </Routes>

    </Suspense>

  );
};