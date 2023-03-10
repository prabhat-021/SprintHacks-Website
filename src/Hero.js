import React from "react";
import Main from "./images/MainImage(1).png";
import shape from "./images/Shape.png";
import path268 from "./images/path268.png";
import path26 from "./images/path268(2).png";
import vector3 from "./images/Vector(3).png";
import vector4 from "./images/Vector(4).png";
import group from "./images/Group5.png";
const Hero = () => {
  return (
    <div className="">
      <div className="px-40 py-5 flex hero_main">
        <div className="">
          <img src={path268} className="pl-64 pt-8 " />
          <img src={group} className="main" />
          {/* <img src={shape} alt="" srcset="" className="z-0" /> */}
          <img src={path268} className="pl-4 w-12  pt-8" />
        </div>
        <div>
          <img src={path26} className="pl-[650px] star_right" />
          <div className="flex-col text-right pt-52 hero pl-0 space-y-4">
            <h1 className="main text-white text-7xl hero_text whitespace-nowrap ab">
              SprintHacks 2023
            </h1>
            <h1 className="navbar text-white hero_text_2 text-6xl">
              9TH FEB - 10TH FEB'23
            </h1>
            <button className="bg-white rounded dev px-4 py-4">
              <div className="flex space-x-4">
                <div>
                  <img src={vector3} />
                  {/* <img src={vector4} /> */}
                </div>
                <h1 className="text-xl hero_text_3 font-mono pt-1 text-gray-800 ">
                  Apply with Devfolio
                </h1>
              </div>
            </button>
          </div>
          <img src={path26} className="pt-44 pl-72 star_right_2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
