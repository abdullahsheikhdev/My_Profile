"use client";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

export default function ContactContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oxt8upb",
        "template_ekrny6d",
        e.target,
        "QgXjFQqn2sucgbOaR",
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message."),
      );

    e.target.reset();
  };

  return (
    <div className="flex-1 max-w-full text-gray-400 p-6 sm:p-10 flex flex-col min-h-full pb-10">
      {/* Title */}
      <h2
        className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} relative inline-block mb-6`}
      >
        <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
        <span className="relative z-10 text-[#F6B846]">G</span>et in Touch
      </h2>

      {/* Main Container with top border */}
      <div
        className={`border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} w-full pt-8 flex flex-col gap-10`}
      >
        {/* Map Section */}
        <div className="w-full h-62.5 sm:h-75 relative rounded-md overflow-hidden bg-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d284.4172979685502!2d90.35016412455566!3d23.749027940781684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6f3dd6d3c9%3A0x59be94e644a13bbf!2sPlot-19%20Rd%209%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1775481954276!5m2!1sen!2sbd"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info Grid */}
        <div className="grid mt-2 grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 w-full text-sm font-mono tracking-wide text-gray-300">
          <div className="flex items-center justify-between w-full">
            <span className="whitespace-nowrap">ADDRESS:</span>
            <div className="flex-1 mx-2 sm:mx-4 border-b-2 border-dotted border-gray-600 mt-1 min-w-4"></div>
            <span className="text-[#a4a4a4] whitespace-nowrap text-right">
              Bangladesh, Dhaka
            </span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="whitespace-nowrap">EMAIL:</span>
            <div className="flex-1 mx-2 sm:mx-4 border-b-2 border-dotted border-gray-600 mt-1 min-w-4"></div>
            <span className="text-[#a4a4a4] whitespace-nowrap text-right truncate max-w-37.5 sm:max-w-none">
              rk.abdullahh.dev@gmail.com
            </span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="whitespace-nowrap">PHONE:</span>
            <div className="flex-1 mx-2 sm:mx-4 border-b-2 border-dotted border-gray-600 mt-1 min-w-4"></div>
            <span className="text-[#a4a4a4] whitespace-nowrap text-right">
              +880 1843 904218
            </span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="whitespace-nowrap">FREELANCE:</span>
            <div className="flex-1 mx-2 sm:mx-4 border-b-2 border-dotted border-gray-600 mt-1 min-w-4"></div>
            <span className="text-[#a4a4a4] whitespace-nowrap text-right">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form Section Title */}
      <h2
        className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} relative inline-block mb-6 mt-16`}
      >
        <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
        <span className="relative z-10 text-[#F6B846]">C</span>ontact Form
      </h2>

      {/* Contact Form Container with top border */}
      <form onSubmit={sendMessage}>
        <div
          className={`border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} w-full pt-8 flex flex-col gap-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`w-full bg-transparent border-b ${darkMode ? "border-gray-600 focus:border-[#F6B846] text-gray-300" : "border-gray-300 focus:border-[#F6B846] text-gray-700"} pb-3 text-[15px] focus:outline-none transition-colors placeholder:text-gray-500`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`w-full bg-transparent border-b ${darkMode ? "border-gray-600 focus:border-[#F6B846] text-gray-300" : "border-gray-300 focus:border-[#F6B846] text-gray-700"} pb-3 text-[15px] focus:outline-none transition-colors placeholder:text-gray-500`}
            />
          </div>

          <div className="w-full mt-2">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="1"
              className={`w-full bg-transparent border-b ${darkMode ? "border-gray-600 focus:border-[#F6B846] text-gray-300" : "border-gray-300 focus:border-[#F6B846] text-gray-700"} pb-3 text-[15px] focus:outline-none transition-colors placeholder:text-gray-500 resize-y min-h-10`}
            ></textarea>
          </div>

          <div className="mt-2 text-left mb-4">
            <button
              type="submit"
              className={`flex items-center text-[13px] font-bold transition-all uppercase tracking-widest hover:text-[#F6B846] ${darkMode ? "text-white" : "text-black"}`}
            >
              SEND MESSAGE
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
