/* eslint-disable react/no-unescaped-entities */
const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      image: "/assets/javascript.svg",
      level: "65",
    },
    {
      name: "React.js",
      image: "/assets/reactjs.svg",
      level: "65",
    },
    {
      name: "Tailwind CSS",
      image: "/assets/tailwind.svg",
      level: "80",
    },
    {
      name: "Firebase",
      image: "/assets/firebase.svg",
      level: "75",
    },
    {
      name: "Express.js",
      image: "/assets/expressjs.svg",
      level: "70",
    },
    {
      name: "MongoDB",
      image: "/assets/mongodb.svg",
      level: "50",
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
              <progress
                className="progress progress-secondary w-20"
                value={each.level}
                max="100"
              ></progress>
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
