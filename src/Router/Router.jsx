import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import Home from './../Pages/Home';
import DashboardLayout from '../Layout/Mainlayout/Dashboadlayout/DashboardLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
     children:[{
      path: "/",
      element: <Home/>,
     }],

    },

    {
      path:'/dashboardLayout',
      element:<DashboardLayout/>
    }
  ])

export default router;