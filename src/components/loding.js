import Image from "next/image";

export default function Loding() {
  return (
    <div className="bg-[#161616] h-screen flex justify-center items-center">
      <div className="border-2 border-solid border-[#f6b846] h-12 w-12 animate-spin"></div>
    </div>
  );
}