export default function BlogContent() {
  return (
    <div className="flex-1 max-w-[700px] text-gray-400 p-6 sm:p-10 flex flex-col min-h-full min-h-[400px]">
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6 relative inline-block">
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-40 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">B</span>log
        </h2>
        
        <p className="text-sm leading-relaxed mb-8">
          The Blog section is currently under construction. Please check back later!
        </p>
        <p className="text-sm leading-relaxed mb-8">
          Hello! I&apos;m Abdullah Sheikh. <br />
          I’m a full-stack developer specializing in building fast, scalable, and user-focused web applications. I bridge the gap between design and functionality to deliver seamless digital experiences.
          I develop scalable web applications with clean architecture and smooth user experience.
        </p>
      </div>
    </div>
  );
}
