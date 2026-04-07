import { useSelector } from "react-redux";

export default function ContactContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="flex-1 max-w-full text-gray-400 p-6 sm:p-10 flex flex-col min-h-full">
      {/* Title */}
      <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"} relative inline-block mb-6`}>
        <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
        <span className="relative z-10 text-[#F6B846]">G</span>et in Touch
      </h2>

      {/* Main Container with top border */}
      <div className={`border-t ${darkMode ? "gradient-border-content" : "gradient-border-content-white"} pt-8 flex flex-col gap-10 w-full`}>
        
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
        <div className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 w-full text-sm font-mono tracking-wide text-gray-300">
          <div className="flex items-center justify-between">
            <span>ADDRESS:</span>
            <div className="flex-1 mx-4 border-b-2 border-dotted border-gray-600 mt-1"></div>
            <span className="text-[#a4a4a4]">Bangladesh, Dhaka</span>
          </div>

          <div className="flex items-center justify-between">
            <span>EMAIL:</span>
            <div className="flex-1 mx-4 border-b-2 border-dotted border-gray-600 mt-1"></div>
            <span className="text-[#a4a4a4]">rk.abdullahh.dev@gmail.com</span>
          </div>

          <div className="flex items-center justify-between">
            <span>PHONE:</span>
            <div className="flex-1 mx-4 border-b-2 border-dotted border-gray-600 mt-1"></div>
            <span className="text-[#a4a4a4]">+880 1843 904218</span>
          </div>

          <div className="flex items-center justify-between">
            <span>FREELANCE:</span>
            <div className="flex-1 mx-4 border-b-2 border-dotted border-gray-600 mt-1"></div>
            <span className="text-[#a4a4a4]">Available</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
