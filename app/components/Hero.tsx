"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi The name is Shinas Vb", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col  items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://res.cloudinary.com/dlabwmroq/image/upload/v1679644216/shinas_pic_mnhwzq.jpg"
      />
      <h2 className="text-gray-500 pb-2 tracking-[15px] uppercase">
        software engineer
      </h2>
      <div className="inline-flex">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </div>
    </div>
  );
};

export default Hero;
