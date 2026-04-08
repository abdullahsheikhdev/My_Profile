import { Briefcase, GraduationCap, Code2, List, Check } from "lucide-react";
import { motion } from "motion/react";
import { useSelector } from "react-redux";

export default function ResumeContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const experiences = [
    {
      date: "2026 - Present",
      title: "Front-end Developer",
      company: "Working on E-Commerce application",
      logo: "Next.js",
      description: "I work and build a full functional E-commerce application using Next.js and backend using prisma also I use SQL for database.",
      linkText: "RECOMMENDATION >",
      active: true,
    },
    // {
    //   date: "2026",
    //   title: "Web Developer",
    //   company: "Upwork Inc.",
    //   logo: "Upwork",
    //   description: "Monitored technical aspects of the front-end delivery for projects.",
    //   linkText: "RECOMMENDATION >",
    //   active: false,
    // },
  ];

  const education = [
    {
      date: "2024 - 2027",
      title: "Bangladesh University",
      location: "Dhaka, Bangladesh",
      description: "Bachelor of Science in Computer Science and Engineering",
      linkText: "CERTIFICATE >",
      active: true,
    },
    {
      date: "2020 - 2021",
      title: "HSC",
      location: "Khulna, Bangladesh",
      description: "Built a strong foundation in science",
      linkText: "CERTIFICATE >",
      active: false,
    },
    {
      date: "2018 - 2019",
      title: "ssc",
      location: "Khulna, Bangladesh",
      description: "Focused on learning , discipline and consistency",
      linkText: "CERTIFICATE >",
      active: false,
    }
  ];

  return (
    <div className={`flex-1 max-w-full ${darkMode ? "text-gray-400" : "text-gray-600"} p-6 sm:p-10 flex flex-col min-h-full`}>
      {/* Title */}
      <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} mb-10 relative inline-block`}>
        <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
        <span className="relative z-10 text-[#F6B846]">R</span>esume
      </h2>

      <div className={`border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} pt-5 grid grid-cols-1 xl:grid-cols-2 gap-12`}>
        {/* Experience Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center text-[#F6B846]">
                <Briefcase size={20} />
             </div>
             <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold tracking-widest text-sm`}>EXPERIENCE</h3>
          </div>

          <div className={`relative border-l ${darkMode ? "border-[#333]" : "border-gray-200"} ml-6 pl-8 flex flex-col gap-12`}>
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div 
                  className={`absolute -left-9.25 top-1.5 w-3 h-3 rounded-full border-2 ${
                    exp.active ? "bg-[#F6B846] border-[#F6B846] shadow-[0_0_10px_#F6B846]" : darkMode ? "bg-[#222] border-[#444]" : "bg-white border-gray-300"
                  }`}
                ></div>
                
                {/* Date Badge */}
                <div className={`inline-block px-3 py-0.5 rounded-sm border text-[10px] font-bold mb-4 ${
                  exp.active ? "border-[#F6B846] text-[#F6B846]" : darkMode ? "border-[#444] text-[#888]" : "border-gray-300 text-gray-500"
                }`}>
                  {exp.date}
                </div>

                <div className="flex justify-between items-start mb-2">
                   <div>
                      <h4 className={`font-bold text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}>{exp.title}</h4>
                      <p className="text-gray-500 text-xs">{exp.company}</p>
                   </div>
                   {exp.logo && (
                     <span className={`${darkMode ? "text-zinc-700" : "text-gray-200"} font-bold text-xl select-none opacity-50 tracking-tighter italic`}>
                       {exp.logo}
                     </span>
                   )}
                </div>

                <p className="text-xs leading-relaxed text-gray-500 mb-6">
                  {exp.description}
                </p>

                <button className="text-[#F6B846] text-[10px] font-bold tracking-widest hover:underline text-left cursor-pointer transition-all">
                  {exp.linkText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center text-[#F6B846]">
                <GraduationCap size={20} />
             </div>
             <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold tracking-widest text-sm`}>EDUCATION</h3>
          </div>

          <div className={`relative border-l ${darkMode ? "border-[#333]" : "border-gray-200"} ml-6 pl-8 flex flex-col gap-12`}>
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div 
                  className={`absolute -left-9.25 top-1.5 w-3 h-3 rounded-full border-2 ${
                    edu.active ? "bg-[#F6B846] border-[#F6B846] shadow-[0_0_10px_#F6B846]" : darkMode ? "bg-[#222] border-[#444]" : "bg-white border-gray-300"
                  }`}
                ></div>
                
                {/* Date Badge */}
                <div className={`inline-block px-3 py-0.5 rounded-sm border text-[10px] font-bold mb-4 ${
                  edu.active ? "border-[#F6B846] text-[#F6B846]" : darkMode ? "border-[#444] text-[#888]" : "border-gray-300 text-gray-500"
                }`}>
                  {edu.date}
                </div>

                <h4 className={`font-bold text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}>{edu.title}</h4>
                <p className="text-gray-500 text-xs mb-4">{edu.location}</p>

                <p className="text-xs leading-relaxed text-gray-500 mb-6">
                  {edu.description}
                </p>

                <button className="text-[#F6B846] text-[10px] font-bold tracking-widest hover:underline text-left cursor-pointer transition-all">
                  {edu.linkText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} mb-10 mt-20 relative inline-block`}>
        <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
        <span className="relative z-10 text-[#F6B846]">S</span>kills
      </h2>

      <div className={`border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} pt-5 grid grid-cols-1 xl:grid-cols-2 gap-12`}>
        {/* Coding Skills */}
        <div className={`flex flex-col md:border-r ${darkMode ? "md:border-[#333]" : "md:border-gray-200"} md:pr-12`}>
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center text-[#F6B846]">
                <Code2 size={20} />
             </div>
             <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold tracking-widest text-sm`}>CODING</h3>
          </div>

          <div className="grid grid-cols-2 gap-8 ml-4">
             {[
               { name: "JavaScript", percent: 90 },
               { name: "MYSQL", percent: 55 },
               { name: "Next.js", percent: 85 },
               { name: "HTML / CSS", percent: 95 },
             ].map((skill, index) => (
               <div key={index} className="flex flex-col items-center gap-4">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className={darkMode ? "text-[#2a2a2a]" : "text-gray-100"}
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 45}
                        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.percent / 100) }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                        strokeLinecap="round"
                        className="text-[#F6B846]"
                      />
                    </svg>
                    <span className={`absolute font-bold text-sm ${darkMode ? "text-white" : "text-black"}`}>
                      {skill.percent}%
                    </span>
                  </div>
                  <span className={`${darkMode ? "text-gray-300" : "text-gray-600"} font-bold text-[10px] tracking-widest text-center whitespace-pre-line leading-tight`}>
                    {skill.name}
                  </span>
               </div>
             ))}
          </div>
        </div>

        {/* Knowledge Skills */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-10">
             <div className="w-12 h-12 rounded-full border border-[#F6B846] flex items-center justify-center text-[#F6B846]">
                <List size={20} />
             </div>
             <h3 className={`${darkMode ? "text-white" : "text-black"} font-bold tracking-widest text-sm`}>KNOWLEDGE</h3>
          </div>

          <ul className="flex flex-col gap-5 ml-6">
            {[
              "Website hosting",
              "WordPress Development",
              "Hosting Installation",
              "SEO Optimize",
              "Responsive and mobile-ready",
              "Advertising services",
              "HTML, CSS, jQuery",
              "Search engine marketing",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-xs group">
                <div className="mt-0.5 text-[#F6B846]">
                   <Check size={16} strokeWidth={3} />
                </div>
                <span className={`${darkMode ? "text-gray-400" : "text-gray-600"} group-hover:text-[#F6B846] transition-colors cursor-default`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

