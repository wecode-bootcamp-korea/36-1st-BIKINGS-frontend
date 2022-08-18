import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Basket from './pages/Basket/Basket';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
