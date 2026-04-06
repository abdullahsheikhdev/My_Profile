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
import Loding from "@/components/loding";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-[1200px] w-full items-center md:items-stretch">
        
        {/* Sidebar - Horizontal on top in mobile, vertical on left in desktop */}
        <div className="w-full md:w-auto shrink-0 md:pt-4">
           <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row flex-1 bg-[#161616] bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-xl w-full p-6 lg:p-0 mt-4 md:mt-0 relative overflow-visible">
          
          {/* Profile Card slightly overflowing on desktop, stacked normally on mobile */}
          <div className="flex justify-center lg:justify-start z-10 lg:-translate-x-4 lg:-my-4 shrink-0">
             <ProfileCard />
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full mt-8 lg:mt-0 overflow-y-auto">
            {activeTab === "ABOUT" && <AboutContent />}
            {activeTab === "RESUME" && <ResumeContent />}
            {activeTab === "WORKS" && <WorksContent />}
            {activeTab === "BLOG" && <BlogContent />}
            {activeTab === "CONTACT" && <ContactContent />}
            {activeTab === "PRODUCTS" && <ProductsContent />}
          </div>

        </div>
      </div>
    </main>
  );
}