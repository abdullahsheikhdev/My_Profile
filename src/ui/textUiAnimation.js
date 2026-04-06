import React from "react";

export default function TextUiAnimation() {
  return (
    <span className="inline-flex items-center text-left w-60 justify-start">
      <span className="whitespace-nowrap">I'm a&nbsp;</span>
      <span className="inline-flex flex-col h-5 overflow-hidden align-bottom text-white">
        <span className="animate-[slideText_12s_steps(4)_infinite] flex flex-col items-start leading-5">
          <span className="h-5 flex items-center relative overflow-hidden">
            <span className="animate-[typingWidth_3s_linear_infinite] whitespace-nowrap overflow-hidden border-r-2 border-transparent">Front-end Developer </span>
          </span>
          <span className="h-5 flex items-center relative overflow-hidden">
            <span className="animate-[typingWidth_3s_linear_infinite] whitespace-nowrap overflow-hidden border-r-2 border-transparent">Freelancer </span>
          </span>
          <span className="h-5 flex items-center relative overflow-hidden">
            <span className="animate-[typingWidth_3s_linear_infinite] whitespace-nowrap overflow-hidden border-r-2 border-transparent">Programmer </span>
          </span>
          <span className="h-5 flex items-center relative overflow-hidden">
            <span className="animate-[typingWidth_3s_linear_infinite] whitespace-nowrap overflow-hidden border-r-2 border-transparent">Back-end Developer </span>
          </span>
        </span>
      </span>
    </span>
  );
}
