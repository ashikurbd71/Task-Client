import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';

const Auth = () => {

    const authcontex = useContext(Authcontext)
    return authcontex
            
   
};

export default Auth;