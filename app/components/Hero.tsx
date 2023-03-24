"use client";
import Link from "next/link";
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
      <div className="z-20">
        <h2 className="text-gray-500 pb-2 tracking-[15px] uppercase">
          software engineer
        </h2>
        <h1 className="inline-flex text-4xl lg:text-5xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
