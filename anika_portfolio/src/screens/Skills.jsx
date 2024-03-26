import { FaPython, FaReact, FaJava } from "react-icons/fa";
import { SiCsharp, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-blue-900 m-20 max-w-full">
      <div className="grid justify-items-center m-2">
        <h1 className="text-3xl text-white mt-10 font-sans">SKILLS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
        <div className="flex justify-center items-center mt-5">
          <SiCsharp size={100} className="border-4 hover:border-blue-800 rounded-full mb-5 mr-10" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <FaPython size={100} className="border-4 hover:border-blue-800 rounded-full mb-5 mr-10" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <FaReact size={100} className="border-4 hover:border-blue-800 rounded-full mb-5 mr-10" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <FaJava size={100} className="border-4 hover:border-blue-800 rounded-full mb-5 mr-10" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <SiTailwindcss size={100} className="border-4 hover:border-blue-800 rounded-full mb-5 mr-10" />
        </div>
      </div>
    </div>
  );
};

export default Skills;


