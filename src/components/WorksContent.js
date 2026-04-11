import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Application",
    category: "Web Design",
    image: "/project/Screenshot 2026-04-11 211844.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Development",
    image: "/project/Screenshot 2026-04-11 211844.png",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    category: "Software",
    image: "/project/Screenshot 2026-04-11 211844.png",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "UI/UX Design",
    image: "/project/Screenshot 2026-04-11 211844.png",
  },
];

const ProjectCard = ({ project, darkMode }) => (
  <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] cursor-pointer shadow-lg">
    <div className="relative aspect-video w-full overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-[#F6B846] text-xs font-medium uppercase tracking-widest">{project.category}</p>
      </div>
    </div>
  </div>
);

export default function WorksContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`flex-1 max-w-full ${darkMode ? "text-gray-400" : "text-gray-600"} p-6 sm:p-10 flex flex-col min-h-full`}>
      {/* Header Section */}
      <div className="mb-12">
        <h2 className={`text-[1.35rem] font-bold ${darkMode ? "text-gray-100" : "text-black"} mb-1 relative inline-block`}>
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">W</span>orks
        </h2>
        <div className="w-12 h-[2px] bg-[#F6B846] mt-2 mb-8"></div>
      </div>

      {/* Projects Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} pt-8`}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
