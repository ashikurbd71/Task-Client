import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import Home from './../Pages/Home';
import DashboardLayout from '../Layout/Mainlayout/Dashboadlayout/DashboardLayout';
import Register from './../Form/Register';
import Login from './../Form/Login';
import Privteroute from './Privateroute';
import Addtask from '../Layout/Mainlayout/Dashboadlayout/Addtask';
import Profile from '../Layout/Mainlayout/Dashboadlayout/Profile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
     children:[
      
      {
      path: "/",
      element: <Home/>,
     },
     {
      path: "/register",
      element: <Register/>,
     },
     {
      path: "/login",
      element: <Login/>,
     }
    
    ],

    },

    {
      path:'/dashboardLayout',
      element:<Privteroute><DashboardLayout/></Privteroute>,
      children:[
        {
          path:'/dashboardLayout/profile',
          element:<Privteroute><Profile/></Privteroute>
        },
        {
          path:'/dashboardLayout/addtask',
          element:<Privteroute><Addtask/></Privteroute>
        }

      ]
    },
    
   
  ])

export default router;