/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProjectCard = ({ item,isHovered }) => {


 

  return (
    <div className="mx-auto max-w-2xl  px-4 py-16 md:px-0 md:py-0  md:mb-56  lg:px-8 lg:ml-2 xl2:ml-6 2xl:p-0 2xl:ml-32">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  md:mb-6 ">
        <div className="group relative ">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none group-hover:opacity-75 "
            >
            <img
              src={item.ImagePath}
              className=" h-full w-full object-cover object-center  md:px-16 md:flex md:justify-around lg:h-[400px] lg:w-[600px] lg:hover:bg-darkgray/[.8] 2xl:h-[800px] 2xl:w-auto " 
              alt={item.name}
            />
            {(isHovered ||window.innerWidth<=1024) && (
              <div className="flex text-md absolute top-[23rem]  md:mb-6  md:-mt-20 md:ml-16 lg:top-[5rem] lg:flex-col lg:gap-6 lg:bg-darkgray/[.8] lg:w-[312px] lg:h-[400px]  2xl:h-[800px] cursor-pointer">
                <a
                  href={item.projectLink}
                  className="mr-12 mt-4 underline underline-offset-[12px] decoration-green decoration-4  lg:m-auto 2xl:text-3xl"
                >
                  View Project
                </a>

                <a
                  href={item.codeLink}
                  className="mt-4 underline underline-offset-[12px] decoration-green decoration-4 lg:m-auto 2xl:text-3xl"
                >
                  View Code
                </a>
              </div>
            )}
          </div>
          <div className="mt-4 uppercase text-white font-bold h-12">
            <div>
              <h2 className="text-3xl tracking-tight h-16 mb-2  md:w-64 md:ml-16 md:text-2xl xl:w-96 xl:text-4xl xl:mb-6 2xl:text-[56px] 2xl:w-[600px] 2xl:tracking-normal 2xl:h-20 2xl:leading-snug">{item.name}</h2>
              <div className="flex flex-wrap mb-2 text-sm mt-1 md:ml-16 md:w-64 xl:text-lg xl:w-96 2xl:text-3xl 2xl:w-[500px] 2xl:mt-20 2xl:leading-snug">
                <p className="mr-4 ">{item.language1}</p>
                <p className="mr-4 ">{item.language2}</p>
                <p className="mr-4 ">{item.language3}</p>
                <p >{item.language4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
