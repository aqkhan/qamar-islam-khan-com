import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'Montserrat']
  }
});

export default ({ children }) => (
    <div className="container-fluid">
        <Header />
        <div className="container">
        { children }
        <Footer />
        </div>
    </div>
)