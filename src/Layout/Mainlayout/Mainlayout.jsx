import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Component/Navber';

const Mainlayout = () => {
    return (
        <div>

            <Navbar/>
            
              <div>
                <Outlet/>
              </div>
        </div>
    );
};

export default Mainlayout;