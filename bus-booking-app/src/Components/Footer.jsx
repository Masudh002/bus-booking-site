import React from 'react'
import { footerContents, socialMedia } from '../Constants'
import playstore from '../assets/playstore.png'

const Footer = () => {
  return (
    <>
    <hr  className=' bg-orange-400 h-1'/>
    <div className=' w-[100%] flex justify-between p-4 ' >
        <div>
            <h1 className=' text-[20px]'>Follow Us</h1>
            <div className=' flex my-2'>
                {socialMedia.map((socials, index) =>(
                    <img src={socials.icon} alt="icons" id={socials.id} className={`w-[21px] h-[21px] object-contain cursor-pointer
                    ${index !== socialMedia.length - 1 ? "mr-4" : "mr-2"}`} onClick={() => window.open(socials.link)}/>
                ))}
            </div>
            <img src={playstore} alt="image" className=' sm:w-full w-[100px]' />
        </div>
        <div>
            {footerContents.map((footerContent) =>(
                <div key={footerContent.title}>
                    <h1 className=' font-bold'>{footerContent.title}</h1>
                    <ul>
                        {footerContent.names.map((name, index)=>(
                            <li key={name.name} className={`${index!== footerContent.names.length-1? "mb-1": "mb-0"}`}>
                                {name.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
    <p className=' m-2'>Powered by: <a href="https://masudhportfolio.vercel.app/" target='_blank' className=' underline cursor-pointer font-semibold'>Masudh002</a></p>
    <div className=' bg-orange-500 p-4'>
        <p className=' text-white sm:text-[14px] ss:text-[12px] text-[10px]'>Copyright &copy; 2024 Masudh Transporters. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer
