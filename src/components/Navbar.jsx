import React, { useState } from "react";
import logo from "../assets/img/logosvg.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="flex flex-row justify-between md-px-32 bg-black text-white ">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-[80px] ml-16" />
          </Link>
        </div>
        <nav className=" hidden md:flex gap-5 font-medium p-1 cursor-pointer mt-9 mr-20">
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#E5C26B]"
          >
            About Us
          </Link>
  
          <Link
            to="Reservation"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-[#E5C26B]"
          >
            {" "}
            Reservation
          </Link>
          <Link
            to="invest"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-white  bg-[#E5C26B] p-3 rounded-full  relative bottom-3"
          >
            {" "}
            Invest!
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2 mt-8 mr-10">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? " translate-x-0" : "-translate-x-full"
        } md:hiden flex flex-col absolute bg-black text-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="/about"
          spy={true}
          smooth={true}
          duration={300}
          className="hover:text-[#E5C26B]"
        >
          {" "}
          About US
        </Link>
        <Link
          to="/Reservation"
          spy={true}
          smooth={true}
          duration={300}
          className="hover:text-[#E5C26B]"
        >
          {" "}
          Reservation
        </Link>
        <Link
          to="/invest"
          spy={true}
          smooth={true}
          duration={300}
          className="hover:text-white bg-[#E5C26B] p-3 rounded-full  relative bottom-3"
        >
          {" "}
          Invest!
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
