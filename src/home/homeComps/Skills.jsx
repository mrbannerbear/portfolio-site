/* eslint-disable react/no-unescaped-entities */
const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      image: "javascript.svg",
      
    },
    {
      name: "React.js",
      image: "reactjs.svg",
      
    },
    {
      name: "Next JS",
      image: "next-js.svg",
      
    },
    {
      name: "TypeScript",
      image: "typescript.svg",
      
    },
    {
      name: "Tailwind CSS",
      image: "tailwind.svg",
      
    },
    {
      name: "Firebase",
      image: "firebase.svg",
      
    },
    {
      name: "Express.js",
      image: "expressjs.svg",
      
    },
    {
      name: "MongoDB",
      image: "mongodb.svg",
      
    },
  ];

  return (
    <div id="skills" className="min-h-screen bg-gray-100 text-gray-700">
      <div className="text-center py-12 md:py-20 px-6">
        <h1 className="text-4xl font-semibold font-roboto-mono">My Skills</h1>
        <p className="mt-6 max-w-lg mx-auto">
            Being a web developer means signing up for a learning journey that lasts a lifetime.
            And so one can never be at peace with their current tech stack due to new technologies 
            that come out frequently.
            But for now, these are what I'm working with:
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 md:gap-5 lg:gap-10 px-6">
        {skills.map((each) => (
          <p key={each.name}>
            <img src={each.image} alt="" className="w-20" />
            <p className="w-full text-center">
              <span className="font-roboto-mono text-sm text-center font-medium w-full">
                {each.name}
              </span>{" "}
              <br />
            </p>
          </p>
        ))}
      </div>
      <div>
        {/* Apart from these, I am able to grasp concepts quickly, work well under pressure & have leadership qualities. */}
      </div>
    </div>
  );
};

export default Skills;
