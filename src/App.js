import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
// import Login from './pages/Login';


const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
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
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
    </Suspense>
  </Sidebar>
} else {
  content = <Suspense fallback={<div>Loading...</div>}>
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