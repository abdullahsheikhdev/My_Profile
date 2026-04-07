"use client";

import {
  Menu,
  Sun,
  User,
  FileText,
  Eye,
  BookOpen,
  Send,
  LayoutList,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";

export default function Sidebar({ activeTab, setActiveTab }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const navItems = [
    { icon: User, label: "ABOUT", id: "ABOUT" },
    { icon: FileText, label: "RESUME", id: "RESUME" },
    { icon: Eye, label: "WORKS", id: "WORKS" },
    { icon: BookOpen, label: "BLOG", id: "BLOG" },
    { icon: Send, label: "CONTACT", id: "CONTACT" },
    { icon: LayoutList, label: "PRODUCTS", id: "PRODUCTS" },
  ];

  return (
    <div className={`flex flex-row md:flex-col w-full md:w-20 ${darkMode ? "bg-[#161616]/90" : "bg-white/90"} backdrop-blur-md border ${darkMode ? "border-[#2a2a2a]" : "border-gray-200"} rounded-sm overflow-hidden shadow-2xl h-auto md:h-fit shrink-0 transition-all duration-300`}>
      {/* Top section */}
      <div className={`hidden md:flex flex-col items-center py-4 gap-4 border-b ${darkMode ? "border-[#2a2a2a]" : "border-gray-200"} ${darkMode ? "bg-[#1a1a1a]/50" : "bg-gray-50/50"} transition-colors duration-300`}>
        <button className="text-gray-400 hover:text-[#F6B846] transition-colors duration-200 cursor-pointer">
          <Menu size={18} />
        </button>
        <button 
          onClick={() => dispatch(toggleTheme())}
          className={`${darkMode ? "text-gray-400" : "text-[#F6B846]"} hover:text-[#F6B846] transition-colors duration-200 cursor-pointer`}
        >
          <Sun size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-row md:flex-col flex-1 justify-between md:justify-start overflow-x-auto md:overflow-visible py-2 md:py-2 px-2 md:px-0 scrollbar-hide">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={index}
              onClick={() => setActiveTab?.(item.id)}
              className={`flex flex-col items-center justify-center p-1 md:p-4 gap-0.5 md:gap-1 min-w-14 sm:min-w-16 md:min-w-0 transition-all duration-300 relative group cursor-pointer ${
                isActive
                  ? "text-[#F6B846]"
                  : "text-gray-500 hover:text-[#F6B846]"
              }`}
            >
              {/* Active Indicator (Desktop) */}
              {isActive && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-[#F6B846] shadow-[0_0_10px_#F6B846]"></div>
              )}
              
              <item.icon size={18} className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              <span className={`text-[8px] md:text-[9px] font-bold tracking-widest mt-1 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

