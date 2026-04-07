"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { CloudDownload, Send, MessageCircle } from "lucide-react";
import profilePic from "@/assets/IMG_2279_1.jpg";
import TextUiAnimation from "@/ui/textUiAnimation";

const GithubIcon = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.6-5-2.5-7-3"/></svg>;
const TwitterIcon = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const InstagramIcon = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;


export default function ProfileCard() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`w-full max-w-115 lg:w-115 ${darkMode ? "bg-[#1a1a1a]" : "bg-white"} rounded-sm overflow-hidden flex flex-col shadow-2xl  transition-colors duration-300 shrink-0 lg:shrink-0`}>
      {/* Cover Image Area */}
      <div className="relative h-79 w-full bg-linear-to-br from-orange-400 to-purple-800">
        {/* <div className="absolute inset-0 bg-black/20" /> */}
        {/* Semicircle cutout effect for avatar */}
        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-36 h-17 ${darkMode ? "bg-[#1a1a1a]" : "bg-white"} rounded-t-full`} />
      </div>

      {/* Avatar Container */}
      <div className="relative flex justify-center -mt-16">
        <div className={`relative w-32 h-32 rounded-full border-4 ${darkMode ? "border-[#1a1a1a]" : "border-[#ccc]"} overflow-hidden z-10`}>
          <Image
            src={profilePic}
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        {/* Glow effect behind avatar */}
        <div className="absolute top-0 w-28 h-28 rounded-full bg-[#F6B846] blur-2xl opacity-30 z-0"></div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-4 px-6 text-center z-10">
        <h2 className="text-3xl font-bold text-white tracking-wide">Abdullah Sheikh</h2>
        <p className="text-gray-400 text-sm mt-2 ml-16">
          <TextUiAnimation />
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8 text-gray-400">
        <button className={`${darkMode ? "hover:text-white" : "hover:text-gray-800"} transition-colors`}>
          <InstagramIcon size={28} />
        </button>
        <button className={`${darkMode ? "hover:text-white" : "hover:text-gray-800"} transition-colors`}>
          <TwitterIcon size={28} />
        </button>
        <button className={`${darkMode ? "hover:text-white" : "hover:text-gray-800"} transition-colors`}>
          <GithubIcon size={28} />
        </button>
        <button className={`${darkMode ? "hover:text-white" : "hover:text-gray-800"} transition-colors`}>
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Spacer */}
      <div className="grow min-h-10"></div>

      {/* Bottom Buttons */}
      <div className={`flex border-t ${darkMode ? "gradient-border" : "gradient-border-white"}`}>
        <button className={`flex-1 flex items-center justify-center gap-2 py-5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#252525] ${darkMode ? "text-gray-300" : "text-gray-600"} transition-all`}>
          DOWNLOAD CV <CloudDownload size={16} />
        </button>
        <div className={`w-0.5 ${darkMode ? "bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a]" : "bg-linear-to-b from-[#ccc] to-white"}`}></div>
        <button className={`flex-1 flex items-center justify-center gap-2 py-5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#252525] ${darkMode ? "text-gray-300" : "text-gray-600"} transition-all`}>
          CONTACT ME <Send size={16} />
        </button>
      </div>
    </div>
  );
}