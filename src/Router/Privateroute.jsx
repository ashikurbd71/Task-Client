import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Auth from '../Hook/Auth';
import { FaSpinner } from 'react-icons/fa';

const Privteroute = ({children}) => {

    const location = useLocation()
    const{user,loading}=Auth()

      if(loading){

        return <div className='min-h-screen mx-auto mt-36 w-[500px] '>
              
              <FaSpinner className='animate-spin text-5xl text-red-500'/>
  
        </div>
      }


      if(user){

        return children
      } else{ 

        return  <Navigate state={location.pathname} to={'/login'}></Navigate>
        }
};

export default Privteroute;