import React, { useEffect, useState } from 'react'
import { NavLink} from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Register from '../Pages/Register';

const Navbar = () => {
const [toggle, setToggle] = useState(false);
const [border, setBorder] =useState(false);

const [showForm, setShowForm] = useState(false);

useEffect(() =>{
  const showBorder = () =>{
    if(window.scrollY >= 90){
      setBorder(true);
    }
    else{
      setBorder(false)
    }
  };
  window.addEventListener("scroll", showBorder);
  return () => {
    window.removeEventListener("scroll", showBorder);
  };
}, []);

  return (
    <div className=''>
      <header className={` fixed top-0 flex justify-between items-center p-4 w-full sm:h-[94px] overflow-hidden  z-20
       ${border? 'border-b-2 border-black bg-slate-200' :'border-b-0 bg-white'}`}>
        <h1 className=' sm:text-[24px] text-[18px] text-orange-600 font-extrabold'>Masudh's Bus</h1>
        <nav className=' list-none xs:flex hidden flex-1 text-[16px] sm:text-[18px] justify-end items-center cursor-pointer'>
          <NavLink to='/' className=' px-2 sm:px-5'>Home</NavLink>
          <NavLink to='/about' className=' px-2 sm:px-5'>About Us</NavLink>
          <NavLink to='/contact' className=' px-2 sm:px-5'>Contact Us</NavLink>
          <NavLink onClick={()=> setShowForm(true)} className=' px-2 sm:px-5 '>Sign In/Register</NavLink>
        </nav>
        <div className='fixed xs:hidden flex flex-1 justify-end items-center z-10' >
          <img src={toggle? close:menu } alt="icons"  className=' w-[16px] h-[16px] object-contain fixed right-4' onClick={() => setToggle((prev) =>!prev)}/>
          <div className={`${toggle? "flex": "hidden"} p-4 absolute top-[24px] right-0 left-0 mx-4 my-2 min-w-[200px] h-[50vh] rounded-xl bg-slate-400 z-10 slidein`}>
           <nav className='list-none flex justify-start items-start flex-1 gap-2 flex-col cursor-pointer'>
             <NavLink to='/' onClick={()=> setToggle(false)}>Home</NavLink>
             <NavLink to='/about' onClick={()=> setToggle(false)}>About Us</NavLink>
             <NavLink to='/contact' onClick={()=> setToggle(false)}>Contact Us</NavLink>
             <NavLink  onClick={()=> setToggle(false) || setShowForm(true)}>Sign In/Register</NavLink>
           </nav>
          </div>
      </div>
      </header>
      <div className={`${showForm? "flex":"hidden"} fixed top-0 right-0`} >
        <Register showNoForm={()=> setShowForm( false)}/>
      </div>
    </div>
  )
}

export default Navbar
