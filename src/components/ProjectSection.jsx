/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import data from '../data/data'


const ProjectSection = () => {
    const [isHovered, setIsHovered]=useState(null)


    const handleMouseEnter = (index) => {
 
      setIsHovered(index);
    };
  
    const handleMouseLeave = () => {
    
      setIsHovered(null);
    };
  return (
   <>
   

   <main className='mt-6 md:mt-80 lg:mt-[30rem] xl:mt-80 2xl:mt-[55rem]'>
   <header>
   <div className='border md:border-none'> </div>
    <nav className='flex justify-around self-center mt-2 '>
        <h1 className='text-[40px] capitalize md:text-[72px] md:-ml-8 lg:-ml-16 xl:-ml-[143px] xl2:-ml-[195px] 2xl:-ml-[400px] 2xl:text-[100px]'>projects</h1>
        <h4 className='uppercase underline underline-offset-8 decoration-green my-6 text-[16px] md:py-6 hover:text-green 2xl:text-4xl'>
            <Link to="/contact"
            >contact me</Link>
            </h4>
    </nav>
</header>
<div className='cards md:grid md:grid-cols-2 2xl:grid-cols-3'>
{data.map((item,index) => (
    <div
    key={index}

    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={ handleMouseLeave}
    >
        
    <ProjectCard  key={item} item={item} isHovered={isHovered === index}/>
    </div>

    ))}
</div>
   </main>
   </>
  )
}

export default ProjectSection