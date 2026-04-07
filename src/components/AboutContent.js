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
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">A</span>bout Me
        </h2>
        
        <p className={`text-[15px] leading-[1.8] border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} pt-5 mb-8 font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Hello! I&apos;m Abdullah Sheikh.<br />
          <span className="text-gray-400 font-normal">
            I’m a full-stack developer specializing in building fast, scalable, and user-focused web applications. I bridge the gap between design and functionality to deliver seamless digital experiences.
            I develop scalable web applications with clean architecture and smooth user experience.
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-[13px] font-mono">
          <div className="flex">
            <span className="w-24 text-gray-400 font-medium tracking-wide">AGE . . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>24</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">RESIDENCE . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>Dhaka</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">FREELANCE . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>Available</span>
          </div>
          <div className="flex">
            <span className="w-28 text-gray-400 font-medium tracking-wide">ADDRESS . . . .</span>
            <span className={`ml-3 ${darkMode ? "text-gray-100" : "text-black"}`}>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* My Services Section */}
      <div>
        <h2 className={`text-[1.35rem] font-bold ${darkMode ? "text-gray-100" : "text-black"} mb-8 relative inline-block`}>
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">M</span>y Services
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"}`}>
          {/* Front-end Card */}
          <div className={`flex pt-5 flex-col md:border-r-2 ${darkMode ? "md:border-[#2a2a2a]" : "md:border-gray-100"} md:pr-10`}>
            <div className="w-14 h-14 rounded-full border-2 border-[#F6B846] flex items-center justify-center mb-5 text-[#F6B846]">
               <Monitor size={20} />
            </div>
            <h3 className={`${darkMode ? "text-gray-100" : "text-black"} font-bold text-[17px] mb-3`}>Front-end</h3>
            <p className="text-[14px] leading-[1.8] text-gray-400">
              Modern and mobile-ready website that will help you reach all of your
              marketing.
            </p>
          </div>

          {/* Back-end Card */}
          <div className="flex pt-5 flex-col md:pl-4">
            <div className="w-14 h-14 rounded-full border-2 border-[#F6B846] flex items-center justify-center mb-5 text-[#F6B846]">
               <Server size={20} />
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

