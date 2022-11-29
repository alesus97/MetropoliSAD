import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SimpleBackdrop from "./pages/LoadingPage";
import { useEffect } from "react";
import axios from "axios";
import "./App.css"

const Palinsesto = lazy(() => import("./controllers/PalinsestoController"));

const Film = lazy(() => import("./controllers/FilmController"));
const Sale = lazy(() => import("./controllers/SaleController"));
const Quiz = lazy(() => import("./controllers/QuizController"));
const Questions = lazy(() => import("./controllers/QuestionsController"));
const Store = lazy(()=> import("./controllers/StoreController"));

const Login = lazy(() => import("./controllers/LoginController"));
const IdentifyAccount = lazy(() => import("./controllers/IdentifyAccountController"));
const ResetPassword = lazy(() => import("./controllers/ResetPasswordController"));

const NotFound404 = lazy(() => import("./pages/NotFound404View"));


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



  //var [logged, setLogged] = useState(false);
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
            <Route path="/quiz/filmId=:filmId" element={<Questions/>}/>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/store" element={<Store/>}/>
            <Route path="*" element={<NotFound404 />} />
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
