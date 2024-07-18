import { LOGO } from "../utils/constants";
import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { logout } from "../utils/loginSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Header(){
    const navigate=useNavigate()
    const [login,setLogin]=useState(false);
    const status=useOnlineStatus();
const [theme,setTheme]=useState("light")
    // redux
    const cartItem=useSelector((store)=>store.cart.items);
    const cartItem2=useSelector((store)=>store.cart.items2);
    const username=useSelector((store)=>store.login.username)
    const dispatch=useDispatch()
    const [nav, setNav] = useState(false);
    
      // Toggle function to handle the navbar's display
      const handleNav = () => {
        setNav(!nav);
      };
useEffect(()=>{
if(theme==="dark"){
    document.documentElement.classList.add("dark")
}else{
    document.documentElement.classList.remove("dark")

}
},[theme])

function handleSwitch(){
setTheme((c)=>{
    if(c==="dark"){
        return "light"
    }
    else{
        return "dark"
    }
})
}


return(
    <div className='dark:bg-gray-900 dark:text-white flex justify-between items-center  px-3'>
    {/* Logo */}
    <Link to="/">
        <Toaster />
        <img
        className="w-[100px] h-[100px]"
        src={LOGO} alt="logo"/>
        </Link>
    {/* <ul className='z-10 hidden md:flex'>
      {navItems.map(item => (
        <li
          key={item.id}
          className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
        >
        </li>
      ))}
    </ul> */}
     <ul className="z-10 hidden md:flex  justify-between items-center min-w-[84%] sm:min-w-[60%] sm:justify-around">
            {/* <li >Online Status:{status?"✅":"🔴"}</li> */}

            <li className=" text-green-700 font-bold text-xl " >{username.length>0 && `Hi ${username}!`}</li>
            <li>
                <Link to="/"
            className="p-2 flex justify-center items-center gap-2">
            <FaHome className='w-4 h-4 text-gray-700 dark:text-white' />
                            Home</Link>
            </li>
            <li>
                
            <Link to="/about"
             className="p-2 flex justify-center items-center gap-2">
            <FaBuilding className='w-4 h-4 text-gray-700  dark:text-white'/>
            About</Link>
            </li>
            <li><Link to="/contact"
                className="p-2 flex justify-center items-center gap-2">
            <FaPhoneAlt className="w-4 h-4 text-gray-700  dark:text-white" />
            Contact Us</Link></li>
            <li
           
            ><Link to="/cart"
            className="p-2 flex justify-center items-center"
            >
                
                <FaShoppingCart className="mr-2 w-4 h-4 text-gray-700  dark:text-white"/>
                Cart
                
                <span className="dark:text-white ml-1 mt-[-6px] font-bold mr-1 text-xl text-gray-900">{cartItem?.length===0?null:cartItem.length}</span> </Link></li>
          <li>  <button 
            onClick={(e)=>{
                
                if(!login){
                    navigate("/login")
                    setLogin(true);
                }else{
                    setLogin((c)=>false)
                    dispatch(logout())
                }
            }}
            className="w-[80px] text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                {username.length>0?"logout" :"login"}
            </button></li>
            <li><button
            onClick={handleSwitch}
            className="w-[40px] h-[40px] flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-[50%] text-sm   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{theme=="dark"?<IoSunny className="w-[64%] h-[64%]" />:<MdDarkMode className="w-[64%] h-[64%]"/>}</button></li>
        </ul>

    {/* Mobile Navigation Icon */}
    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose className="cursor-pointer" size={30} /> : <AiOutlineMenu className="cursor-pointer" size={30} />}
    </div>

    {/* Mobile Navigation Menu */}
    <ul
      className={
        nav
          ? 'dark:bg-gray-900 dark:text-white dark:border-white z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-white ease-in-out duration-500'
          : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
      }
    >
      {/* Mobile Logo */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}

      {/* Mobile Navigation Items */}
        <li
          key={crypto.randomUUID()}
          className='dark:hover:bg-white dark:hover:text-gray-900   p-4 border-b rounded-xl duration-300 hover:bg-gray-900  hover:text-white cursor-pointer border-gray-600'
        >
           <Link to="/"
           className="w-[100%] block"
           >
                Home</Link>
        </li>
        <li
          key={crypto.randomUUID()}
          className='dark:hover:bg-white dark:hover:text-gray-900   p-4 border-b  hover:bg-gray-900  hover:text-white rounded-xl duration-300 cursor-pointer border-gray-600'
        >
            <Link to="/about"
             className="w-[100%] block"
            >
            About</Link>
        </li>
        <li
          key={crypto.randomUUID()}
          className='dark:hover:bg-white dark:hover:text-gray-900  p-4 border-b rounded-xl  hover:bg-gray-900  hover:text-white  duration-300 cursor-pointer border-gray-600'
        >
            <Link to="/contact"
             className="w-[100%] block"
            >
            Contact Us</Link>
        </li>
        <li
          key={crypto.randomUUID()}
          className=' dark:hover:bg-white dark:hover:text-gray-900  p-4 border-b rounded-xl  hover:bg-gray-900  hover:text-white duration-300  cursor-pointer border-gray-600'
        >
           <Link 
            className="w-[100%] block"
           to="/cart"
            >
        Cart
                <span className="dark:text-white  hover:bg-gray-900  hover:text-white ml-1 mt-[-6px] font-bold mr-1 text-xl text-gray-900">{cartItem?.length===0?null:cartItem.length}</span> </Link>
        </li>
        <li
          className='dark:hover:bg-white dark:hover:text-gray-900  p-4 border-b rounded-xl  hover:bg-gray-900  hover:text-white duration-300  cursor-pointer border-gray-600'
        
        >  <button 
         className="w-[100%] block text-left"
            onClick={(e)=>{
                if(!login){
                    navigate("/login")
                    setLogin(true);
                }else{
                    setLogin((c)=>false)
                    dispatch(logout())
                }
            }}
            >
                {username.length>0?"logout" :"login"}
            </button></li>
            <li className="self-center"><button
            onClick={handleSwitch}
            className="w-[40px] h-[40px] flex justify-center items-center ml-3 mt-3 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-[50%] text-sm   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{theme=="dark"?<IoSunny className="w-[64%] h-[64%]" />:<MdDarkMode className="w-[64%] h-[64%]"/>}</button></li>
    </ul>
  </div>
)









    return<div className="px-3 dark:bg-gray-900
    dark:text-white
    flex justify-between items-center">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>`
        <Link to="/">
        <Toaster />
        <img
        className="w-[100px] h-[100px]"
        src={LOGO} alt="logo"/>
        </Link>
        <ul className="flex justify-between items-center min-w-[84%] sm:min-w-[60%] sm:justify-around">
            {/* <li >Online Status:{status?"✅":"🔴"}</li> */}

            <li className="hidden md:block text-green-700 font-bold text-xl " >{username.length>0 && `Hi ${username}!`}</li>
            <li>
                <Link to="/"
            className="p-2 flex justify-center items-center gap-2">
            <FaHome className='w-4 h-4 text-gray-700 dark:text-white' />
                            Home</Link>
            </li>
            <li>
                
            <Link to="/about"
             className="p-2 flex justify-center items-center gap-2">
            <FaBuilding className='w-4 h-4 text-gray-700  dark:text-white'/>
            About</Link>
            </li>
            <li><Link to="/contact"
                className="p-2 flex justify-center items-center gap-2">
            <FaPhoneAlt className="w-4 h-4 text-gray-700  dark:text-white" />
            Contact Us</Link></li>
            <li
           
            ><Link to="/cart"
            className="p-2 flex justify-center items-center"
            >
                
                <FaShoppingCart className="mr-2 w-4 h-4 text-gray-700  dark:text-white"/>
                Cart
                
                <span className="dark:text-white ml-1 mt-[-6px] font-bold mr-1 text-xl text-gray-900">{cartItem?.length===0?null:cartItem.length}</span> </Link></li>
          <li>  <button 
            onClick={(e)=>{
                
                if(!login){
                    navigate("/login")
                    setLogin(true);
                }else{
                    setLogin((c)=>false)
                    dispatch(logout())
                }
            }}
            className="w-[80px] text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                {username.length>0?"logout" :"login"}
            </button></li>
            <li><button
            onClick={handleSwitch}
            className="w-[40px] h-[40px] flex justify-center items-center text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-[50%] text-sm   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{theme=="dark"?<IoSunny className="w-[64%] h-[64%]" />:<MdDarkMode className="w-[64%] h-[64%]"/>}</button></li>
        </ul>
    </div>
}
export default Header;