import { useState } from 'react';
import React from 'react'
import styles from '../style';

const Signup = ({toggleForm}) => {
  const[email, setEmail]= useState( "");
  const[password, setPassword]= useState( "");
  const[name, setName]= useState("");
  const[phone, setPhone]= useState("");
  const [message, setMessage]= useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !password || !email){
      setMessage("please fill in both fields above");
      return;
    }
    if( password.length < 4){
      setMessage("Please input atleast 6 characters password")
      return;
    }
  }
  return (
    <div className='flex justify-center items-center flex-col'>
     <h1 className={`${styles.heading2} text-center`}>Sign Up page</h1>       
      {message? (<p style={{ background:"pink", padding:'12px', margin:'4px', fontWeight:'bold', borderRadius:'5px'}}>
          We Couldn't create your account  <br /> Please check your responses and try again </p>):("")
       }
     <form className=' flex space-x-1 flex-col' onSubmit={handleSubmit}>
          <input type="text"
             placeholder='Enter Full Name'
             required
             value={name}
             onChange={(e) => setName(e.target.value)}
             className={`${styles.input} border-[1px] rounded-md`}
         />
         <input type="email"
             placeholder='Enter Email'
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className={`${styles.input} border-[1px] rounded-md`}
         />
         <div className=' flex xss:flex-row flex-col'>
          <select name="" className={`${styles.input} border-[1px] rounded-md w-fit`} >
            <option value="">+254</option>
            <option value="">+255</option>
            <option value="">+256</option>
          </select>
           <input type="text"
             placeholder='Phone'
             required
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             className={`${styles.input} border-[1px] rounded-md`}
           />
         </div>

         <input type="password"
             placeholder='Enter Password'
             required
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className={`${styles.input} border-[1px] rounded-md`}
         />
         <button type='submit'  className=' bg-orange-500 hover:bg-orange-400 cursor-pointer py-1 rounded-md'> Signup</button>
     </form>
     <p style={{color:"red", padding:"2px"}}>{message}</p>
     <p className=' font-poppins'>Already have an account? <button onClick={toggleForm} className=' ml-20 underline cursor-pointer font-semibold'>Login</button> </p>
   </div>
  )
}

export default Signup
