import React from "react";
import { motion } from "framer-motion";
function BackgroundCircles() {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute  border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 " />
      <div className="absolute  border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 " />
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 w-[650px] h-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full opacity-20 w-[800px] h-[800px] mt-52 animate-pulse" />
    </div>
  );
}

export default BackgroundCircles;
