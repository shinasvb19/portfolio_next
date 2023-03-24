"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/shinasvb19"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/shinas-vb-88a307251/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@shinasvb115"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/shinas_vb/"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex text-gray-400 text-sm uppercase">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Navbar;
