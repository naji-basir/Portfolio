import { useState } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import data from "../../data/projectData";

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
          {/* <div className="flex "></div> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 p-4 gap-x-4 gap-y-4">
            {data.map((d, index) => (
              <div key={index} className="h-35 rounded-xl flex flex-col gap-1">
                <h1 className="self-start bg-primary text-white dark:text-black px-4 rounded-2xl rounded-bl-none">
                  {d.name}
                </h1>
                <div className="bg-slate-500 h-full w-full rounded-2xl rounded-tl-none flex flex-col">
                  <div className="self-start size-6 rounded-full bg-primary text-white dark:text-black m-1">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
