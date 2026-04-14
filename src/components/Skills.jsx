// import { useState } from "react";
// import { IoChevronUpOutline } from "react-icons/io5";
// import skillsData from "../../data/skillsData";
// import { SkillsItem } from "./SkillsItem";

// function Skills() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="bg-indigo-200 dark:bg-gray-700 rounded-xl">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4">
//         <h1 className="text-base font-semibold text-gray-800 dark:text-white">
//           Skills
//         </h1>

//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="cursor-pointer"
//         >
//           <IoChevronUpOutline
//             className={`text-xl transition-transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           />
//         </button>
//       </div>

//       {/* Content */}
//       {isOpen && (
//         <>
//           <div className="w-full h-0.5 bg-indigo-300 dark:bg-slate-500" />

//           <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-x-4 gap-y-10">
//             {skillsData.map((section) => (
//               <SkillsItem key={section.title} {...section} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Skills;

import { useState } from "react";

import { BsCss, BsJavascript } from "react-icons/bs";

import { DiJava, DiPython, DiReact } from "react-icons/di";

import {
  FaDocker,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaSquareGit,
} from "react-icons/fa6";

import { GrGithub, GrMysql } from "react-icons/gr";

import { IoChevronUpOutline } from "react-icons/io5";

import { RiTailwindCssFill } from "react-icons/ri";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  const [showModel, setShowModel] = useState(true);

  return (
    <div className="bg-indigo-200 dark:bg-gray-700 rounded-xl text-center">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-base font-semibold text-gray-800 dark:text-white">
          Skills
        </h1>

        <IoChevronUpOutline
          className={`${showModel ? "rotate-180" : ""} text-xl`}
          onClick={() => setShowModel(!showModel)}
        />
      </div>

      {showModel && (
        <div>
          <div className="w-full h-0.5 bg-indigo-300 dark:bg-slate-500"></div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-x-4 gap-y-10">
            <SkillsItem title="Languages">
              <DiJava size={48} className="text-red-400" />
              <SiTypescript size={40} className="text-blue-400" />
              <BsJavascript size={40} className="text-yellow-400" />
              <DiPython size={48} className="text-emerald-500" />
            </SkillsItem>

            <SkillsItem title="Frontend">
              <FaHtml5 size={40} className="text-red-400" />
              <BsCss size={40} className="text-blue-400" />
              <BsJavascript size={40} className="text-yellow-400" />
              <DiReact size={48} className="text-blue-500" />
              <SiNextdotjs size={40} className="text-black" />
              <RiTailwindCssFill size={40} className="text-sky-400" />
            </SkillsItem>

            <SkillsItem title="Backend">
              <FaNodeJs size={40} className="text-red-400" />
              <SiExpress size={40} className="text-blue-400" />
              <SiMongodb size={40} className="text-emerald-500" />
              <GrMysql size={40} className="text-blue-500" />
              <SiPostgresql size={40} className="text-blue-500" />
            </SkillsItem>

            <SkillsItem title="Tools">
              <GrGithub size={40} className="text-indigo-400" />
              <FaFigma size={40} className="text-pink-400" />
              <FaDocker size={40} className="text-blue-400" />
              {/* <FaSquareGit size={40} className="text-rose-400" /> */}
            </SkillsItem>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;

export const SkillsItem = ({ children, title }) => {
  return (
    <div className="flex-1 flex items-center flex-col gap-4">
      <h1 className="bg-primary/80 text-white font-normal text-base px-2 py-0.5 rounded-2xl">
        {title}
      </h1>

      <div className="grid grid-cols-4 gap-2 mt-2 items-center justify-center">
        {children}
      </div>
    </div>
  );
};
