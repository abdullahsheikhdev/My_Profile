export default function ResumeContent() {
  return (
    <div className="flex-1 max-w-[700px] text-gray-400 p-6 sm:p-10 flex flex-col justify-center h-full min-h-[400px]">
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">R</span>esume
        </h2>
        
        <p className="text-sm leading-relaxed mb-8">
          The Resume section is currently under construction. Please check back later!
        </p>
      </div>
    </div>
  );
}
