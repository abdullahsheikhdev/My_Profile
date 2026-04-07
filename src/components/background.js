"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

export default function Background() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`fixed inset-0 -z-10 ${darkMode ? "bg-[#161616]" : "bg-white"} h-screen flex justify-center items-center transition-colors duration-500 bg-transition`}>
      <div className="hidden sm:flex h-screen lg:container lg:mx-auto">
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-1 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-px ml-10 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />


        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-1 ml-40 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_2s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_2s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_2s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_2s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-0.5 ml-5 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_6s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_6s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_6s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_6s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>

        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-0.5 ml-28 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_7s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_7s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_7s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_7s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-1 ml-36 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_3s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_3s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_3s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_3s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-0.5 ml-14 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_5s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_5s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_5s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_5s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-0.5 ml-40 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>

        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-0.5 ml-48 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_1s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_1s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_1s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_1s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-px ml-28 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} h-screen w-1 ml-5 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"}  h-screen w-px ml-12 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-5 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-10 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-3 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-16 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"}  h-screen w-0.75 ml-12 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>

        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"}  hidden xl:flex h-screen w-1 ml-40 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />



          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_4s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"}  hidden xl:flex h-screen w-0.75 ml-8 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-5 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-10 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-3 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-16 
            animate-[slideUp_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"}  hidden xl:flex h-screen w-px ml-5 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-5 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-10 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 3 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-3 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:2.7s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 4 */}
          <div
            className="absolute top-0 bg-[#F6B846] w-full h-16 
            animate-[slideDown_8s_linear_infinite] 
            [animation-delay:4.2s] 
            [animation-fill-mode:both]"
          />
        </div>
        <div className={`${darkMode ? "bg-[#211e18]" : "bg-[#ccc]"} hidden xl:flex  h-screen w-1 ml-40 overflow-hidden relative`}>
          {/* Bar 1 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-5 
            animate-[slideUp_2s_linear_infinite] 
            [animation-delay:0s] 
            [animation-fill-mode:both]"
          />

          {/* Bar 2 */}
          <div
            className="absolute bottom-0 bg-[#F6B846] w-full h-10 
            animate-[slideUp_2s_linear_infinite] 
            [animation-delay:1.3s] 
            [animation-fill-mode:both]"
          />

        </div>
      </div>
    </div>
  );
}
