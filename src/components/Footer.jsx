// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

// const FooterUp = () => {
//   return (
//     <div className="bg-gray-500 md:flex">
//       <div className="px-8 pt-10 md:w-[12rem] lg:w-[22rem] ">
//         <img
//           src="https://www.regexsoftware.com/wp-content/uploads/2020/02/whatsapp-dp-1-e1590747617997.png"
//           className="w-[14rem] bg-white "
//         />
//         <p className="text-base py-5 font-normal text-white">
//           Our team is made up of highly dedicated professionals from many
//           technological fields. Our main objective is to bridge the knowledge
//           gap between business and academics via our training services.
//         </p>
//       </div>

//       <div className="text-white space-y-1 pl-5 py-5   md:w-[15rem]">
//         <h1 className="text-2xl font-semibold border-b-2 border-dotted mr-[10rem] md:mr-0">
//           Quick Links
//         </h1>
//         <p>
//           <NavLink to="/">Home</NavLink>
//         </p>
//         <p>
//           <NavLink to="/about">About US</NavLink>
//         </p>
//         <p>
//           <NavLink to="/training-services">Training Services</NavLink>
//         </p>
//         <p>
//           <NavLink to="/programs">Programs</NavLink>
//         </p>
//         <p>
//           <NavLink to="/events">Events</NavLink>
//         </p>
//         <p>
//           <NavLink to="/contact-us">Contact Us</NavLink>
//         </p>
//         <p>
//           <NavLink to="/software-services">Software Services</NavLink>
//         </p>
//         <p>
//           <NavLink to="/placed-student">Our Placement</NavLink>
//         </p>
//         <p>
//           <NavLink>Blog</NavLink>
//         </p>
//       </div>

//       <div className="text-white space-y-1 pl-5 pt-10">
//         <h1 className="text-2xl font-semibold border-b-2 border-dotted  ">
//           What We Offer
//         </h1>
//         <div className="md:flex gap-3">
//           <div className="">
//             <p>
//               <NavLink>Web Applications</NavLink>
//             </p>
//             <p>
//               <NavLink>Data Analytics</NavLink>
//             </p>
//             <p>
//               <NavLink>Digital Marketing</NavLink>
//             </p>
//             <p>
//               <NavLink>SEO,SEM</NavLink>
//             </p>
//             <p>
//               <NavLink>Android/iOS Applications</NavLink>
//             </p>
//             <p>
//               <NavLink>Machine learning & IoT based Products</NavLink>
//             </p>
//           </div>
//           <br></br>
//           <div>
//             <p>
//               <NavLink>Training Services Us</NavLink>
//             </p>
//             <p>
//               <NavLink>Competitive Programming</NavLink>
//             </p>
//             <p>
//               <NavLink>Machine learning & Deep Learning</NavLink>
//             </p>
//             <p>
//               <NavLink>BigData tools</NavLink>
//             </p>
//             <p>
//               <NavLink>Cloud Computing (AWS)</NavLink>
//             </p>
//             <p>
//               <NavLink>Python-Django</NavLink>
//             </p>
//             <p>
//               <NavLink>App Development with Flutter</NavLink>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className=" text-white py-9 px-15 md:w-[12rem] xl:w-[23rem]">
//         <h1 className="text-2xl font-semibold border-b-2 border-dotted ">
//           Address
//         </h1>
//         <div className="flex flex-col items-center my-5">
//           <FaLocationDot className="text-3xl" />
//           <p className="text-center ">
//             B-35, 2nd floor next to vasantbahar colony, Gopalpura bypass, Jaipur
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaPhoneAlt />
//           <p className="text-center">+91-9602880219,+91-7852071653</p>
//         </div>
//         <div className="flex flex-col items-center my-5">
//           <IoMdMail />
//           <p className="text-center">info@regexsoftware.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterUp;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const FooterUp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // Simulating loading effect
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-500 md:flex animate-pulse">
        <div className="px-8 pt-10 md:w-[12rem] lg:w-[22rem]">
          <div className="w-[14rem] h-[8rem] bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded my-5 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded my-5 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded my-5 w-3/4"></div>
        </div>

        <div className="text-white space-y-1 pl-5 py-5 md:w-[15rem]">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
          ))}
        </div>

        <div className="text-white space-y-1 pl-5 pt-10">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="md:flex gap-60">
            <div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
            <br />
            <div>
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white py-9 px-15 md:w-[12rem] xl:w-[23rem]">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="flex flex-col items-center my-5">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          </div>
          <div className="flex flex-col items-center my-5">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-500 md:flex">
      <div className="px-8 pt-10 md:w-[12rem] lg:w-[22rem]">
        <img
          src="https://www.regexsoftware.com/wp-content/uploads/2020/02/whatsapp-dp-1-e1590747617997.png"
          className="w-[14rem] bg-white"
        />
        <p className="text-base py-5 font-normal text-white">
          Our team is made up of highly dedicated professionals from many
          technological fields. Our main objective is to bridge the knowledge
          gap between business and academics via our training services.
        </p>
      </div>

      <div className="text-white space-y-1 pl-5 py-5 md:w-[15rem]">
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
        <h1 className="text-2xl font-semibold border-b-2 border-dotted">
          What We Offer
        </h1>
        <div className="md:flex gap-3">
          <div>
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
              <NavLink>SEO, SEM</NavLink>
            </p>
            <p>
              <NavLink>Android/iOS Applications</NavLink>
            </p>
            <p>
              <NavLink>Machine learning & IoT based Products</NavLink>
            </p>
          </div>
          <br />
          <div>
            <p>
              <NavLink>Training Services</NavLink>
            </p>
            <p>
              <NavLink>Competitive Programming</NavLink>
            </p>
            <p>
              <NavLink>Machine Learning & Deep Learning</NavLink>
            </p>
            <p>
              <NavLink>Big Data tools</NavLink>
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

      <div className="text-white py-9 px-15 md:w-[12rem] xl:w-[23rem]">
        <h1 className="text-2xl font-semibold border-b-2 border-dotted">
          Address
        </h1>
        <div className="flex flex-col items-center my-5">
          <FaLocationDot className="text-3xl" />
          <p className="text-center">
            B-35, 2nd floor next to vasantbahar colony, Gopalpura bypass, Jaipur
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt />
          <p className="text-center">+91-9602880219, +91-7852071653</p>
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
