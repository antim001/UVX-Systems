/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './../navbar/Navbar';
import Footer from './../Footer/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="main-content min-h-screen">
          
         {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;