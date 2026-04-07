"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import AboutContent from "@/components/AboutContent";
import ResumeContent from "@/components/ResumeContent";
import WorksContent from "@/components/WorksContent";
import BlogContent from "@/components/BlogContent";
import ContactContent from "@/components/ContactContent";
import ProductsContent from "@/components/ProductsContent";
import { useSelector } from "react-redux";
import Loding from "@/components/loding";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [isLoading, setIsLoading] = useState(true);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loding />;
  }

  return (
    <main className={`min-h-screen flex items-start lg:items-center justify-center p-4 md:p-8 transition-colors duration-300 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 max-w-315 w-full items-center md:items-stretch">
        
        {/* Sidebar - Horizontal on top in mobile, vertical on left in desktop */}
        <div className="w-full md:w-auto shrink-0 md:pt-4">
           <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area */}
        <div className={`flex flex-col lg:flex-row flex-1 h-auto lg:h-160 ${darkMode ? "bg-[#222222] bg-opacity-70" : "bg-white bg-opacity-90"} backdrop-blur-sm rounded-sm shadow-xl w-full p-6 lg:p-0 mt-4 md:mt-0 relative overflow-visible transition-colors duration-300`}>
          
          {/* Profile Card slightly overflowing on desktop, stacked normally on mobile */}
          <div className="flex justify-center lg:justify-start z-10 lg:-translate-x-4 lg:-my-4 shrink-0">
            <ProfileCard />
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0 w-full mt-8 lg:mt-0 overflow-y-auto custom-scrollbar overflow-x-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full min-h-full"
              >
                {activeTab === "ABOUT" && <AboutContent />}
                {activeTab === "RESUME" && <ResumeContent />}
                {activeTab === "WORKS" && <WorksContent />}
                {activeTab === "BLOG" && <BlogContent />}
                {activeTab === "CONTACT" && <ContactContent />}
                {activeTab === "PRODUCTS" && <ProductsContent />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  );
}