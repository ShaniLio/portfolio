import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-xl max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth = {[true]}
            spy = {[true]}
            offset={-200}
            className="cursor-pointer w-[60] h-[60] flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth = {[true]}
            spy = {[true]}
            className="cursor-pointer w-[60] h-[60] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          <Link
            to="service"
            activeClass="active"
            
            smooth = {[true]}
            spy = {[true]}
            className="cursor-pointer w-[60] h-[60] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth = {[true]}
            spy = {[true]}
            className="cursor-pointer w-[60] h-[60] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth = {[true]}
            spy = {[true]}
          
            className="cursor-pointer w-[60] h-[60]  flex justify-center items-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
