"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
type Sliderr = {
  map(arg0: (s: string, i: number) => React.JSX.Element): React.ReactNode;
  length: number;
  // imageUrl: string;
};

export default function ImageSlider({ slides }: { slides: Sliderr }  ) {
  const [current, setCurrent] = useState(0);

  // Automatically change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds interval
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s: string, i: number) => (
          <Image  width={150} height={100} src={s} key={i} alt={`Slide ${i}`} />
        ))}
      </div>
      {/* Navigation buttons removed */}
      <div className="lines w-full bottom-0 py-3 flex justify-center gap-3">
        {slides.map((s: string, i: number) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-md h-1 w-16 cursor-pointer ${
              i === current ? "bg-gray-300" : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
