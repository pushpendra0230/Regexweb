import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const StatsHeader = () => {
  const stats = [
    { value: "100+", label: "Mentors" },
    { value: "35+", label: "Total Project's Done" },
    { value: "30k+", label: "Students Impacted" },
    { value: "125+", label: "Courses" },
    { value: "4+", label: "Cities" },
  ];

  return (
    // <div className="bg-[#0A2463] py-12">
    <div className="bg-[#F8F9FA] py-12">
      {" "}
      {/* Dark blue background */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Center content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {" "}
          {/* Responsive grid */}
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {" "}
              {/* Center text within each stat box */}
              <div className="bg-[#1A3B8A] rounded-lg py-6 px-4">
                {" "}
                {/* Rounded box with lighter blue background */}
                <h2 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h2>{" "}
                {/* Value */}
                <p className="text-lg text-white">{stat.label}</p> {/* Label */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PlacedStudents = () => {
  const students = [
    {
      name: "Vanshika Garg",
      company: "Avizva",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/07/Sept.-28-2020-Meadowview-VA-Invitation-to-follow-2-150x150.png",
    },
    {
      name: "Rahul Kumawat",
      company: "Onepixel Software",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/06/New-Project-59-150x150.webp",
    },
    {
      name: "Praveen jangid",
      company: "TechCorp",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-56-150x150.webp",
    },
    {
      name: "Gunjan saini",
      company: "National Instruments",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-37-150x150.webp",
    },
    {
      name: "prem",
      company: "Wipro & IBM",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-38-150x150.webp",
    },
    {
      name: "Purnima ponrajkumar",
      company: "Indium software",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-34-150x150.webp",
    },
    {
      name: "sonal",
      company: "Wipro",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-33-150x150.webp",
    },
    {
      name: "Mohammad Atash Shaikh",
      company: "Wipro",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-32-150x150.webp",
    },
    {
      name: "Ayush Kumar srivastava",
      company: "Sopra",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-30-150x150.webp",
    },
    {
      name: "Sourav Dash",
      company: "Tek System",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-29-150x150.webp",
    },
    {
      name: "Simran Khatri",
      company: "Techmatrix jaipur",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-28-150x150.webp",
    },
    {
      name: "Madhav Sharma",
      company: "Cognizant",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-27-150x150.webp",
    },
    {
      name: "Rajkishor. P. Game",
      company: "Redington India Ltd",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-26-150x150.webp",
    },
    {
      name: "Bhuvan",
      company: "Nucleus software",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-25-150x150.webp",
    },
    {
      name: "Akshay Kachave",
      company: "Talent Sikha",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-24-150x150.webp",
    },
    {
      name: "Vasavi Uppala",
      company: "NCR coperation",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-23-150x150.webp",
    },
    {
      name: "Ashish Chauhan",
      company: "wipro",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-22-150x150.webp",
    },
    {
      name: "Pratik Choubey",
      company: "TCS",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-21-150x150.webp",
    },
    {
      name: "Debarya Pal",
      company: "Accenture",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-20-150x150.webp",
    },
    {
      name: "Vritika Vijay Kamra",
      company: "Larsen and toubro infotech",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-19-150x150.webp",
    },
    {
      name: "Mihir Vatsa",
      company: "Infosys",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-18-150x150.webp",
    },
    {
      name: "Divyansh Singh Sengar",
      company: "Infosys",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-16-150x150.webp",
    },
    {
      name: "Harsha Kumari",
      company: "Bank Of America",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-15-150x150.webp",
    },
    {
      name: "Vatan Gupta",
      company: "Accenture",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-14-150x150.webp",
    },
    {
      name: "Fardeen Khan",
      company: "Deloitte us",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-13-150x150.webp",
    },
    {
      name: "Divyanshi jain",
      company: "Deloitte",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-12-150x150.webp",
    },
    {
      name: "Hritick goyal",
      company: "Ranjio",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-11-150x150.webp",
    },
    {
      name: "Sumodh e Sabu",
      company: "TCS",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/IMG-20190429-WA0006-1-1-133x150.jpg",
    },
    {
      name: "Swati",
      company: "Accenture",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-10-150x150.webp",
    },
    {
      name: "Nishant Kumar",
      company: "cognizant",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-9-150x150.webp",
    },
    {
      name: "Saquib Mansuri",
      company: "Circulants",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-8-150x150.webp",
    },
    {
      name: "Dhanisha sharma",
      company: "TCS",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-7-150x150.webp",
    },
    {
      name: "Aditya Prasad",
      company: "Capgemini",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-6-150x150.webp",
    },
    {
      name: "Sathvika Chekuri",
      company: "Barclays",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-5-150x150.webp",
    },
    {
      name: "Priyanshu Lasod",
      company: "Barclays Arcgate",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-4-150x150.webp",
    },
    {
      name: "Jaya Mendhe",
      company: "Accenture",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/03/New-Project-3-150x150.webp",
    },
    {
      name: "Dipali",
      company: "JP Morgan Chase & Co.",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-46-150x150.webp",
    },
    {
      name: "Meenal",
      company: "Packard",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-47-150x150.webp",
    },
    {
      name: "Riya Khanna",
      company: "HSBC",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-48-150x150.webp",
    },
    {
      name: "Muskan",
      company: "Hewlett-Packard",
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-49-150x150.webp",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = Math.ceil(students.length / 5);

  // Debug: Log slide count and currentSlide
  console.log("Slide count:", slideCount);
  useEffect(() => {
    console.log("Current Slide:", currentSlide);
  }, [currentSlide]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  // Get students for the current slide
  const displayStudents = students.slice(
    currentSlide * 5,
    (currentSlide + 1) * 5
  );

  return (
    <div className="bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Placed Students
        </h2>
        <div className="flex justify-center">
          <div className="h-0.5 bg-blue-900 w-20 mb-4"></div>
        </div>

        {/* Slider */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-black p-2 rounded-md"
          >
            {"<"}
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {displayStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg text-gray-400 mb-2">{student.name}</p>
                <p className="text-blue-600 font-bold">{student.company}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slideCount - 1}
            className="text-black p-2 rounded-md"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

// const EnquiryForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     areYouA: "",
//     collegeCompany: "",
//     query: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send data to server)
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white p-10 rounded-lg shadow-md max-w-[1100px] w-full">
//         <h2 className="text-2xl font-bold text-blue-900 mb-4">
//           Enquire Now
//           <div className="h-1 bg-blue-900 w-20 mt-2"></div> {/* Border line */}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-gray-700 font-medium mb-1"
//               >
//                 First <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-gray-700 font-medium mb-1"
//               >
//                 Last <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Phone <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="areYouA"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Are you a ? <span className="text-red-500">*</span>
//             </label>
//             <select
//               id="areYouA"
//               name="areYouA"
//               value={formData.areYouA}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select</option>
//               <option value="student">Student</option>
//               <option value="professional">Professional</option>
//             </select>
//           </div>
//           <div>
//             <label
//               htmlFor="collegeCompany"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               College Name/Company Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               id="collegeCompany"
//               name="collegeCompany"
//               value={formData.collegeCompany}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="query"
//               className="block text-gray-700 font-medium mb-1"
//             >
//               Any query <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               id="query"
//               name="query"
//               value={formData.query}
//               onChange={handleChange}
//               rows="4"
//               className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-gray-200 hover:bg-blue-700 text-black py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areYouA: "",
    collegeCompany: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // ✅ Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      areYouA: "",
      collegeCompany: "",
      query: "",
    });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-[1100px] w-full">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Enquire Now
          <div className="h-1 bg-blue-900 w-20 mt-2"></div>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                First <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Last <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Are you a ? <span className="text-red-500">*</span>
            </label>
            <select
              name="areYouA"
              value={formData.areYouA}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              College Name/Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="collegeCompany"
              value={formData.collegeCompany}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Any query <span className="text-red-500">*</span>
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="4"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-200 hover:bg-blue-700 text-black py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Training = () => {
  const featuresData = [
    {
      image: "https://img.icons8.com/?size=80&id=111281&format=png",
      title: "Training",
    },
    {
      image:
        "https://image.shutterstock.com/image-vector/watering-can-sketch-icon-web-260nw-1028059930.jpg",
      title: "Mentoring",
    },
    {
      image: "https://img.icons8.com/?size=80&id=111604&format=png",
      title: "Skills",
    },
    {
      image: "https://img.icons8.com/?size=48&id=15178&format=png",
      title: "Productivity",
    },
    {
      image: "https://img.icons8.com/?size=64&id=OHfERhziWBBn&format=png",
      title: "Goals",
    },
  ];
  const programsData = [
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-1-1024x678.png",
      title: "Competitive Programming with C++ & Python",
      description:
        "Competitive Programming is the need of the hour today which helps one secure a top job in IT Industry. Therefore, we would be focussing on developing good knowledge of Data Structure & Algorithm. Our program covers top topics like Bit Manipulation, Two Pointers, Hashing, Greedy Algorithms, Trees, Tries & BST etc., to help you to get your dream job in top product based IT industry.",
      readMoreLink: "/competitive-programming",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-21-at-21.32.30-1024x695.jpeg",
      title: "Ethical Hacking",
      description:
        "Ethical Hacking is one of the most demanded best certification program by corporates worldwide. Ethical Hacking is the top authorized practice of bypassing system security to identify potential data breaches and threats in a network. Ethical hackers aim to investigate the system or network for weak points that malicious hackers can exploit or destroy. This Course is designed by ethical hackers and security experts. Click below button to know more.",
      readMoreLink: "/ethical-hacking",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-2-1024x678.png",
      title: "Competitive Programming with Python",
      description:
        "Enhance your skill with the most in demand programming language . Python is heavily used in Data Science, Machine Learning & AI, Automation and Web Development. Python is most sought after language for scientific research due to its readability and easy code maintenance.",
      readMoreLink: "/Programming-with-Python",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-4-1024x678.png",
      title: "BigData (Hadoop, Spark, Kafka, Hive)",
      description:
        "Broaden your skills with our new Data Engineer career track. Learn about big data tools like HDFS, MapReduce, Kafka, Hive, Pig, Yarn & shape your future. Industry experts will show you how you can solve one of the biggest challenges facing businesses today - overcoming the colossal task of securely collecting, cleaning and cataloging Client's data.",
      readMoreLink: "/BigData",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-5-1024x678.png",
      title: "Machine Learning & Deep Learning",
      description:
        "Machine Learning is the field where we are finding maximum number of jobs. Our course content has been designed with utmost care keeping in mind the demand of the market and way of implementation of data science knowledge to one of the most complex problems in lucid manner. So Train your computer with decision making Algorithms & enhance your Data Science Career with our industry experts.",
      readMoreLink: "/Machine-Learning",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2023/02/Amazon-Web-Services-1024x678.png",
      title: "Cloud Computing (AWS)",
      description:
        "Cloud Computing is the on-demand availability of computer system resources, especially data storage and computing power without direct active management by the user. So, if you are looking for career, hands on cloud computing will be big plus. Our experts will help you to understand virtual machines, networking, security understanding cost structure, understanding unique proposition of each of the cloud providers.",
      readMoreLink: "/Cloud-Computing",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-7-1024x678.png",
      title: "Python Django ( FullStack Development )",
      description:
        "Django is a python based open source framework. Enhance your web development skill with python-django web development course with our industry experts and become a full stack developer. Django provides ease the creation of complex, database-driven website, provides its own server. Django is the only language which provides pre developed Admin Panel.",
      readMoreLink: "/Python-Django",
    },
    {
      image:
        "https://www.regexsoftware.com/wp-content/uploads/2020/03/REGEX-9-1024x678.png",
      title: "Mobile App Development​ with Flutter",
      description:
        "Shape your career with Android/IOS or Hybrid Application development using Flutter with our experts - front-end development tool, firebase authentication, servers at the back-end, different Api's, security tools, Camera, Location & Maps, Push Notifications etc.",
      readMoreLink: "/Mobile-App-Development",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGtleWJvYXJkJTIwaW1hZ2VzJTIwSER8ZW58MHx8MHx8fDA%3D"
          alt="Hero"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Training Services</h1>
        </div>
      </div>

      {/* Training Section */}
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-8 text-center">
        <p className="text-sm text-black leading-relaxed mb-4">
          <strong>REGex Software Services</strong> are devised to bring an extra
          edge to Information Technology. We believe to transform your
          imagination into reality by providing quality services & working on
          several technologies such as{" "}
          <strong>
            Data Science Specialization, Java Full Stack Specialization, BigData
            Analytics, Machine Learning & Deep Learning, Python-Django Full
            Stack Development, MERN Stack Development Program, Cloud Computing,
            Linux, Mobile App Development with Flutter, DevOps Specialization,
            Power BI Specialization, Competitive Programming
          </strong>{" "}
          & many more based on Industry 4.0 standards.
        </p>
        <p className="text-sm text-black leading-relaxed mb-4">
          With the belief to build a healthy ecosystem as per the Industry
          Standards <strong>REGex Software</strong> provides best Industry
          Oriented Courses in affordable prices. We organize top Training
          Programs on Multiple Technology Domains for improving the knowledge
          and skills of the Students/Professionals, so that they can become
          expert in their respective technology domain and get their Dream Job
          in Software Development Field in Big MNCs. We are providing best in
          class training on latest and advance technologies including:{" "}
          <strong>
            Data Science Specialization, Java Full Stack Specialization, BigData
            Analytics, Machine Learning & Deep Learning, Python-Django Full
            Stack Development, MERN Stack Development Program, Cloud Computing,
            Linux, Mobile App Development with Flutter, Devops Specialization,
            Power BI Spoecialization, Competitive Programming
          </strong>{" "}
          by working on Industry Oriented Projects. Ensuring learners gain
          real-world experience. <strong>Regex Software</strong> is also known
          top <strong>Ed-Tech Company</strong> in Rajasthan, committed to
          delivering the best educational programs for aspiring technology
          professionals.
        </p>
      </div>
      {/* Features Section */}
      <div className="w-full px-6 py-12 bg-blue-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 rounded-full"></div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Section
      <div className="container mx-auto px-34 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Programs
        </h2>
        <div className="mb-6 w-40 mx-auto border-b-2 border-blue-900"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 flex flex-col h-full"
            >
              <img
                src={program.image}
                alt={program.title}
                className="mb-4 h-88 w-full object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-black leading-relaxed text-sm mb-4">
                  {program.description}
                </p>
              </div>
              <a
                href={program.readMoreLink}
                className="bg-blue-900 text-white font-medium py-2 px-4 rounded-md text-center mt-auto w-fit mx-auto"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div> */}
      {/* Programs Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Programs
        </h2>
        <div className="mb-6 w-40 mx-auto border-b-2 border-blue-900"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 flex flex-col h-full"
            >
              <img
                src={program.image}
                alt={program.title}
                className="mb-4 h-88 w-full object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-black leading-relaxed text-sm mb-4">
                  {program.description}
                </p>
              </div>
              <a
                href={program.readMoreLink}
                className="bg-blue-900 text-white font-medium py-2 px-4 rounded-md text-center mt-auto w-fit mx-auto"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Why REGex Section */}
      <header className="bg-[#F8F9FA] py-12 py-10">
        <div className="container mx-auto px-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why REGex?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Software & EdTech",
                desc: "REGex creates software and also provides Industry Oriented Trainings.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/edtech.png",
              },
              {
                title: "Live + Recorded Session",
                desc: "Live Sessions by Top Industry Experts and access to Recorded Sessions.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/liveclass.png",
              },
              {
                title: "Live Industry Projects",
                desc: "REGex Works on Projects and enables you to create Industry Oriented Projects.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/liveproject.png",
              },
              {
                title: "ISO Certified",
                desc: "REGex is a certified ISO 9001:2015, Software Service Provider and EdTech Company.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/Webp.net-resizeimage.png",
              },
              {
                title: "Personal Mentors",
                desc: "REGex provides 24*7 Student Mentor availability and One-to-One Student Mentors.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/mentorship.png",
              },
              {
                title: "Higher Tech Package",
                desc: "REGex enables you to crack Product Based Companies Interviews with min. 6 LPA.",
                img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/hiring-package.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md p-6 text-center m-2 ${
                  index % 2 === 0
                    ? "bg-black text-white"
                    : "bg-blue-200 text-gray-700"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={item.img} alt={item.title} className="w-36 h-36" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* StatsHeader Section */}
      <StatsHeader />

      {/* PlacedStudents section  */}
      <PlacedStudents />

      {/* EnquiryForm section  */}
      <EnquiryForm />

      {/* Link to Alltraining Page */}
      {/* <div className="text-center mt-8">
        <NavLink
          to="/Alltraining"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Learn More About Our Training Services
        </NavLink>
      </div> */}
      <NavLink to="/Alltraining"></NavLink>
    </div>
  );
};

export default Training;
