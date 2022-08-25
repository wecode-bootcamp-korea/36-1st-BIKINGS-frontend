import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Topbtn from './components/TopBtn/TopBtn';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Product from './pages/Product/Product';
import Mypage from './pages/Mypage/Mypage';
import Price from './pages/Price/Price';

const Router = () => {
  const onChangePage = path => {
    window.location.href = '/' + path;
  };

  return (
    <BrowserRouter>
      <Nav onChangePage={path => onChangePage(path)} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route
          path="/product"
          element={<Product onChangePage={path => onChangePage(path)} />}
        />
        <Route path="/Mypage" element={<Mypage />} />
        <Route
          path="/price"
          element={<Price onChangePage={path => onChangePage(path)} />}
        />
      </Routes>
      <Topbtn />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
