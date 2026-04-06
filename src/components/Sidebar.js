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

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { icon: User, label: "ABOUT", id: "ABOUT" },
    { icon: FileText, label: "RESUME", id: "RESUME" },
    { icon: Eye, label: "WORKS", id: "WORKS" },
    { icon: BookOpen, label: "BLOG", id: "BLOG" },
    { icon: Send, label: "CONTACT", id: "CONTACT" },
    { icon: LayoutList, label: "PRODUCTS", id: "PRODUCTS" },
  ];

  return (
    <div className="flex flex-row md:flex-col w-full md:w-20 bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl h-auto md:h-fit shrink-0">
      {/* Top section */}
      <div className="hidden md:flex flex-col items-center py-4 gap-4 border-b border-[#2a2a2a] bg-[#1a1a1a]">
        <button className="text-gray-400 hover:text-white transition-colors duration-200">
          <Menu size={20} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors duration-200">
          <Sun size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-row md:flex-col flex-1 justify-between md:justify-start overflow-x-auto md:overflow-visible py-2 md:py-4 px-2 md:px-0">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={index}
              onClick={() => setActiveTab?.(item.id)}
              className={`flex flex-col items-center justify-center p-2 md:p-4 gap-1 min-w-[4rem] transition-all duration-200 rounded-lg md:rounded-none ${
                isActive
                  ? "text-[#F6B846] bg-[#23201a] md:bg-transparent"
                  : "text-gray-500 hover:text-[#F6B846] hover:bg-[#1a1a1a] md:hover:bg-transparent"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[9px] md:text-[10px] font-bold tracking-wider mt-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
