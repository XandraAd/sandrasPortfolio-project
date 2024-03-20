/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin ,FaXTwitter} from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <div className='min-h-40 md:min-h-20 2xl:min-h-40'>
    <div className='border  md:w-[80%] md:ml-20 lg:ml-[105px] xl:w-[82%] xl:ml-[115px] 2xl:ml-[190px] 2xl:w-[85%]'> </div>
    <header className='my-12  flex justify-center align-center text-[24px] md:my-4 md:justify-start md:ml-20 lg:ml-[105px] md:text-[32px] xl:ml-28 2xl:my-12   2xl:text-[70px] 2xl:ml-48 '>sandraopare</header>
    <div className='flex ml-[7.4rem] mb-2 gap-6  md:justify-end md:mr-20 md:-mt-10 lg:mr-[105px] xl:mr-[115px] 2xl:-mt-32 2xl:mr-[215px]' > 
    <a href="https://github.com/XandraAd" className="2xl:text-6xl">
    <FaGithub />
  </a>
  <a href="#" className="2xl:text-6xl">
    <SiFrontendmentor />
  </a>
  <a href="www.linkedin.com/in/sandra-opare-twum
"className="2xl:text-6xl" >
    <FaLinkedin />
  </a>
  <a href="#" className="2xl:text-6xl">
    <FaXTwitter />
  </a>
       
       
        </div>
    </div>
   
    </>
  )
}

export default Footer