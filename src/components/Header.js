import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo2.jpg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
// import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  },[]);

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20 border-b-2" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 translate-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">
          <span>Apollos</span>
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav bg={bg}/>
        </div>

        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
