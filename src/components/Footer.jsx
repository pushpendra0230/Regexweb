import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const FooterUp = () => {
  return (
    <div className="bg-gray-500 md:flex">
      <div className="px-8 pt-10 md:w-[12rem] lg:w-[22rem] ">
        <img
          src="https://www.regexsoftware.com/wp-content/uploads/2020/02/whatsapp-dp-1-e1590747617997.png"
          className="w-[14rem] bg-white "
        />
        <p className="text-base py-5 font-normal text-white">
          Our team is made up of highly dedicated professionals from many
          technological fields. Our main objective is to bridge the knowledge
          gap between business and academics via our training services.
        </p>
      </div>

      <div className="text-white space-y-1 pl-5 py-5   md:w-[15rem]">
        <h1 className="text-2xl font-semibold border-b-2 border-dotted mr-[10rem] md:mr-0">
          Quick Links
        </h1>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/about">About US</NavLink>
        </p>
        <p>
          <NavLink to="/training-services">Training Services</NavLink>
        </p>
        <p>
          <NavLink to="/programs">Programs</NavLink>
        </p>
        <p>
          <NavLink to="/events">Events</NavLink>
        </p>
        <p>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </p>
        <p>
          <NavLink to="/software-services">Software Services</NavLink>
        </p>
        <p>
          <NavLink to="/placed-student">Our Placement</NavLink>
        </p>
        <p>
          <NavLink>Blog</NavLink>
        </p>
      </div>

      <div className="text-white space-y-1 pl-5 pt-10">
        <h1 className="text-2xl font-semibold border-b-2 border-dotted  ">
          What We Offer
        </h1>
        <div className="md:flex gap-3">
          <div className="">
            <p>
              <NavLink>Web Applications</NavLink>
            </p>
            <p>
              <NavLink>Data Analytics</NavLink>
            </p>
            <p>
              <NavLink>Digital Marketing</NavLink>
            </p>
            <p>
              <NavLink>SEO,SEM</NavLink>
            </p>
            <p>
              <NavLink>Android/iOS Applications</NavLink>
            </p>
            <p>
              <NavLink>Machine learning & IoT based Products</NavLink>
            </p>
          </div>
          <br></br>
          <div>
            <p>
              <NavLink>Training Services Us</NavLink>
            </p>
            <p>
              <NavLink>Competitive Programming</NavLink>
            </p>
            <p>
              <NavLink>Machine learning & Deep Learning</NavLink>
            </p>
            <p>
              <NavLink>BigData tools</NavLink>
            </p>
            <p>
              <NavLink>Cloud Computing (AWS)</NavLink>
            </p>
            <p>
              <NavLink>Python-Django</NavLink>
            </p>
            <p>
              <NavLink>App Development with Flutter</NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className=" text-white py-9 px-15 md:w-[12rem] xl:w-[23rem]">
        <h1 className="text-2xl font-semibold border-b-2 border-dotted ">
          Address
        </h1>
        <div className="flex flex-col items-center my-5">
          <FaLocationDot className="text-3xl" />
          <p className="text-center ">
            B-35, 2nd floor next to vasantbahar colony, Gopalpura bypass, Jaipur
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt />
          <p className="text-center">+91-9602880219,+91-7852071653</p>
        </div>
        <div className="flex flex-col items-center my-5">
          <IoMdMail />
          <p className="text-center">info@regexsoftware.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;