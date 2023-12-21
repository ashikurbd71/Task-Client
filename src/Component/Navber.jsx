import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const navitem = [
        {
            navMenu: 'home',
            link: '/'
        },
        {
            navMenu: 'about',
            link: '/about'
        },
        {
            navMenu: 'Contact',
            link: '/contact'
        },
        // {
        //     navMenu: 'Bla Bla bla',
        //     link: '/bla'
        // },
    ]

    return (
        <div className='lg:px-10 py-6 absolute bg-[#092635] w-full text-white'>
            <div className='block lg:flex justify-between items-center space-y-3 relative'>
                <div className='flex justify-between'>
                   <Link to={'/'}> <h1 className='lg:text-2xl text-xl font-bold px-4'>Ta<span className='text-red-500'>S</span>k<span className='text-red-500'>B</span>r<span className='text-red-500'>E</span>ez<span className='text-red-500'>E</span></h1></Link>
                    <h1 onClick={()=> setShowMenu(!showMenu)} className='text-xl font-bold px-4 block lg:hidden cursor-pointer'><FaBars/></h1>
                </div>
                <div className='hidden list-none text-lg font-semibold lg:flex justify-center items-center gap-10'>
                    {
                        navitem?.map(item =>
                            <li>
                                <Link className='capitalize' to={item.link}>{item.navMenu}</Link>
                            </li>
                        )
                    }
                    <button>
                        <Link to={'/login'} className='bg-red-500 px-6 py-3 rounded-full font-semibold'>Login</Link>
                    </button>
                </div>
                <div className={`absolute px-4 text-lg font-semibold lg:hidden duration-700 top-10 list-none space-y-5 w-full bg-[#092635] py-6 ${showMenu? 'left-0':'left-[-100%]'}`}>
                    {
                        navitem?.map(item =>
                            <li>
                                <Link className='capitalize' to={item.link}>{item.navMenu}</Link>
                            </li>
                        )
                    }
                    <button>
                        <Link to={'/login'} className='bg-red-500 px-6 py-2 rounded-full'>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar