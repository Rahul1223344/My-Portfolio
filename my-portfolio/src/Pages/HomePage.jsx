import "./HomePage.css";
import R_logo from "./../assets/images/R_logo.svg?react";
import Sun_svg from "./../assets/icons/Sun_svg.svg?react";
import Moon_svg from "./../assets/icons/Moon_svg.svg?react";
import Phone_svg from "./../assets/icons/Phone_svg.svg?react";
import Whatsapp_svg from "./../assets/icons/Whatsapp_svg.svg?react";
import Arrow_svg from "./../assets/icons/Arrow_svg.svg?react";
import Linkedin_svg from "./../assets/icons/linkedin_svg.svg?react";
import X_svg from "./../assets/icons/X_svg.svg?react";
import InstagramIcon from "./../assets/icons/InstagramIcon.svg?react";
import Email_svg from "./../assets/icons/Email_svg.svg?react";
import R_svg from "./../assets/images/Light_R_Logo_Image.svg?react";
import { NavLink } from "react-router";
import LatestWorks from "../components/LatestWorks";
const HomePage = () => {
  const scrollToWorks = () => {
  document.getElementById("latest-works")?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <>
      <section className="flex flex-col justify-between h-screen">
        <header className="z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
          <R_logo />
          <div className="flex gap-4 pointer-events-auto">
            <Sun_svg />
            <Moon_svg />
            {/* give your phone number */}
            <a href="tel:8468961606">
              <Phone_svg />
            </a>
            {/* give your phone number */}
            <a
              href="https://wa.me/8468961606?text=Hi, How are you?"
              target="_blank"
            >
              <Whatsapp_svg />
            </a>
          </div>
        </header>
        <div className="absolute inset-0 hidden md:block" id="wrapper-canvas" />
        <div className="flex -mt-10 relative">
          <div className="w-full px-4 max-w-screen-xl mx-auto">
            <R_svg />
            <div className="relative ml-4 md:ml-12">
              <h1 className="pointer-events-none text-4xl md:text-[64px] font-['Spartan'] mr-12">
                Rahul Das {/* Amit Kumar  */}
              </h1>
              <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">
                React Developer
              </p>
              <NavLink to="/about">
                <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
                  About Me
                  <Arrow_svg className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100" />
                </button>
              </NavLink>
            </div>
          </div>
          <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
            <li>
              {/* give Your linkedin profile url */}
              <a
                href="https://www.linkedin.com/in/rahul-raj-91aa212a7/"
                target="_blank"
              >
                <Linkedin_svg />
              </a>
            </li>
            <li>
              {/* add your x or twitter account */}
              <a href="http://x.com/RahulDas_Coder" target="_blank">
                <X_svg />
              </a>
            </li>
            <li>
              {/* add your x or instagram account */}
              <a href="https://www.instagram.com/yodha_st/" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              {/* add your x or gmail account */}
              <a href="mailto:rahul7488071@gmail.com" target="_blank">
                <Email_svg />
              </a>
            </li>
          </ul>
        </div>
        <div className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
          <button onClick={scrollToWorks} className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20">
            Latest Works
            <Arrow_svg className="absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100" />
          </button>
        </div>
      </section>
      <LatestWorks/>
    </>
  );
};

export default HomePage;
