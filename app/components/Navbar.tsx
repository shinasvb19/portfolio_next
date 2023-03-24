import React from "react";
import { SocialIcon } from "react-social-icons";
const Navbar = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto">
      <div className="flex flex-row items-center">
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
      </div>
      <div className="flex flex-row items-center text-grey-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex text-grey-400 text-sm uppercase">
          Get in touch
        </p>
      </div>
    </header>
  );
};

export default Navbar;
