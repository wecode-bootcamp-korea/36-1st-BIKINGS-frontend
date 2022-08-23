import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Price from './pages/Price/Price';
import Login from './pages/Main/Login/Login';
import Topbtn from './components/TopBtn/TopBtn';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
      </Routes>
      <Topbtn />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
