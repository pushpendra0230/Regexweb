import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  const workingData = [
    {
      img: "https://img.icons8.com/?size=80&id=67411&format=png",
      title: "Analysis of Tools Requirement",
      points: [
        "Questionnaire Based Tool Development & Deployment",
        "Reporting & Analysis",
      ],
      border: true, // Add this field to enable a border for this entry
    },
    {
      img: "https://img.icons8.com/?size=48&id=HZHRVmthlVQ5&format=png",
      title: "Knowledge Based Assessments",
      points: [
        "Pre & Post training assignments",
        "MCQ & Subjective Questionnaires",
        "Assessment reports & Analysis",
      ],
      border: true,
    },
    {
      img: "https://img.icons8.com/?size=40&id=35127&format=png",
      title: "E-Learning",
      points: [
        "Freshers & Lateral Training",
        "Customized E-Learning",
        "Mentorship connect",
        "Industry oriented curriculum",
      ],
      border: true,
    },
  ];

  // Define additional data
  const additionalData = [
    {
      img: "https://img.icons8.com/?size=80&id=OYbXGW7sJiOG&format=png",
      title: "Custom Course Development",
      points: [
        "Standard Curriculum",
        "Video courses design",
        "Course design as per business standards",
      ],
      border: true, // Enable border for this item
    },
    {
      img: "https://img.icons8.com/?size=80&id=12345&format=png",
      title: "Live Project Training",
      points: [
        "Hands-on project experience",
        "Real-world problem solving",
        "Industry-level best practices",
        "Guidance from expert mentors",
      ],
      border: true,
    },
    {
      img: "https://img.icons8.com/?size=50&id=37722&format=png",
      title: "Training Program Delivery",
      points: [
        "Technical Training Programs",
        "Cutting-edge technology",
        "Management Skills",
        "Soft-skills & Leadership Development",
      ],
      border: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGtleWJvYXJkJTIwaW1hZ2VzJTIwSER8ZW58MHx8MHx8fDA%3D"
          alt="Hero"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-36 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          About REGex Software
        </h2>
        <div className="mb-6 w-20 sm:w-40 mx-auto border-b-2 border-blue-900"></div>

        <p className="text-sm sm:text-base text-black leading-relaxed mb-6 max-w-[90%] mx-auto">
          <span className="font-bold">REGex Software Services</span> is devised
          to bring an extra edge to Information Technology. We believe in
          transforming your imagination into reality by providing quality
          training services & working on several technologies like Big Data,
          Machine Learning, Artificial Intelligence, Data Science, Cloud
          Computing (AWS & Azure), Linux, DevOps, Java Full Stack, MEAN and MERN
          Stack, Competitive Programming with C++ and Java & many more based on
          Industry 4.0 standards. We are an amalgamation of technique,
          creativity and modern learnings with the synonym of perfection in
          playing with codes and jargons.
        </p>

        <p className="text-sm sm:text-base text-black leading-relaxed max-w-[90%] mx-auto">
          Our teammates have delivered several Corporate Training in MNCs like
          Capgemini, Cognizant, Dell, Infosys, KPMG, Honeywell, KFH, Deloitte
          and colleges such as JECRC, PIET, PCE, JNU, Mahaveer College, St.
          Wilfred College, JIET, Mody University, Computer Society of India &
          many more. We aim to make students capable as per the Industry
          Standards who can serve industry in a better way with our practical
          learning approaches.
        </p>
      </div>

      <div className="py-6 px-6 sm:px-8 md:px-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-center items-center bg-blue-900 py-4">
          <div className="border-white pr-4 sm:border-r-2">
            <h3 className="text-white text-lg sm:text-xl">100+ Globally</h3>
            <p className="text-white text-lg sm:text-xl">Satisfied Clients</p>
          </div>

          <div className="border-white pr-4 sm:border-r-2">
            <h3 className="text-white text-lg sm:text-xl">250+ REGex Team</h3>
            <p className="text-white text-lg sm:text-xl">Members</p>
          </div>

          <div className="border-white pr-4 sm:border-r-2">
            <h3 className="text-white text-lg sm:text-xl">60% Growth Per</h3>
            <p className="text-white text-lg sm:text-xl">Annum</p>
          </div>

          <div className="border-white pr-4 sm:border-r-2">
            <h3 className="text-white text-lg sm:text-xl">500+ Corporate</h3>
            <p className="text-white text-lg sm:text-xl">Trainings Delivered</p>
          </div>

          <div>
            <h3 className="text-white text-lg sm:text-xl">ISO 27001:2015</h3>
            <p className="text-white text-lg sm:text-xl">Certified</p>
          </div>
        </div>
      </div>

      {/* Working Section */}
      <div className="container mx-auto py-6 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          Our Working
        </h2>
        <div className="mb-6 w-40 mx-auto border-b-2 border-blue-900"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-6 sm:px-10 gap-6">
          {workingData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 h-14 w-14 sm:h-16 sm:w-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <ul className="text-black leading-relaxed text-sm">
                {item.points.map((point, i) => (
                  <li key={i}>- {point}</li>
                ))}
              </ul>
              {item.border && (
                <div className="w-full border-t-4 border-blue-900 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-6 sm:px-10 gap-6">
          {additionalData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 h-14 w-14 sm:h-16 sm:w-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <ul className="text-black leading-relaxed text-sm">
                {item.points.map((point, i) => (
                  <li key={i}>- {point}</li>
                ))}
              </ul>
              {item.border && (
                <div className="w-full border-t-4 border-blue-900 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Join REGex Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Do We Join REGex Training?
        </h2>
        <div className="mb-6 w-40 mx-auto border-b-2 border-blue-900"></div>
        <p className="text-gray-700 leading-relaxed mb-8">
          We see technology moving much faster than any enterprise...
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              img: "https://www.regexsoftware.com/wp-content/uploads/2022/02/INSTRUCTOR-LED.jpg",
              title: "INSTRUCTOR-LED TRAINING (ILT)",
              text: "Delivering quality classroom training to tech geeks is our most prominent business model. We provide training in multiple technical skills like: Data Science, Machine Learning, Artificial Intelligence, Java Full Stack, MERN Stack, Python-Django, Bigdata(Hadoop, Hive, Hbase, Talend, Apache Spark), Data Analytics (Power BI), Cloud Computing (AWS, AZURE), DevOps, Competitive programming using C++ or Java and many more.",
            },
            {
              img: "https://www.regexsoftware.com/wp-content/uploads/2022/02/Online-Learning.jpg",
              title: "VIRTUAL INSTRUCTOR-LED TRAINING (VILT)",
              text: "REGex also delivers quality Virtual training to tech geeks. We provide virtual training on multiple technical skills like: Data Science, Machine Learning, Artificial Intelligence, Java Full Stack, MERN Stack, Python-Django, Bigdata(Hadoop, Hive, Hbase, Talend, Apache Spark), Data Analytics (Power BI), Cloud Computing (AWS, AZURE), DevOps, Competitive programming using C++ or Java and many more.",
            },
            {
              img: "https://www.regexsoftware.com/wp-content/uploads/2022/02/Curriculum.jpg",
              title: "INDUSTRY STANDARD CURRICULUM",
              text: "Curriculum of all training programs of REGex is designed by Industry Experts based on Industry 4.0 Standards. This Industry Standard curriculum helps students to be ready as per Industry requirements.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <NavLink to="/Allabout"></NavLink>
      <div className="container mx-auto px-6 py-12">
        {/* Our Team Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">OUR TEAM</h2>
          <div className="mb-10 w-40 mx-auto border-b-2 border-blue-900"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "https://www.regexsoftware.com/wp-content/uploads/elementor/thumbs/Shivam-pky7vhx4oobr980w2z7u1wmkxuk5vyx9jx9mw4qtl0.jpeg",
                name: "Shivam Maheshwari",
                role: "CO-FOUNDER & CEO",
                linkedin:
                  "https://www.linkedin.com/in/shivam-maheshwari-812331122/",
                youtube: "https://www.youtube.com/c/REGexSoftware",
              },
              {
                img: "https://www.regexsoftware.com/wp-content/uploads/elementor/thumbs/Tushar-pky7xtkrkxi9yindihdmptilt53tx15djfbulras78.jpeg",
                name: "Tushar Goyal",
                role: "CO-FOUNDER & CTO",
                linkedin: "https://www.linkedin.com/in/tushar-goyal-229456114/",
                youtube: "https://www.youtube.com/c/REGexSoftware",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-12 w-full md:w-3/4 mx-auto"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full h-60 w-60 mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {member.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png"
                      alt="LinkedIn"
                      className="h-8 w-8"
                    />
                  </a>
                  <a
                    href={member.youtube}
                    className="text-red-500 hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/?size=48&id=9a46bTk3awwI&format=png"
                      alt="YouTube"
                      className="h-8 w-8"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
