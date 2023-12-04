// src/components/Layout.js
import React from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
      <div className="flex flex-col h-screen">
        <Header /> 
        <hr />
        <Body />
        <hr />
        <Footer />
      </div>
    );
  }
export default Layout;
