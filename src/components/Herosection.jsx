/* eslint-disable react/prop-types */

import { createContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-router-dom";
import "/node_modules/video-react/dist/video-react.css";

// Create a new context
const PlayerContext = createContext();

// Player component using the new context API
const Player = ({ videoSource, autoPlay, loop, muted }) => {
  // Use playerContext values here

  return (
    // Your Player component JSX here
    <video
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      className="object-cover "
    >
      <source src={videoSource} type="video/mp4" />
      <source src={videoSource} type="video/webm"/>
      Your browser does not support the video tag.
    </video>
  );
};

const Herosection = () => {
  const playerData = {
    /* Your player data */
  };
  return (
    <>
      <PlayerContext.Provider value={playerData}>
        <div className="relative">
          <div className="video-container absolute inset-0 z-0 2xl:hidden">
            <Player
              videoSource="/assets/bg-video.mp4"
              
              autoPlay={true}
              muted={true}
              loop={true}
            />
          </div>
          <nav className="flex justify-center align-center text-[24px]  z-10 relative md:justify-start md:mx-4 md:mb-10 md:text-[32px]  lg:mx-20 xl:ml-[11rem] 2xl:text-[80px]">
            sandraopare
          </nav>
          <div className="md:grid md:grid-cols-2 ">
            {/* image and icons */}
            <div className="grid grid-rows-2  min-h-96  relative md:order-2">
              <header>
                <img
                  src="/assets/portfolioImage.jpg"
                  alt=""
                  className="py-10 px-20  h-[400px] absolute z-10 -top-10 md:order-2 md:w-[336px] md:h-[685px] md:py-0 md:px-0 md:-top-28 md:left-12 lg:w-[464px] lg:h-[692px] xl:h-[689px] xl:left-[185px] xl2:left-[257px]  xl2:h-[693px] 2xl:w-[2000px] 2xl:h-[1520px]  2xl:left-0 2xl:-top-[20rem]"
                />
                <div className="flex ml-[7.5rem] -mt-2 gap-6 absolute top-8 z-20 md:-top-16 xl:ml-72 2xl:ml-96 2xl:-top-32">
                  <a
                    href="https://github.com/XandraAd"
                    className="2xl:text-6xl"
                  >
                    <FaGithub />
                  </a>
                  <a href="#" className="2xl:text-6xl">
                    <SiFrontendmentor />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sandra-opare-twum/
"
                    className="2xl:text-6xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="#" className="2xl:text-6xl">
                    <FaXTwitter />
                  </a>
                </div>
              </header>
            </div>
            {/* introduction */}
            <div className="relative flex justify-center align-center md:z-30">
              <div className="text-center  min-h-96 py-0 px-12 -mt-4 md:order-1 md:px-0 md:text-start md:ml-20 xl:ml-2">
                <h1 className="text-[40px]  w-full -tracking-[1.14px] mb-2 md:text-[72px] md:-tracking-[2.05px] md:w-[443px] md:h-[233px]  2xl:w-[900px]   2xl:text-[120px]">
                  Nice to meet you!{" "}
                  <span>
                    I’m{" "}
                    <span className="underline underline-offset-8 underline-decoration-4 decoration-green md:underline-offset-[1rem]">
                      Sandra Opare-Twum
                    </span>{" "}
                  </span>
                </h1>
                <p className=" text-center text-[16px] tracking-[1px] mb-8 md:absolute md:top-[27rem] xl:ml-0 2xl:top-[37rem] 2xl:text-[46px]">
                  Based in Ghana, I am a creative web developer, I stand on a
                  sweet spot where design &amp; code intersects.
                </p>
                <h6 className=" uppercase flex place-content-center underline hover:text-green underline-offset-8  decoration-green md:absolute md:top-[34rem] 2xl:top-[54rem] hover:text-green 2xl:text-4xl">
                  <Link to="/contact">contact me</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </PlayerContext.Provider>
    </>
  );
};

export default Herosection;
