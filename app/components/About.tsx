"use client";
import React from "react";

import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="pt-16 h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/dlabwmroq/image/upload/v1679824126/shinasMain_pic_lpz6bs.jpg"
        className=" w-44 h-44 rounded-full  mb-0 flex-shrink-0 object-cover md:rounded-lg md:w-64 h-95 xl:w-[400px] xl:h-[500px] xl:mt-24"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little </span>
          background
        </h4>
        <p className="text-xs md:text-lg">
          Highly skilled self taught MERN stack developer with a strong
          understanding of front-end and back-end development. Proficient in
          using the MERN stack (MongoDB, Express, React, and Node.js) to create
          full-stack web applications. Passionate about staying up-to-date on
          industry best practices and learning new technologies. Demonstrated
          ability to work effectively on project teams and deliver high-quality,
          reliable code.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
