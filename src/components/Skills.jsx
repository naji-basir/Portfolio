import { useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import skillsData from "../../data/skillsData";
import { SkillsItem } from "./SkillsItem";

function Skills() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-indigo-200 dark:bg-gray-700 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-base font-semibold text-gray-800 dark:text-white">
          Skills
        </h1>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <IoChevronUpOutline
            className={`text-xl transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Content */}
      {isOpen && (
        <>
          <div className="w-full h-0.5 bg-indigo-300 dark:bg-slate-500" />

          <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-x-4 gap-y-10">
            {skillsData.map((section) => (
              <SkillsItem key={section.title} {...section} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Skills;
