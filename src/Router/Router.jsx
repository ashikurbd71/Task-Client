import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>
    },
  ])

export default router;