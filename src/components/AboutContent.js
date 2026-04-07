import { Monitor, Server } from "lucide-react";
import { useSelector } from "react-redux";

export default function AboutContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`flex-1 max-w-175 ${darkMode ? "text-gray-400" : "text-gray-600"} p-6 sm:p-10 flex flex-col min-h-full`}>
      {/* About Me Section */}
      <div className="mb-12">
        <h2 className={`text-[1.35rem] font-bold ${darkMode ? "text-gray-100" : "text-black"} mb-6 relative inline-block`}>
          {/* Glowing dot effect behind first letter */}
          <span className="absolute -left-[5px] top-[4px] w-[22px] h-[22px] bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-white">A</span>bout Me
        </h2>
        
        <p className={`text-[15px] leading-[1.8] mb-8 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Hello! I&apos;m Donald Wellborn.<br />
          <span className="text-gray-400 font-normal">
            Back-end &amp; Frond-end developer from UK, London. I have rich experience in
            wordpress, also I am good at Magento. I love to talk with you about our unique.
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-[13px] font-mono">
          <div className="flex">
            <span className="w-24 text-gray-400 font-medium tracking-wide">AGE . . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>45</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">RESIDENCE . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>UK</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">FREELANCE . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>Available</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">ADDRESS . . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>London, UK</span>
          </div>
        </div>
      </div>

      {/* My Services Section */}
      <div>
        <h2 className={`text-[1.35rem] font-bold ${darkMode ? "text-gray-100" : "text-black"} mb-8 relative inline-block`}>
          <span className="absolute -left-[5px] top-[4px] w-[22px] h-[22px] bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-white">M</span>y Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front-end Card */}
          <div className={`flex flex-col md:border-r ${darkMode ? "md:border-[#2a2a2a]" : "md:border-gray-100"} md:pr-10`}>
            <div className="w-14 h-14 rounded-full border-2 border-[#F6B846] flex items-center justify-center mb-5 text-[#F6B846]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" width="24" height="24"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
            </div>
            <h3 className={`${darkMode ? "text-gray-100" : "text-black"} font-bold text-[17px] mb-3`}>Front-end</h3>
            <p className="text-[14px] leading-[1.8] text-gray-400">
              Modern and mobile-ready website that will help you reach all of your
              marketing.
            </p>
          </div>

          {/* Back-end Card */}
          <div className="flex flex-col md:pl-4">
            <div className="w-14 h-14 rounded-full border-2 border-[#F6B846] flex items-center justify-center mb-5 text-[#F6B846]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" width="30" height="30"><path d="M208.1 190.5c-54.9 0-79.2 26-79.2 46.9 0 24 29.5 45.4 78 45.4 51.5 0 81.3-30.8 81.3-48 0-14.8-15.4-44.3-80.1-44.3zm193.3 0c-54.9 0-79.2 26-79.2 46.9 0 24 29.5 45.4 78 45.4 51.5 0 81.3-30.8 81.3-48 0-14.8-15.4-44.3-80.1-44.3zM640 256c0 102.5-125.1 189.6-291 191.7V512l-77.2-56.1C135.5 448 0 361.6 0 256.3 0 148 143.3 64 320 64c176.7 0 320 84 320 192zM192 334v-27.1c-22.1 10.9-46.5 17-72.2 17-57.9 0-106.8-24.6-106.8-67.6 0-48 57.3-73 113.6-73 24 0 45.4 3.7 61 8V146.9h40.3L208.5 334H192zm173.3 0v-86.4l-25.1 86.4h-35.1l7.8-181h41l-24 81h24l9.1-81h40.3l-20.1 181h-17.9zm193.3 0v-27.1c-22.1 10.9-46.5 17-72.2 17-57.9 0-106.8-24.6-106.8-67.6 0-48 57.3-73 113.6-73 24 0 45.4 3.7 61 8V146.9h40.3L574.6 334h-16z"/></svg>
            </div>
            <h3 className={`${darkMode ? "text-gray-100" : "text-black"} font-bold text-[17px] mb-3`}>Back-End</h3>
            <p className="text-[14px] leading-[1.8] text-gray-400">
              UI/UX focus on the user, frontend focus on the settings of the user,
              and backend focus on the data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

