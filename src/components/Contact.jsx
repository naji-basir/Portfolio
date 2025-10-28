import { useState } from "react";
import { FaMapLocationDot, FaRegCopy } from "react-icons/fa6";
import { IoMailUnread, IoPhonePortraitOutline } from "react-icons/io5";
import { TiPhone } from "react-icons/ti";

function Contact() {
  const [showCopyEmailIcon, setShowCopyEmailIcon] = useState(false);
  const [showCopyPhoneIcon, setShowCopyPhoneIcon] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "basirnaji007@gmail.com";
  const phone = +93729048876;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mx-2 mt-2 pl-6 py-3 pr-1 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <h2 className="text-2xl mt-2 font-medium text-indigo-500">Contact Me</h2>

      <div className="py-4 space-y-3">
        {/* Location */}
        <div className="flex items-center gap-5">
          <FaMapLocationDot size={24} />
          <h2>Kabul, Afghanistan</h2>
        </div>

        {/* Email */}
        <div
          className="flex items-center gap-5"
          onMouseEnter={() => setShowCopyEmailIcon(true)}
          onMouseLeave={() => {
            setShowCopyEmailIcon(false);
            setEmailCopied(false);
          }}
        >
          <IoMailUnread size={24} />
          <div className="flex gap-2">
            <a
              href={`mailto:${email}`}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
            {/* Copy Icon (appears on hover) */}
            {showCopyEmailIcon && (
              <button
                onClick={() => {
                  handleCopy(email);
                  setEmailCopied(true);
                  setTimeout(() => {
                    setEmailCopied(false);
                  }, 1500);
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-transform duration-300 hover:scale-110"
              >
                <FaRegCopy size={18} />
              </button>
            )}

            {/* Copied email */}
            {emailCopied && (
              <span className="text-sm font-medium ml-1">Copied!</span>
            )}
          </div>
        </div>

        {/* //Phone Number */}
        <div
          className="flex items-center gap-5"
          onMouseEnter={() => setShowCopyPhoneIcon(true)}
          onMouseLeave={() => {
            setShowCopyPhoneIcon(false);
            setPhoneCopied(false);
          }}
        >
          <TiPhone size={24} />
          <div className="flex gap-2">
            <h2>{phone}</h2>

            {showCopyPhoneIcon && (
              <button
                onClick={() => {
                  handleCopy(phone);
                  setPhoneCopied(true);
                  setTimeout(() => {
                    setPhoneCopied(false);
                  }, 1500);
                }}
              >
                <FaRegCopy size={18} className="hover:text-blue-500" />
              </button>
            )}

            {/* Copied Phone Number */}
            {phoneCopied && (
              <span className="text-sm font-medium ml-1">Copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
