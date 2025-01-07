// type rcfe ---> Shortcut of Header
import React from "react";
import Image from "next/image";
import logo from "@/public/logo..png"

export default function Header() {
  return (
   <div className="fixed z-10 w-full">
     <nav className="bg-sky-900 text-slate-100 py-4">
      <ul className="flex space-x-10 justify-end pr-16 items-center">
        <h1 className="font-bold text-xl text-sky-200">
          Tution Free Education Program on Latest Technologies
        </h1>
        <li className="cursor-pointer p-2">Home</li>
        <li className="cursor-pointer p-2">Apply</li>
        <li className="cursor-pointer p-2">Jobs</li>
        <li className="cursor-pointer p-2">Result</li>
        <li className="cursor-pointer p-2">Courses</li>
      </ul>
    </nav>
        <Image src={logo} alt="" height={70} width={70} className="absolute top-5 left-14"></Image>
   </div>
  );
}
