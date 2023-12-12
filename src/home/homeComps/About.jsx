import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="min-h-screen py-20 relative flex flex-col md:flex-row  justify-center  items-center md:items-end bg-gray-100 md:gap-10 px-6"
      id="about"
    >
      <div className="absolute h-full w-full z-10 top-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00cba9" fillOpacity="0.2" d="M0,192L288,96L576,96L864,192L1152,0L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path>
      </svg>
      </div>
      <h1 className="font-roboto-mono text-4xl text-gray-700 block z-40 md:hidden mt-16 mb-20 md:my-28 md:mt-0">
        About Me
      </h1>
      <div className="h-max pb-6 border bg-gray-400 w-[70vw] md:w-[30vw] lg:w-[25vw] md:mt-28">
        <img
          src="/assets/Untitled Project1.png"
          alt=""
          className="w-[150px] relative left-0 right-0 z-20 rounded-full -top-20 mx-auto bg-gray-100"
        />
        <div className="text-center relative -mt-6">
          <h1 className="text-gray-100 text-2xl font-medium">Sayed Saqlain</h1>
          <p className="text-gray-100">Front-end web developer</p>
        </div>
        <div className="flex justify-center items-start text-lg gap-5 h-full mt-8 relative">
          <a href="https://github.com/mrbannerbear">
            <FaGithub className="text-4xl"></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/sayed-saqlayn/">
            <FaLinkedin className="text-4xl"></FaLinkedin>
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start pt-12 max-w-md lg:max-w-lg">
        <h1 className="font-roboto-mono text-4xl text-gray-700 hidden md:block">
          About Me
        </h1>
        <br />
        <p className="text-sm">
          I am from Chittagong, Bangladesh. Since I was a kid, I was drawn
          towards tech stuff. My fascination for tech ignited mostly because I
          had a low-end PC so I would dive into a lot of different things-
          custom RAMs to shady websites & everything in-between, just to run the
          new FIFA.
          <br />
          <br />
          In 2023, I joined a coding bootcamp. I was introduced to JavaScript,
          React, Node.js & all these other fancy technologies. I became that 11
          year old kid again.
          <br />
          <br />
          And so here I am, showcasing some of projects on this site I made with
          care & passion.
          <br /><br />
          Some other stuff about me- I am currently studying Bsc. in Statistics, 1st Semester. I like soccer, hot chocolate, history documentaries & video games.
        </p>
      </div>
    </div>
  );
};

export default About;
