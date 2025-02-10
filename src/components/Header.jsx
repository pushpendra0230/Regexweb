// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Contact Information (Top Bar) */}
//       <div className="bg-blue-900 text-white flex justify-between items-center px-4 py-2 text-sm">
//         <div>
//           <span className="mr-4">+91-9602880219</span>
//           <span className="mr-4">+91-8104464971</span>
//           <span className="mr-4">+91-7852071653</span>
//           <span>info@regexsoftware.com</span>
//         </div>
//         <div className="flex space-x-4">
//           <a
//             href="https://www.linkedin.com/company/regexsoftware/posts/?feedView=all"
//             className="hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://www.instagram.com/regexsoftware/"
//             className="hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://web.telegram.org/a/#-1001169206547"
//             className="hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Telegram
//           </a>
//           <a
//             href="https://www.facebook.com/regexsoftwares"
//             className="hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Facebook
//           </a>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div className="w-full shadow-md flex items-center pl-8 py-4 justify-between lg:justify-start">
//         {/* Logo Section */}
//         <div className="w-[160px] md:w-[90px] lg:w-[160px] mr-15">
//           <NavLink to="/">
//             <img
//               src="https://www.regexsoftware.com/wp-content/uploads/2020/05/noname-1.png"
//               className="object-cover"
//               alt="Logo"
//             />
//           </NavLink>
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-xl"
//         >
//           <GiHamburgerMenu />
//         </button>

//         {/* Navigation Links */}
//         <div
//           className={`lg:block ${
//             isOpen ? "block" : "hidden"
//           } text-blue-900 text-lg font-semibold absolute lg:relative top-14 right-5 lg:top-0 lg:bg-transparent p-5 lg:p-0 z-50`}
//         >
//           <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8">
//             <li>
//               <NavLink to="/" className="hover:underline">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Allabout" className="hover:underline">
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Allsoftware" className="hover:underline">
//                 Software Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Alltraining" className="hover:underline">
//                 Training Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Placed-student" className="hover:underline">
//                 Our Placement
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Programs" className="hover:underline">
//                 Programs
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Events" className="hover:underline">
//                 Events
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Pricing" className="hover:underline">
//                 Pricing
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/Contact-us" className="hover:underline">
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

// old code withaout shimmer effect
// ==============================================================================================\
// new code with shimmer effect

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // Simulating loading effect
  }, []);

  return (
    <div>
      {/* Contact Information (Top Bar) */}
      <div className="bg-blue-900 text-white flex justify-between items-center px-4 py-2 text-sm">
        {isLoading ? (
          <div className="h-4 w-full bg-gray-400 animate-pulse"></div>
        ) : (
          <div>
            <span className="mr-4">+91-9602880219</span>
            <span className="mr-4">+91-8104464971</span>
            <span className="mr-4">+91-7852071653</span>
            <span>info@regexsoftware.com</span>
          </div>
        )}
        <div className="flex space-x-4">
          {isLoading ? (
            <div className="h-4 w-32 bg-gray-400 animate-pulse"></div>
          ) : (
            <>
              <a
                href="https://www.linkedin.com/company/regexsoftware/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/regexsoftware/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://web.telegram.org/a/#-1001169206547"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://www.facebook.com/regexsoftwares"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </>
          )}
        </div>
      </div>

      {/* Navbar Section */}
      <div className="w-full shadow-md flex items-center pl-8 py-4 justify-between lg:justify-start">
        {/* Logo Section */}
        <div className="w-[160px] md:w-[90px] lg:w-[160px] mr-15">
          {isLoading ? (
            <div className="w-[160px] h-[50px] bg-gray-400 animate-pulse"></div>
          ) : (
            <NavLink to="/">
              <img
                src="https://www.regexsoftware.com/wp-content/uploads/2020/05/noname-1.png"
                className="object-cover"
                alt="Logo"
              />
            </NavLink>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-xl"
        >
          <GiHamburgerMenu />
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:block ${
            isOpen ? "block" : "hidden"
          } text-blue-900 text-lg font-semibold absolute lg:relative top-14 right-5 lg:top-0 lg:bg-transparent p-5 lg:p-0 z-50`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8">
            {isLoading
              ? Array(9)
                  .fill(0)
                  .map((_, index) => (
                    <li
                      key={index}
                      className="h-4 w-20 bg-gray-400 animate-pulse rounded"
                    ></li>
                  ))
              : [
                  { path: "/", label: "Home" },
                  { path: "/Allabout", label: "About Us" },
                  { path: "/Allsoftware", label: "Software Services" },
                  { path: "/Alltraining", label: "Training Services" },
                  { path: "/Placed-student", label: "Our Placement" },
                  { path: "/Programs", label: "Programs" },
                  { path: "/Events", label: "Events" },
                  { path: "/Pricing", label: "Pricing" },
                  { path: "/Contact-us", label: "Contact Us" },
                ].map(({ path, label }) => (
                  <li key={path}>
                    <NavLink to={path} className="hover:underline">
                      {label}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
