import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import styles from '../style';
import close from '../assets/close.svg'
import Signup from './Signup';
import Signin from './Signin';

const Register = () => {
  const [showSignupForm, setShowSignupForm]= useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleClose = () => {
    // Reload the page
    window.location.reload();
  };

  const showSignup = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const showLogin = () => {
    setShowSignupForm(false);
    setShowLoginForm(true);
  };

  return (
    <div className=' sm:mt-[95px] mt-[60px] h-[80vh] flex flex-col justify-start box-shadow mx-4 my-4 px-10 bg-white rounded-md z-50'>
      <div>
        <img src={close} alt="icon" className='p-2 object-contain fixed right-4  cursor-pointer'  onClick={handleClose} />
      </div>
      {!showSignupForm && !showLoginForm &&(
        <div className='  mb-4 flex flex-col  gap-2'>
        <h1 className={`${styles.heading2} text-center`}>Join our Bus</h1>
        <NavLink onClick={showSignup} className=' border border-black rounded-md py-2 px-4 text-orange-500 text-[20px] ml-2 cursor-pointer hover:bg-gray-300 '>Sign Up With Email</NavLink>
        <NavLink  onClick={showLogin} className=' border border-black rounded-md  py-2 px-4 text-orange-500 text-[20px] ml-2 cursor-pointer  hover:bg-gray-300 mb-2 '>Sign In</NavLink>
      </div>
      )}
      {showSignupForm && <Signup toggleForm={showLogin} />}
      {showLoginForm && <Signin toggleForm={showSignup}/>}
    </div>
    
  )
}

export default Register
