import { FaPython, FaReact, FaJava } from "react-icons/fa";
import { SiCsharp, SiTailwindcss } from "react-icons/si";

const Skills = () => {

  const skillIcons = [
    { 
      icon: <SiCsharp size={100} className="border-4 hover:border-rose-500 rounded-full mb-5 mr-10" />
     },
    {
       icon: <FaPython size={100} className="border-4 hover:border-rose-500 rounded-full mb-5 mr-10" /> 
      },
    { 
      icon: <FaJava size={100} className="border-4 hover:border-rose-500 rounded-full mb-5 mr-10" /> 
    },
    { 
      icon: <FaReact size={100} className="border-4 hover:border-rose-500 rounded-full mb-5 mr-10" /> 
    },
    {
      icon: <SiTailwindcss size={100} className="border-4 hover:border-rose-500 rounded-full mb-5 mr-10" /> 
    },
  ];

  return (
    <div className="bg-rose-800 m-20 max-w-full hover:bg-rose-600">
      <div className="grid justify-items-center m-2">
        <h1 className="text-3xl text-white mt-10 font-sans">SKILLS</h1>
      </div>
      <div className="grid grid-cols-5 gap-3 p-5">
        {skillIcons.map((skill, index) => (
          <div key={index} className="flex justify-center items-center">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;




