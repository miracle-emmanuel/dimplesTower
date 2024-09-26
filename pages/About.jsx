import React from "react";
import Navbar2 from "../src/components/Navbar2";
import Footer from "../src/components/Footer";
import roomimg from "../src/assets/img/image11.png";
import team from "../src/assets/img/team.jpg";
import line from "../src/assets/img/line.png";

const About = () => {
  return (
    <div>
      <Navbar2 />

      <div className="mx-10 mt-5">
      <h1 className="text-center text-5xl font-semibold mb-5 bg-neutral-800">
          About Us
        </h1>
        <div className=" grid sm:flex gap-10">
          <div className="m-auto ml-5 mr-5 ">
            <h1 className=" text-2xl font-medium mb-5  transition-transform duration-300 text-[#E5C26B]">
              {" "}
              – About Dimple Towers
            </h1>
            <p className="">
              Dimple Tower is a full-service real estate organization with a
              strong presence in major cities, excelling in property
              development, advisory services, facility and project management.
              We specialize in acquiring, developing, and investing in
              sustainable housing properties across Nigeria’s urban landscapes.
              With 300+ successfully developed housing units and over 800+
              currently in progress, we’ve established ourselves as a prominent
              real estate company and leading property developer in this dynamic
              market. Our focus is on longevity and sustainability, with the
              ultimate goal of delivering exceptional value to our clients with
              every investment.
            </p>
          </div>
          <img src={roomimg} alt="" />
        </div>
      <img src={line} alt="" className="w-1/2 ml-auto mr-auto p-5" />

        {/* Vision and mission statements */}
        <div className="grid gap-5 w-3/4 m-auto">
          <div>
          <h1 className=" text-2xl text-center font-medium mb-5 transition-transform duration-300 text-[#E5C26B]">VISION</h1>
            <p>
              To be the most sought-after, and respectable Development Group in
              Nigeria, renowned globally for delivering high quality and
              exclusive sustainable properties for improved quality of life.
            </p>
          </div>
          <div>
          <h1 className=" text-2xl text-center  font-medium mb-5 transition-transform duration-300 text-[#E5C26B]">MISSION</h1>
            <p>
              To surpass client expectations, delivering superior value and
              return on every investment. We’ll do this by continuously learning
              and observing industry trends; matching customers’ needs and
              lifestyle choices with our range of exclusive offerings.
            </p>
          </div>
        </div>
        <img src={line} alt="" className="w-1/2 ml-auto mr-auto p-5" />

        {/* team info */}
        <div>
          <h1 className=" text-2xl font-medium mb-5 text-center transition-transform duration-300 text-[#E5C26B] mt-5">
            {" "}
            – Meet the team
          </h1>
          <div className="flex flex-wrap ml-auto mr-auto gap-5">
            <div className=" bg-[#F0ECD9] rounded-3xl">
              <img src={team} alt="" className="m-auto w-1/2 mt-5" />
              <div className="text-center grid gap-5 mt-3">
                <h1 className="text-[#E5C26B]">NAME</h1>
                <h3 className="text-[#E5C26B]">POSITION</h3>
                <a href="" className="bg-[#E5C26B] w-fit ml-auto mr-auto p-2 mb-5">
                  READMORE...
                </a>
              </div>
            </div>
            <div className=" bg-[#F0ECD9] rounded-3xl">
              <img src={team} alt="" className="m-auto w-1/2 mt-5" />
              <div className="text-center grid gap-5 mt-3">
                <h1 className="text-[#E5C26B]">NAME</h1>
                <h3 className="text-[#E5C26B]">POSITION</h3>
                <a href="" className="bg-[#E5C26B] w-fit ml-auto mr-auto p-2 mb-5">
                  READMORE...
                </a>
              </div>
            </div>
            <div className=" bg-[#F0ECD9] rounded-3xl">
              <img src={team} alt="" className="m-auto w-1/2 mt-5" />
              <div className="text-center grid gap-5 mt-3">
                <h1 className="text-[#E5C26B]">NAME</h1>
                <h3 className="text-[#E5C26B]">POSITION</h3>
                <a href="" className="bg-[#E5C26B] w-fit ml-auto mr-auto p-2 mb-5">
                  READMORE...
                </a>
              </div>
            </div>
            <div className=" bg-[#F0ECD9] rounded-3xl">
              <img src={team} alt="" className="m-auto w-1/2 mt-5" />
              <div className="text-center grid gap-5 mt-3">
                <h1 className="text-[#E5C26B]">NAME</h1>
                <h3 className="text-[#E5C26B]">POSITION</h3>
                <a href="" className="bg-[#E5C26B] w-fit ml-auto mr-auto p-2 mb-5">
                  READMORE...
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <img src={line} alt="" className="w-1/2 ml-auto mr-auto p-5" />

      <Footer />
    </div>
  );
};

export default About;
