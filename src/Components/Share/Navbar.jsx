import  { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon,XMarkIcon,MagnifyingGlassIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
    const {users,logout}=useContext(AuthContext)
    const handleLogout=()=>{
        logout()
        .then(()=>{
            localStorage.removeItem('access token')
           
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const [bar,setBar]=useState(false)
    return (
        <div className=' sticky top-0 z-10 bg-slate-100'>
           <div  className='w-[80%] mx-auto flex  justify-between items-center py-3  '>
           <div>
                <Link to='/'><img className='w-20' src={logo} alt="" /></Link>
            </div>
            <div className='space-x-5 text-lg hidden lg:block'>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Services
                </NavLink>
                <NavLink
                    
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Blog
                </NavLink>
                <NavLink
                    
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Contact
                </NavLink>
                <span >
                    {
                        users ? <span className='space-x-5'>

                       <NavLink
                        to='/bookings'
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "blue" : "",
                            };
                        }}
                    >
                        Booking
                    </NavLink> <NavLink
                        onClick={handleLogout}
                        
                    >
                        Log out
                    </NavLink> 
                        </span>: <NavLink
                    to="/login"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "blue" : "",
                        };
                    }}
                >
                    Log in
                </NavLink>
                    }
               
                </span>
            </div>
            <div className='flex items-center gap-5'>
             <ShoppingBagIcon className="h-6 w-6" />
             <MagnifyingGlassIcon className="h-6 w-6" />
                <button className='text-red-600 border-2 border-red-600 px-2 py-2 rounded font-semibold hidden lg:block'>Appointment</button>
            </div>
            <div className='flex justify-end sm:block lg:hidden'>
            <button className=' px-2 py-1 rounded-md' onClick={()=>setBar(!bar)}>
                <span>
                    {bar ?  
                 <XMarkIcon className="h-10 w-10 text-blue-800 " />
             : <Bars3Icon className="h-10 w-10 text-blue-800 " />
            }
            </span>
            </button>
       </div>
           </div>
           <span onClick={()=>setBar(!bar)}>
           {  <div className={`flex flex-col text-lg pl-10 absolute  border-2 border-b-slate-300 rounded-md duration-500 py-5 space-y-5 pr-4  bg-slate-100 lg:hidden sm:block z-10 ${bar ? 'left-0' : '-left-full'}`} >
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/'>Home</Link>
            {/* <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to=''>About</Link>
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to=''>Services</Link>
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/'>Blog</Link> */}
            <Link className='hover:bg-slate-200 px-3 py-1 rounded-md' to='/'>Contact</Link>
            {
                users ? <span className='flex pl-3 flex-col gap-5'>
                    <Link  onClick={handleLogout} to='/bookings'>Booking</Link>
                    <Link  onClick={handleLogout} to='/bookings'>Log out</Link>
                </span> : <Link  to="/login">Log in</Link>
            }
            <button className='text-red-600 border-2 border-red-600 px-2 py-2 rounded font-semibold '>Appointment</button>
           </div>}
           </span>
           
       
        </div>
    );
};

export default Navbar;