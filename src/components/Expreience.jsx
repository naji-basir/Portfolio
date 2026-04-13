import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { IoCode } from "react-icons/io5";
import { RiEmotionHappyLine } from "react-icons/ri";
import { TbAward } from "react-icons/tb";
function Experience() {
  return (
    <div className="flex items-center justify-center gap-2 dark:text-gray-200 rounded-2xl">
      <div className="bg-indigo-200 relative dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center overflow-hidden">
        <div className="absolute size-20 bg-orange-500/30 z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 rounded-full"></div>
        {/* <div className="absolute size-20 bg-red-500/30 z-10 top-[-10%] left-[-10%] rounded-full"></div> */}
        <div className="flex flex-col justify-center items-center gap-1">
          <TbAward className="size-10 text-orange-500" />
          <div className="text-center">
            <h1 className="text-lg font-normal text-gray-800 dark:text-white">
              Experience
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-300">
              1+ Year
            </h1>
          </div>
        </div>
      </div>
      <div className="relative bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center overflow-hidden">
        <div className="absolute size-20 bg-purple-500/30 z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 rounded-full"></div>

        <div className="flex flex-col items-center justify-center gap-1">
          <HiOutlineCode className="size-10 text-purple-500" />
          <div className="text-center">
            <h1 className="text-lg font-normal text-gray-800 dark:text-white">
              Projects
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-300">4+</h1>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="absolute size-20 bg-emerald-600/30 z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 rounded-full"></div>
        <div className="flex flex-col items-center gap-1">
          <AiOutlineUsergroupDelete className="size-10 text-emerald-600" />
          <div className="text-center">
            <h1 className="text-lg font-normal text-gray-800 dark:text-white">
              Teams
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-300">2</h1>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-indigo-200 dark:bg-gray-700 py-3 flex-1 rounded-2xl flex items-center justify-center">
        <div className="absolute size-20 bg-indigo-500/30 z-10 top-0 left-0 -translate-x-1/3 -translate-y-1/3 rounded-full"></div>
        <div className="flex flex-col items-center gap-1">
          <RiEmotionHappyLine className="size-10 text-indigo-600" />

          <div className="text-center">
            <h1 className="text-lg font-normal text-gray-800 dark:text-white">
              Happy clients
            </h1>
            <h1 className="text-sm text-gray-700 dark:text-gray-300">2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
