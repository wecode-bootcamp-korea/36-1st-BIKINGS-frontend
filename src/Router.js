import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Price from './pages/Price/Price';
import Topbtn from './components/TopBtn/TopBtn';
import Main from './pages/Main/Main';

const Router = () => {
  const onChangePage = path => {
    window.location.href = '/' + path;
  };
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
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
