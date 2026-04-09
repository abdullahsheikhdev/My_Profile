import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    date: "April 28, 2020",
    title: "By spite about do of allow",
    excerpt: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere...",
    image: "/blog/blog-1.png",
  },
  {
    id: 2,
    date: "April 28, 2020",
    title: "A Song And Dance Act",
    excerpt: "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere...",
    image: "/blog/blog-2.png",
  },
];

const BlogCard = ({ post, darkMode }) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    
    <div className="mb-4">
      <span className="text-[11px] font-medium text-[#F6B846] border border-[#F6B846] px-3 py-1 rounded-sm uppercase tracking-wider">
        {post.date}
      </span>
    </div>

    <h3 className={`text-lg font-bold text-center mb-3 transition-colors duration-300 cursor-pointer group-hover:text-[#F6B846] ${darkMode ? "text-white" : "text-gray-900"}`}>
      {post.title}
    </h3>

    <p className={`text-sm text-center leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
      {post.excerpt}
    </p>
  </div>
);

export default function BlogContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`flex-1 max-w-[850px] ${darkMode ? "text-gray-400" : "text-gray-600"} p-6 sm:p-10 flex flex-col min-h-full`}>
      {/* Header Section */}
      <div className="mb-12">
        <h2 className={`text-[1.35rem] font-bold ${darkMode ? "text-gray-100" : "text-black"} mb-1 relative inline-block`}>
          <span className="absolute -left-2 top-1.5 w-8 h-8 bg-linear-to-br from-[#F6B846] to-[#373126] rounded-full opacity-60 -z-10"></span>
          <span className="relative z-10 text-[#F6B846]">B</span>log
        </h2>
        <div className={`w-12 h-[2px] bg-[#F6B846] mt-2 mb-8`}></div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
