import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { IoCode } from "react-icons/io5";
import { RiEmotionHappyLine } from "react-icons/ri";
import { TbAward } from "react-icons/tb";
function Experience() {
  return (
    <div className="flex items-center justify-center gap-2 dark:text-gray-200 rounded-2xl">
      <div className="bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-1">
          <TbAward className="size-14 text-orange-500" />
          <div className="text-center">
            <h1 className="text-xl font-normal text-gray-800 dark:text-white">
              Experience
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              1+ Year
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <HiOutlineCode className="size-14 text-purple-500" />
          <div className="text-center">
            <h1 className="text-xl font-normal text-gray-800 dark:text-white">
              Projects
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-200">4+</h1>
          </div>
        </div>
      </div>
      <div className="bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <AiOutlineUsergroupDelete className="size-14 text-emerald-600" />
          <div className="text-center">
            <h1 className="text-xl font-normal text-gray-800 dark:text-white">
              Teams
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-200">2</h1>
          </div>
        </div>
      </div>
      <div className="bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <RiEmotionHappyLine className="size-14 text-indigo-600" />

          <div className="text-center">
            <h1 className="text-xl font-normal text-gray-800 dark:text-white">
              Happy clients
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-200">2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
