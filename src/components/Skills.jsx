import { useState } from "react";

import { FaJava } from "react-icons/fa6";

import { IoChevronUpOutline } from "react-icons/io5";

import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
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
              <FaJava size={48} className="text-red-400" />
              <SiTypescript size={40} className="text-blue-400" />
              <SiJavascript size={40} className="text-yellow-400" />
              <SiPython size={40} className="text-emerald-500" />
            </SkillsItem>

            <SkillsItem title="Frontend">
              <SiHtml5 size={40} className="text-red-400" />
              <SiCss size={40} className="text-blue-400" />
              <SiJavascript size={40} className="text-yellow-400" />
              <SiReact size={40} className="text-blue-500" />
              <SiNextdotjs size={40} className="text-black" />
              <SiTailwindcss size={40} className="text-sky-400" />
            </SkillsItem>

            <SkillsItem title="Backend">
              <SiNodedotjs size={40} className="text-red-400" />
              <SiExpress size={40} className="text-blue-400" />
              <SiMongodb size={40} className="text-emerald-500" />
              <SiMysql size={40} className="text-blue-500" />
              <SiPostgresql size={40} className="text-blue-500" />
            </SkillsItem>

            <SkillsItem title="Tools">
              <SiGithub size={40} className="text-indigo-400" />
              <SiFigma size={40} className="text-pink-400" />
              <SiDocker size={40} className="text-blue-400" />
              <SiGit size={40} className="text-rose-400" />
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
