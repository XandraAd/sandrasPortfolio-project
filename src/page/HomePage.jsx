/* eslint-disable no-unused-vars */
import React from 'react'
import Herosection from "../components/Herosection"
import PrimaryLanguages from "../components/PrimaryLanguages"
import ProjectSection from "../components/ProjectSection"
import ContactUs from './ContactUs'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <> 
    <div className='bg-bgBlack text-white'>
      <div >   <Herosection/></div>
 

<PrimaryLanguages/>
<ProjectSection/>


< ContactUs/>
<Footer/>
</div>
</>
   
  
  )
}

export default HomePage