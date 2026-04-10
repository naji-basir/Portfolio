import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaTelegram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { PiInstagramLogoFill } from "react-icons/pi";
import profile from "../images/profile.jpg";
import bg from "../images/bg.jpg";

function Profile() {
  return (
    <div className="mx-2 p-2 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <img src={bg} alt="backgound" className=" rounded-xl" />
      <img
        src={profile}
        alt="naji"
        className="w-48 rounded-full mt-[-100px] ml-6"
      />
      <h2 className="text-3xl mt-8 ml-4 text-indigo-500 font-medium">
        Basir Naji
      </h2>
      <h3 className="text-[16px] ml-4 mt-2 mb-1">
        Front-end Developer & UI/UX Designer
      </h3>

      <div className=" flex gap-5 px-4 py-3">
        {/* GitHub */}
        <a
          href="https://github.com/naji-basir"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub
            size={25}
            className="hover:text-indigo-500 transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/basir-naji-is"
          target="_blank"
          rel="noopener noreferrer" // for secutity
          title="LinkedIn"
        >
          <LuLinkedin
            size={25}
            className="hover:text-sky-600 transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/mb_bas_ir"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <PiInstagramLogoFill
            size={25}
            className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/naji_basir"
          target="_blank"
          rel="noopener noreferrer"
          title="X"
        >
          <IoLogoTwitter
            size={25}
            className="hover:text-sky-500 transition-transform duration-300 hover:scale-110"
          />
        </a>
        {/* facebook */}
        <a
          href="https://www.facebook.com/naji.basir.mb"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebook
            size={25}
            className="hover:text-teal-500 transition-transform duration-300 hover:scale-110"
          />
        </a>
        {/* Telegram */}
        <a
          href="https://t.me/naji_basir"
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
        >
          <FaTelegram
            size={25}
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/93793578237"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <IoLogoWhatsapp
            size={25}
            className="hover:text-green-500 transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
}

export default Profile;
