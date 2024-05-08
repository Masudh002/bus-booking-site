import React from 'react'
import styles from '../style'
const Signin = ({toggleForm}) => {
 const handleSubmit = (e) =>{
  e.preventDefault();
 }
  return (
    <div className=' flex flex-col z-30'>
      <h1 className={`${styles.heading2} text-center`}>Sign In</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col'>
         <input type="email" placeholder='Enter Email' required className={`${styles.input} border-[1px] rounded-md`} />
         <input type="password" placeholder='Enter Password' required className={`${styles.input} border-[1px] rounded-md`} />
         <button className=' bg-orange-500 p-2 rounded-md hover:bg-orange-400 text-[18px] cursor-pointer'>Sign In</button>
         <div className=' flex justify-between gap-8 py-1'>
           <a href="#" className=' underline cursor-pointer text-black hover:text-gray-800'>Forgot Password?</a>
           <button onClick={toggleForm} className=' cursor-pointer underline  text-black hover:text-gray-800 font-semibold'>Sign Up</button>
         </div>
      </form>
    </div>
  )
}

export default Signin
