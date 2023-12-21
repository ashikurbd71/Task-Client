import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState,createContext, useEffect } from 'react';
import { auth } from './Firebase.config';


export const Authcontext = createContext(null)
const googleprovider = new GoogleAuthProvider()


const Authprovider = ({children}) => {

   const[user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)


// createuser

const createuser = (email,password) => {

    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}


// usersigin


const userlogin = (email,password) => {

   setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)

}

// googlesigin

const userGooglesigin = () => {

   return signInWithPopup(auth,googleprovider)
}


// obsever

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser)
       setLoading(false)
   })
   return (() =>{
       unSubscribe()
   })
},[])

// siginout

const userlogout = () => {

   return signOut(auth)
}

// updateuser

// const updateuser = (name,photo) => {

//     return updateProfile(auth .currentUser, {
//         displayName: name,
//          photoURL: photo
//       })
// }




    const data = {

        user,
        createuser,
        userlogin,
        userGooglesigin,
        loading,
        userlogout,
    
    }
    return (
        <Authcontext.Provider value={data} >
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;