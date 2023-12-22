import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Hook/Auth';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Media from './Media/Media';

const Login = () => {

    const {userlogin} = Auth()
    const navigate = useNavigate()
    const location = useLocation()

     const handlelogin = async e => {

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        try{
            await userlogin(email,password)
          
            Swal.fire({
                title: "Login Successfuly",
                icon: "success"
              });
          
            navigate(location?.state? location?.state : '/')
              }
              catch(err){
          
                  console.log(err)
                //   toast.error()
                  
            Swal.fire({
                title: `${err.message}`,
                text: "Try Again Thnak You",
                icon: "success"
              });
              }

     }

    return (
        <div>
                    <>

{/* <!-- Container --> */}
    <div className="flex flex-row w-full min-h-screen lg:pt-28  pb-10 lg:px-10">

      {/* <!-- Sidebar --> */}
      <div className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
        <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-8 h-8"></span>
          <Link to={'/'}> <h1 className='lg:text-2xl text-xl font-bold px-4'>Ta<span className='text-red-500'>S</span>k<span className='text-red-500'>B</span>r<span className='text-red-500'>E</span>ez<span className='text-red-500'>E</span></h1></Link>
        </div>
        <div className='space-y-5'>
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Login your account and discover new
            experiences</h1>
          <p className="text-lg">Donot have an account?</p>
<Link to={'/register'}>          <button
            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create Account</button></Link>
        </div>

      </div>

      {/* <!-- Login --> */}
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
           
          
          </div>
         
        </div>
        {/* <!-- Login box --> */}
        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Login Your account</h2>
            
          </div>
          <div className="flex flex-col max-w-md space-y-5">
         <form onSubmit={handlelogin} >
         
              
               <input type="email" placeholder="Email" name='email'
              className="flex w-full mt-3  px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
               <input type="password" placeholder="Password"  name='password'
              className="flex w-full mt-3 px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
            <button type='submit' className="flex w-full mt-5 items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Login Now</button>
         </form>
            <div className="flex justify-center items-center">
              <span className="w-full border border-black"></span>
              <span className="px-4">Or</span>
              <span className="w-full border border-black"></span>
            </div>
            <Media/>
          </div>
        </div>

    

      </div>
    </div>


        </>
        </div>
    );
};

export default Login;