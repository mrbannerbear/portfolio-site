import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/dist";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";

const Banner = () => {
  const [showDelayedText, setShowDelayedText] = useState(false);

  useEffect(() => {
    // const timeoutId =
    setTimeout(() => {
      setShowDelayedText(true);
    }, 700);

    // return () => clearTimeout(timeoutId);
  }, []);

  const titles = () => {};

  return (
    <>
      <div className="h-[95vh] flex flex-col md:flex-row items-center justify-center px-6 bg-gray-100">
        <div className="flex h-full w-full items-end justify-end bottom-0 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="hidden md:block"
          >
            <path
              fill="#00cba9"
              fillOpacity="0.2"
              d="M0,160L360,256L720,288L1080,128L1440,96L1440,320L1080,320L720,320L360,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00cba9"
              fillOpacity="0.2"
              d="M0,96L240,32L480,0L720,64L960,0L1200,288L1440,64L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="font-roboto-mono font-semibold text-[28px] md:text-4xl text-gray-700">
            <Typewriter
              words={["Hey, I am"]}
              typeSpeed={50}
              delaySpeed={2000}
              onLoopDone={titles()}
            ></Typewriter>

            {showDelayedText && (
              <Typewriter
                words={[" Saqlain", " a web developer", " Batman"]}
                cursor
                typeSpeed={50}
                delaySpeed={2000}
                loop
              ></Typewriter>
            )}
          </h1>
          {/* {showDelayedText && (
          <p>
            <Typewriter
              words={["I am a Web Developer", "I am Batman"]}
              typeSpeed={60}
              delaySpeed={1700}
              cursor
              cursorStyle="_"
              cursorBlinking={false}
              loop
            ></Typewriter>
          </p>
        )} */}

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-2 z-50">
            <NavLink to={"/projects"}>
              <button className="btn1">My Projects</button>
            </NavLink>
            <NavLink to={"/resume"}>
              <button className="btn2">Resume</button>
            </NavLink>
          </div>
        </div>
        <div className="md:h-[80vh] shadow-lg flex justify-center md:w-1/4 mt-8">
          <Navbar></Navbar>
        </div>
      </div>
    </>
  );
};

export default Banner;
