import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SimpleBackdrop from "./pages/LoadingPage";
import { useEffect } from "react";
import axios from "axios";
const Palinsesto = lazy(() => import("./pages/Palinsesto.jsx"));
const Film = lazy(() => import("./pages/Film.jsx"));
const Sale = lazy(() => import("./pages/Sale.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const ProductList = lazy(() => import("./pages/ProductList.jsx"));
const Login = lazy(() => import("./pages/Auth/Login"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword.jsx"));
const IdentifyAccount = lazy(() => import("./pages/Auth/IdentifyAccount.jsx"));

axios.defaults.headers.common['Authorization'] = localStorage.getItem("ReactAmplify.TokenKey");

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
    
  };

  useEffect(()=>{
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);



  var [logged, setLogged] = useState(false);
  var content = null;
  if (isAuthenticated) {
    content = (
      <Sidebar>
        <Suspense fallback={<SimpleBackdrop />}>
          <Routes>
            <Route path="/" element={<Navigate to="/schedule" replace />} />
            <Route path="/schedule" element={<Palinsesto />} />
            <Route path="/hall" element={<Sale />} />
            <Route path="/film" element={<Film />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes>
        </Suspense>
      </Sidebar>
    );
  } else {
    content = (
      <Suspense fallback={<SimpleBackdrop />}>
        <Routes>
          <Route path="/identifyAccount" element={<IdentifyAccount />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <Login
                onLoginAction={() => {
                  // console.log("Cambiato stato login in vero");
                  // setLogged(true);
                  setAuth(true)
                }}
              />
            }
          />
        </Routes>
      </Suspense>
    );
  }

  return <BrowserRouter>{content}</BrowserRouter>;
};

export default App;
