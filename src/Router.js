import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './pages/Main/Login/Login';
import Topbtn from './components/TopBtn/TopBtn';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
      <Topbtn />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
