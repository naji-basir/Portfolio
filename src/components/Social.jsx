import { Mail, MapPin, Phone } from "lucide-react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

function Social() {
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
          <a href="">basirnaji007@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Social;
