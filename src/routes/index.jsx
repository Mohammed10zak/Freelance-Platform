import React, { lazy } from "react";
import { useEffect } from "react";
import { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuthContext } from "../context/AuthContext";

import ProtectedRoute from "./../components/ProtectedRoute/index";

const Login = lazy(() => import("../pages/Login/index"));
const Signup = lazy(() => import("../pages/Signup/index"));
const Home = lazy(() => import("../pages/Home/index"));
const Filter = lazy(() => import("./../pages/Filter/index"));

// const TechStoreList = lazy(() => import("../pages/TechStorelist/index"));
// const Electronic = lazy(() => import("../pages/Electronic/index"));
// const ProductDetails = lazy(() => import("../pages/ProductDetails/index"));
// const Cart = lazy(() => import("../pages/BasicCart"));

const Routers = () => {
  const { authorized, setAuthorized, setToken } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setAuthorized(true);
    }
  }, [setToken, setAuthorized]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={authorized ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authorized ? <Navigate to="/home" /> : <Signup />}
        />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/filter" element={<Filter />} />

        </Route>
        <Route path="/*" element={<h3>Page not Found</h3>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
