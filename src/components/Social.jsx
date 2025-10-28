import { useState } from "react";
import { FaMapLocationDot, FaRegCopy } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

function Social() {
  const [showCopyIcon, setShowCopyIcon] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "basirnaji007@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mx-2 mt-2 p-4 bg-indigo-200 dark:bg-gray-700 rounded-2xl">
      <h2 className="text-2xl mt-2 font-semibold">Reach Me</h2>

      <div className="py-4 space-y-4">
        {/* Location */}
        <div className="flex items-center gap-3">
          <FaMapLocationDot size={24} />
          <h2>Kabul, Afghanistan</h2>
        </div>

        {/* Email */}
        <div
          className="flex items-center gap-3"
          onMouseEnter={() => setShowCopyIcon(true)}
          onMouseLeave={() => setShowCopyIcon(false)}
        >
          <IoMailUnread size={24} />
          <a
            href={`mailto:${email}`}
            className="cursor-pointer hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>

          {/* Copy Icon (appears on hover) */}
          {showCopyIcon && (
            <button
              onClick={handleCopy}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-transform duration-300 hover:scale-110"
            >
              <FaRegCopy size={18} />
            </button>
          )}

          {/* Copied message */}
          {copied && <span className="text-sm font-medium ml-1">Copied!</span>}
        </div>
      </div>
    </div>
  );
}

export default Social;
