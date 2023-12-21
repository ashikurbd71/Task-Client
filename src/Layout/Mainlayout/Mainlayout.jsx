import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Component/Navber';
import Footer from '../../Component/Footer';

const Mainlayout = () => {
    return (
        <div>

            <Navbar/>
            
              <div className='min min-h-screen'>
                <Outlet/>
              </div>

              <Footer/>
        </div>
    );
};

export default Mainlayout;