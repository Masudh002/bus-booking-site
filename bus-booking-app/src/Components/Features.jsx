import React from 'react'
import { features } from '../Constants'
import styles from '../style'

const Features = () => {
  return (
    <div >
      <h1 className=' text-center font-semibold sm:text-[20px] text-[18px]'>Our Features</h1>
      <div className=' flex flex-wrap justify-center sm:grid sm:grid-cols-4 gap-x-4 gap-y-1 ' >
         {features.map((feature) => (
          <div key={feature.id} className='flex  flex-col p-4  max-w-[380px] md:mr-10 sm:mr-5 mr-0 my-5'>
             <img src={feature.img} alt="photo" className=' w-[80%]' />
             <h1 className={`${styles.heading2}`}>{feature.title}</h1>
             <p className={`${styles.paragraph}`}>{feature.text}</p>
         </div>
        ))}
      </div>
    </div>
  )
}

export default Features
