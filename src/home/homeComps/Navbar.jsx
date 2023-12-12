import { Link } from "react-scroll";
import "../../../src/index.css";

const Navbar = () => {
  const sections = [
    {
      id: 1,
      name: "About Me",
      href: "about",
    },
    {
      id: 2,
      name: "Skills",
      href: "skills",
    },
    // {
    //   id: 3,
    //   name: "Experience",
    //   href: "experience",
    // },
    {
      id: 4,
      name: "Projects",
      href: "projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <div
      className="flex flex-row md:flex-col md:w-56 md:h-80 my-auto bg-transparent
     justify-center  py-3 md:py-6 z-50 md:pl-6 bg-gray-100 gap-2 md:gap-0 px-3 md:px-0"
    >
      {sections.map((each) => (
        <span
          key={each.id}
          className="hover:cursor-pointer h-full hover:underline hover:transition-all w-fit
                text-gray-700 text-sm md:text-lg"
        >
          <Link to={each.href} smooth activeClass="active" spy={true}>
            {each.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Navbar;
