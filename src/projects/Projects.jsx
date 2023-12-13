import { FaArrowLeft } from "react-icons/fa";
import { NavLink, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";

const Projects = () => {
  const projects = [
    {
      name: "Restaurant Le Normand",
      image: "lenormand.png",
      description: "This is a fine dining restaurant website inspired by that of Alain Ducasse at the Dorchester.",
      live: "https://restaurant-le-normand.surge.sh/",
      clientLink: "https://github.com/mrbannerbear/le-normand-restaurant-client/",
      serverLink: "https://github.com/mrbannerbear/le-normand-restaurant-server/",
      frontend: [
        "ReactJS, ",
        "React Router, ",
        "Tailwind CSS, ",
        "DaisyUI, ",
        "Stripe Payment Gateway",
      ],
      backend: ["Firebase, ", "MongoDB, ", "Express.js, ", "Axios"],
      features: [
        "Implemented Stripe Gateway for advanced payment during table reservations",
        "Uses simple CRUD operations",
        "Has smooth styling for a more elegant experience",
      ],
    },
    {
      name: "Purrfect Adoption Hub",
      image: "purrfect.png",
      description: "Purrfect Adoption Hub is a pet adoption site that allows users to adopt pets as well as donate.",
      live: "https://purrfect-adoption-hub1.surge.sh/",
      clientLink: "https://github.com/mrbannerbear/purrfect-adoption-hub-client",
      serverLink: "https://github.com/mrbannerbear/purrfect-adoption-hub-server",
      frontend: [
        "ReactJS, ",
        "React Router, ",
        "Tailwind CSS, ",
        "TanStack Query, ",
        "TanStack Table, ",
        "Stripe Payment Gateway",
      ],
      backend: ["Firebase, ", "MongoDB, ", "Express.js, ", "Axios"],
      features: [
        "Simple yet engaging design",
        "Stripe payment gateway for donations",
        "User dashboard containing info on added pets & donations",
        "Responsive design except in dashboard"
      ],
    },
    {
      name: "FirstPage Library",
      image: "libmanage.png",
      description: "Firstpage Library is an online library that allows users to borrow books as well add & edit their own books.",
      live: "https://lib-management-surge1.surge.sh/",
      clientLink: "https://github.com/mrbannerbear/library-management-client",
      serverLink: "https://github.com/mrbannerbear/library-management-server",
      frontend: [
        "ReactJS, ",
        "React Router, ",
        "Tailwind CSS, ",
        "DaisyUI, ",
        "React Hook Form"
      ],
      backend: ["Firebase, ", "MongoDB, ", "Express.js, ", "Axios"],
      features: [
        "Authenticated with Firebase",
        "Responsive for smaller screens",
        "Includes day/night theme",
        "Used React Hook Form for better hook handling"
      ],
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-12 px-6 text-gray-700">
      <div className="px-6">
        <button>
          <NavLink to={"/"}>
            <FaArrowLeft></FaArrowLeft>
          </NavLink>
        </button>
      </div>
      <h1 className="text-center text-3xl font-semibold font-roboto-mono mb-12">Projects</h1>
      <div>
        {projects.map((each) => (
          <div
            key={each.live}
            className="flex flex-col items-center justify-center gap-5 mt-12 border-b-2 pb-12"
          >
            <h2 className="text-2xl font-roboto-mono font-medium">{each.name}</h2>
            <div>
              <img src={each.image} className="w-[700px] rounded-lg" alt="" />
            </div>
            <div className="text-center">
                <p className="mb-4">
                    {each.description}
                </p> 
                
              <p>
                <a target="_blank" className="btn2 px-2" rel="noreferrer" href={each.live}>
                  Live Link
                </a>{" "} <br /><br />
                
                <a target="_blank" className="btn2 px-2" rel="noreferrer" href={each.clientLink}>
                  Repository (Client)
                </a>{" "}
                
                <a target="_blank" className="btn2 px-2" rel="noreferrer" href={each.serverLink}>
                  Repository (Server)
                </a>
              </p>
              <br />
              <div className="flex text-start">

              <p className="max-w-sm pr-2">
                <span className="text-lg font-medium">Features:</span>
                <ul className="list-disc">
                  {each.features.map((each) => (
                    <li>{each}</li>
                  ))}
                </ul>
              </p>
              <br />
              <div className="pl-2 max-w-md">
              <p>
                <span className="text-lg font-medium">Frontend Technologies:</span>
                <p>
                  {each.frontend.map((each) => (
                    <span>{each}</span>
                  ))}
                </p>
              </p>
              <br />
              <p>
                <span className="text-lg font-medium">Backend Technologies:</span>
                <p>
                  {each.backend.map((each) => (
                    <span>{each}</span>
                  ))}
                </p>
              </p>
              </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default Projects;
