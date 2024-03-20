/* eslint-disable no-unused-vars */
import React from 'react'

const PrimaryLanguages = () => {

    const languages=[
        {
        index:1,
        name:"HTML",
        ExperienceYears:"1+"
    },
    {
        index:2,
        name:"CSS",
        ExperienceYears:"1+"
    },
    {
        index:3,
        name:"Javascript",
        ExperienceYears:"1+"
    },
    {
        index:4,
        name:"react",
        ExperienceYears:"1+"
    },
    {
        index:5,
        name:"chakra uI",
        ExperienceYears:"1+"
    },
    {
        index:6,
        name:"tailwind Css",
        ExperienceYears:"1"
    },
]
  return (
   <>

 <div className='md:relative md:top-[15rem] 2xl:top-[45rem]   ' >
 <div className='border md:w-[80%] md:ml-20 lg:ml-[105px] xl:w-[82%] xl:ml-[115px] xl2:ml-[125px] 2xl:ml-[195px]'> </div>
    <div className='grid grid-cols-1 mt-4  md:mt-10 md:grid-cols-2  md:gap-x-16 lg:gap-4  2xl:mt-32 '>
        {languages.map((item,index)=>{
            return(
                <div className='mb-4  ' key={index}>
                <h2 className='text-[32px] ml-2  font-extrabold flex  text-center justify-center capitalize md:w-[200px] md:flex md:justify-start  md:ml-20 lg:ml-28 xl:text-[48px] xl:w-[300px] xl:ml-[120px] xl2:ml-[125px] 2xl:ml-[200px] 2xl:text-[56px]  2xl:w-[400px]'>
                   {item.name}
                </h2>
       <p className='16px ml-2 w-54 text-gray flex  text-center justify-center capitalize md:w-[200px] md:flex md:justify-start  md:ml-20 lg:ml-28 xl:text-[20px] xl:w-[300px] xl:ml-[120px] xl2:ml-[125px] 2xl:text-[40px]  2xl:w-[600px]  xl2:ml-[200px]'>{item.ExperienceYears} years experience</p>
           </div>
            )
          

        })}
       
    </div>
    </div>
    
  
    </>
  )
}

export default PrimaryLanguages