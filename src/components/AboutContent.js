import { Monitor, Server } from "lucide-react";
import { useSelector } from "react-redux";

export default function AboutContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`flex-1 max-w-175 ${darkMode ? "text-gray-400" : "text-gray-600"} p-2 sm:p-6 lg:p-10 flex flex-col min-h-full`}>
      {/* About Me Section */}
      <div className="mb-12">
        <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} mb-6 relative inline-block`}>
          {/* Glowing dot effect behind first letter */}
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">A</span>bout Me
        </h2>
        
        <p className="text-sm leading-relaxed mb-8">
          Hello! I&apos;m Abdullah Sheikh. <br />
          I’m a full-stack developer specializing in building fast, scalable, and user-focused web applications. I bridge the gap between design and functionality to deliver seamless digital experiences.
          I develop scalable web applications with clean architecture and smooth user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
          <div className="flex text-xs">
            <span className="w-24 text-gray-500 font-bold tracking-wider">AGE . . . .</span>
            <span className={darkMode ? "text-white" : "text-black"}>24</span>
          </div>
          <div className="flex text-xs">
            <span className="w-28 text-gray-500 font-bold tracking-wider">RESIDENCE . . .</span>
            <span className={darkMode ? "text-white" : "text-black"}>Dhaka</span>
          </div>
          <div className="flex text-xs">
            <span className="w-24 text-gray-500 font-bold tracking-wider">FREELANCE . . </span>
            <span className={darkMode ? "text-white" : "text-black"}>Available</span>
          </div>
          <div className="flex text-xs">
            <span className="w-28 text-gray-500 font-bold tracking-wider">ADDRESS . . . .</span>
            <span className={darkMode ? "text-white" : "text-black"}>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* My Services Section */}
      <div>
        <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} mb-8 relative inline-block`}>
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full  opacity-40 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">M</span>y Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front-end Card */}
          <div className="flex flex-col border-r border-[#2a2a2a] pr-8">
            <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center mb-4 text-[#F6B846]">
               <Monitor size={20} />
            </div>
            <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold mb-2`}>Front-end</h3>
            <p className="text-xs leading-relaxed ">
              Modern and mobile-ready website that will help you reach all of your
              marketing.
            </p>
          </div>

          {/* Back-end Card */}
          <div className="flex flex-col pl-4">
            <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center mb-4 text-[#F6B846]">
               <Server size={20} />
            </div>
            <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold mb-2`}>Back-End</h3>
            <p className="text-xs leading-relaxed">
              UI/UX focus on the user, frontend focus on the settings of the user,
              and backend focus on the data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

