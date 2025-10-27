import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaCopy, FaMapLocationDot, FaRegCopy } from "react-icons/fa6";
import { HiH1 } from "react-icons/hi2";
import { IoCopy, IoMailUnread } from "react-icons/io5";

function Social() {
  const [isCopy, setIsCopy] = useState(false);
  return (
    <div className="mx-2 mt-2 p-2 px-4 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <h2 className="text-2xl mt-4 ">Reach Me</h2>
      <div className="py-3">
        <div className="mt-4 flex gap-10">
          <FaMapLocationDot size={25} />
          <h2>Kabul, Afghaniastan</h2>
        </div>
        <div className="pt-3 flex gap-10">
          <IoMailUnread size={25} />
          <div className="flex gap-5">
            <a
              href="mailto:basirnaji007@gmail.com"
              className="cursor-pointer hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                setIsCopy(true);
                console.log(isCopy);
              }}
            >
              basirnaji007@gmail.com
            </a>
            {isCopy && (
              <FaRegCopy
                className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
                size={20}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
