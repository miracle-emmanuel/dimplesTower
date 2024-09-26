import React from "react";
import Navbar2 from "../src/components/Navbar2";
import roomimg from "../src/assets/img/image11.png";
import line from "../src/assets/img/line.png";
import Footer from "../src/components/Footer";

const Reservation = () => {
  return (
    <div>
      <Navbar2 />
      <body className="mt-5 mx-10 mb-5">
        <h1 className="text-center text-5xl font-semibold mb-5 bg-neutral-800">
          Room Reservation
        </h1>
        <div className="p-10 grid sm:flex gap-5 bg-[#F0ECD9]">
          <img src={roomimg} alt=""  className=" mr-auto ml-auto" />
          <div className="grid">
            <h1 className=" text-center text-2xl font-medium">Dimple Basic </h1>
            <h1 className=" text-2xl font-medium">Overview</h1>
            <p>
              Today's youth face climate change, inequality, and division. Yet,
              they hold the key to transformation. Empowering them through
              education, skills, and resources unlocks their potential. Young
              people lead climate action, advocate for justice, and leverage
              technology for good.
            </p>
            <h3 className="text-2xl font-medium">Facilities include:</h3>
            <ul>
              <li> A single room </li>
              <li>Full air conditioning</li>
              <li>24/7 Wi-Fi</li>
              <li>Fire alarm</li>
              <li>24 hours CCTV Security</li>
            </ul>
            <a
              href=""
              className=" text-right bg-[#E5C26B] w-fit h-fit p-2 rounded-3xl"
            >
              Book Now
            </a>
          </div>
        </div>
        <img src={line} alt="" className="w-1/2 ml-auto mr-auto p-5" />
        <div className="p-10 grid sm:flex gap-5 bg-[#F0ECD9]">
          <img src={roomimg} alt=""  className=""  />
          <div className="grid">
            <h1 className=" text-center text-2xl font-medium">Dimple Premium </h1>
            <h1 className=" text-2xl font-medium">Overview</h1>
            <p>
              Today's youth face climate change, inequality, and division. Yet,
              they hold the key to transformation. Empowering them through
              education, skills, and resources unlocks their potential. Young
              people lead climate action, advocate for justice, and leverage
              technology for good.
            </p>
            <h3 className="text-2xl font-medium">Facilities include:</h3>
            <ul>
              <li> A single room </li>
              <li>Full air conditioning</li>
              <li>24/7 Wi-Fi</li>
              <li>Fire alarm</li>
              <li>24 hours CCTV Security</li>
            </ul>
            <a
              href=""
              className=" text-right bg-[#E5C26B] w-fit h-fit p-2 rounded-3xl"
            >
              Book Now
            </a>
          </div>
        </div>
        <img src={line} alt="" className="w-1/2 ml-auto mr-auto p-5" />
        <div className="p-10 grid sm:flex gap-5 bg-[#F0ECD9]">
          <img src={roomimg} alt="" className="" />
          <div className="grid">
            <h1 className=" text-center text-2xl font-medium">Dimple Luxury </h1>
            <h1 className=" text-2xl font-medium">Overview</h1>
            <p>
              Today's youth face climate change, inequality, and division. Yet,
              they hold the key to transformation. Empowering them through
              education, skills, and resources unlocks their potential. Young
              people lead climate action, advocate for justice, and leverage
              technology for good.
            </p>
            <h3 className="text-2xl font-medium">Facilities include:</h3>
            <ul>
              <li> A single room </li>
              <li>Full air conditioning</li>
              <li>24/7 Wi-Fi</li>
              <li>Fire alarm</li>
              <li>24 hours CCTV Security</li>
            </ul>
            <a
              href=""
              className=" text-right bg-[#E5C26B] w-fit h-fit p-2 rounded-3xl"
            >
              Book Now
            </a>
          </div>
        </div>
      </body>
      <Footer/>
    </div>
  );
};

export default Reservation;
