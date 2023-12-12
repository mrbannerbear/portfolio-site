import { NavLink } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ProjectsSection = () => {
  return (
    <div className="h-max py-20 px-6 md:min-h-screen lg:py-32 bg-gray-100 text-gray-700" id="projects">
      <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="hidden lg:flex relative">
                <img src="/assets/libmanage.png" alt=""  className="absolute 
                w-96 rounded-lg -right-24 bottom-28 shadow-xl
                origin-right 
                "/>
                <img src="/assets/lenormand.png" alt="" className=" w-96 -right-8
                rounded-lg relative -bottom-32 z-20 shadow-xl"/>
                <img src="/assets/purrfect.png" alt="" className="absolute 
                w-96 rounded-lg -right-16 bottom-4 shadow-xl"/>
            </div>
        <div className="max-w-lg">
          <h1 className="text-4xl font-medium font-roboto-mono">My Projects</h1>
          <p className="py-6 text-sm">
            I've compiled some of the projects I've made recently. Please bear in mind that all projects may not be 100% 
            spick & span at all times for reasons like server or other technical issues. I do
            try to keep them updated on a regular basis.
          </p>
          <NavLink to={"/projects"}>
          <button className="btn1">Take a Look</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
