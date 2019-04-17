import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 900 }}>
        <Header />
        { children }
        <Footer />
    </div>
)