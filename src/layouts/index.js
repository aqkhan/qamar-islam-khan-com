import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children }) => (
    <div className="container-fluid">
        <Header />
        <div className="container">
        { children }
        <Footer />
        </div>
    </div>
)