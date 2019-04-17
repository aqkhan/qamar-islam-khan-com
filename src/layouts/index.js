import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children }) => (
    <div className="container">
        <Header />
        { children }
        <Footer />
    </div>
)