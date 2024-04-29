import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className=' flex flex-col justify-center items-center min-h-[100vh]'>
      <h1 className=' text-[50px] font-bold'>Sorry! Page Not Found</h1>
      <Link to={'/'} className=' underline text-[24px]'>Back to home</Link>
    </div>
  )
}

export default NotFound
