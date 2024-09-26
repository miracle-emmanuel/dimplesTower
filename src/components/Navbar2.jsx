import React, { useState } from "react";
import logo from "../assets/img/logosvg.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// import navimg from "../assets/img/navbar2";

const Navbar2 = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div className="relative h-[500px]">
      <div className="absolute mr-auto ml-auto w-full">
        <div className="flex justify-between">  
          <div>
            <Link to="/">
              <img src={logo} alt="" className="w-[80px] ml-5" />
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
            to="/reservation"
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
            className="hover:text-white  bg-[#E5C26B] p-3 rounded-full  relative bottom-3"
          >
            {" "}
            Invest!
          </Link>
        </nav>

          <div className="flex md:hidden" onClick={handleChange}>
            <div className="p-2 mt-9 mr-5">
              <AiOutlineMenu size={22} />
            </div>
          </div>
        </div>
        <div
          className={`${
            menu ? " translate-x-0" : "-translate-x-full"
          } md:hiden flex flex-col absolute left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
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
      <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className="h-[30rem] w-full"/>
    </div>
  );
};

export default Navbar2;
