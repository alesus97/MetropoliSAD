import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomizedProgressBars from './pages/LoadingPage'; 

const Palinsesto = lazy(() => import('./pages/Palinsesto.jsx'));
const Film = lazy(() => import('./pages/Palinsesto.jsx'));
const Analytics = lazy(() => import('./pages/Analytics.jsx'));
const Comment = lazy(() => import('./pages/Comment.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const ProductList = lazy(() => import('./pages/ProductList.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));





const App = () => {
  var [logged,setLogged] = useState(false);
  var content = null;
  if (logged){
    content = <Sidebar>
  <Suspense fallback={<CustomizedProgressBars/>}>
    <Routes>
      <Route path="/palinsesto" element={<Palinsesto />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
    </Suspense>
  </Sidebar>
} else {
  content = <Suspense fallback={<CustomizedProgressBars/>}>
      <Routes>
      <Route path="*" element={<Navigate to = "/" replace />}/>
      <Route path="/" element={<Login onLoginAction={() => {setLogged(true)}} />} />
      </Routes>
  </Suspense>
}

  return (
    <BrowserRouter>
      {content}
    </BrowserRouter>
  );
};

export default App;