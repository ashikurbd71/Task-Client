import React, { useState } from 'react';
import { FaBars, FaEdit, FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdManageHistory } from "react-icons/md";
import Auth from '../../../Hook/Auth';
const DashboardLayout = () => {
    const [showMenu, setShowMenu] = useState(true);
    console.log(showMenu)
    const{user,userlogout} = Auth()
  
    const handlelogout =()=>{

        userlogout()

    }
    return (
        <>
        <div>
           {/* <!-- component --> */}
<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full text-white flex flex-col justify-between h-screen border-r border-white bg-[#092635] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
                {/* <img src="" alt="tailus logo"> */}
                <Link to={'/'}> <h1 className='lg:text-2xl text-xl text-white font-bold px-4'>Ta<span className='text-red-500'>S</span>k<span className='text-red-500'>B</span>r<span className='text-red-500'>E</span>ez<span className='text-red-500'>E</span></h1></Link>
            </a>
        </div>

        <div className="mt-8 text-center">
            {/* <img src="" alt="" > */}
            <img className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" src={user?.photoURL} alt="" />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-400 lg:block">{user?.displayName}</h5>
            {/* <span className="hidden text-white  lg:block">USER</span> */}
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
           
            <li>
                

                    <NavLink
  to="/dashboardLayout/profile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
 <div className='flex gap-1 items-center'>
    <FaHome/>
 <span className="-mr-1 font-medium">Profile</span>
 </div>
</NavLink>

              
            </li>

            <li>
                

                    <NavLink
  to="/dashboardLayout/addtask"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
<div className='flex gap-1 items-center'>
    <FaEdit/>
<span className="-mr-1 font-medium">Create Task</span>
</div>
</NavLink>

              
            </li>

            <li>
                

                    <NavLink
  to="/dashboardlayout"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
  }
>
    <div className='flex gap-1 items-center'>
        <MdManageHistory/>
        <span className="-mr-1 font-medium">Manages Task</span>
    </div>

</NavLink>

              
            </li>

           
            
        </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-white border-t">
        <button onClick={handlelogout} className="px-4 py-3 text-white  flex items-center space-x-4 rounded-md group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span  className="group-hover:text-red-500">Logout</span>
       </button>
    
    </div>

         
                  
</aside>



<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="sticky z-10 top-0 h-16 border-b border-white bg-[#092635] lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-white font-medium lg:block">Dashboard</h5>
            
            <button onClick={()=> setShowMenu(!showMenu)} className="w-12 h-16 -mr-2 border-r text-white broder-white  lg:hidden">
               <FaBars className='text-2xl'/>
            </button>
            
            <div className="flex space-x-4 ">
                {/* <!--search bar --> */}
                <div hidden className="md:block">
                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                        </svg>
                        </span>
                      
                        <input type="text" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                    </div>
                </div>
                {/* <!--/search bar --> */}
                <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                    <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                        <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                    </svg>
                </button>
                <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </button>
                <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div className={`px-4 text-lg font-semibold lg:hidden duration-700 top-10 list-none space-y-5 w-full bg-[#092635] py-6 ${showMenu}`}>
                    
                    <ul className="space-y-2">
                           
                           <li>
                               
                
                                   <NavLink
                 to="/dashboardlayout"
                 className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
                 }
                >
                <div className='flex gap-1 items-center'>
                   <FaHome/>
                <span className="-mr-1 font-medium">Dashboard</span>
                </div>
                </NavLink>
                
                             
                           </li>
                
                           <li>
                               
                
                                   <NavLink
                 to="/dashboardlayout"
                 className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
                 }
                >
                <div className='flex gap-1 items-center'>
                   <FaEdit/>
                <span className="-mr-1 font-medium">Create Task</span>
                </div>
                </NavLink>
                
                             
                           </li>
                
                           <li>
                               
                
                                   <NavLink
                 to="/dashboardlayout"
                 className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? " px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
                 }
                >
                   <div className='flex gap-1 items-center'>
                       <MdManageHistory/>
                       <span className="-mr-1 font-medium">Manages Task</span>
                   </div>
                
                </NavLink>
                
                             
                           </li>
                
                          
                           
                       </ul>
                
                       <div className="">
                       <button onClick={handlelogout}  className="px-4 py-3 text-white  flex items-center space-x-4 rounded-md group">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                           </svg>
                           <span  className="group-hover:text-red-500">Logout</span>
                      </button>
                   
                   </div>
                   
                   </div>
     <div className="w-full px-10">
        
                
                {/* Sideber */}
           <Outlet/>

         
    </div> 
</div> 
        </div>
        </>
    );
};

export default DashboardLayout;