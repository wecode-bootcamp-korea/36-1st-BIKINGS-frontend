import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Topbtn from './components/TopBtn/TopBtn';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Mypage from './pages/Mypage/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Mypage" element={<Mypage />} />
      </Routes>
      <Topbtn />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
