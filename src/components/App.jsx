import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./general.css";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import { useAuth } from "redux/useAuth";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/authThunk";
import Loader from "./Loader";

export const App = () => {
  const Home = lazy(() => import('../pages/HomePage'));
  const Login = lazy(() => import('../pages/LoginPage'));
  const Registration = lazy(() => import('../pages/RegistrationPage'));
  const NotFound = lazy(() => import('./NotFound'));
  const Header = lazy(() => import('./Header'));
  const Contacts = lazy(() => import('../pages/ContactsPage'));

  // const isAuth = useSelector(state => state.auth.token)
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);  

  return isRefreshing ? (
    <Loader/>
  ) : (
    // <Suspense fallback={<h1 style={{marginLeft: 25, marginTop: 30, fontSize: 25}}>Loading...</h1>}>
    <Suspense fallback={<Loader/>}>

    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={
          <PublicRoute>
            <Home/>
          </PublicRoute>
        }/>
        <Route path="login" element={
           <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>
        <Route path="registration" element={
            <PublicRoute>
            <Registration/>
          </PublicRoute>
        }/>
        <Route path="contacts" element={
            <PrivateRoute>
            <Contacts/>
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  </Suspense>
  )
};