import { useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";

function Projects() {
  const [showModel, setShowModel] = useState(true);

  return (
    <div className="bg-indigo-200 dark:bg-gray-700 rounded-xl text-center">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-base font-semibold text-gray-800 dark:text-white">
          Projects
        </h1>
        <IoChevronUpOutline
          className={`${showModel ? "rotate-180" : ""} text-xl`}
          onClick={() => setShowModel(!showModel)}
        />
      </div>

      {showModel && (
        <div>
          <div className="w-full h-0.5 bg-indigo-300 dark:bg-slate-500"></div>
          <div className="flex p-4"></div>
        </div>
      )}
    </div>
  );
}

export default Projects;
