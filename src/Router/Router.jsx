import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import Home from './../Pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
     children:[{
      path: "/",
      element: <Home/>,
     }],

    }
  ])

export default router;