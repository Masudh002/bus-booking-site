import React, { useState } from 'react'
import styles from '../style'

const Contact = () => {
  const[formData, setFormData]= useState(
    {
      name:"",
      phone:"",
      email:"",
      subject:"",
      message:"",
    }
  )
  const handleChange = (event)=>{
    const { name, value} = event.target;
    setFormData( prevFormData =>({
      ...prevFormData,
      [name]: value
    }));
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className=' mt-[100px] m-4  flex  flex-col justify-center items-center rounded-lg box-shadow'>
      <h1 className=' text-center font-bold text-lg'>Contact Us</h1>
      <form action=" " onSubmit={handleSubmit} className=' flex flex-col w-[80%] p-2 m-4 rounded-lg box-shadow'>
        <label >Name:</label>
        <input type="text" name='name' value={formData.name} onChange={handleChange} className={`${styles.input}`} placeholder='Name' required  />
        <label >Phone:</label>
        <input type="text" name='phone' value={formData.phone} onChange={handleChange} className={`${styles.input}`} placeholder='Phone' required />
        <label >Email:</label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} className={`${styles.input}`} placeholder='Email' required />
        <label >Subject:</label>
        <input type="text" name='subject' value={formData.subject} onChange={handleChange} className={`${styles.input}`} placeholder='Subject'  required/>
        <label >Message:</label>
        <textarea name="message" id="" value={formData.message} onChange={handleChange} className={`${styles.input} border-[1px] min-h-[60px] max-h-[120px] rounded-md`} placeholder='message'></textarea>
        <button type='submit' className=' bg-orange-600 p-4 rounded-lg text-center m-4 hover:bg-orange-500'> Send</button>
        <div>
          <h1 className=' font-poppins font-semibold sm:text-[20px] text-[16px]'>Head Office</h1>
          <p className='sm:text-[18px] text-[14px]'>Mombasa booking office </p>
          <h2 className=' font-poppins font-semibold sm:text-[20px] text-[16px]'>Email us</h2>
          <a href="mailto:#" className='sm:text-[18px] text-[14px]'>msdbus@gmail.com</a>
          <h3 className=' font-poppins font-semibold sm:text-[20px] text-[16px]'>Call Us</h3>
          <p className='sm:text-[18px] text-[14px]'>07162164....</p>
        </div>
      </form>
    </div>
  )
}

export default Contact
