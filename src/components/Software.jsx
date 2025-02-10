import { useState } from "react";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <div className="container mx-auto px-6 sm:px-12 md:px-34 py-12">
      <div className="bg-gray-100 shadow-lg p-8 w-full">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-left">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-blue-900 mb-6"></div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 bg-white"
                required
              />
            </div>
          </div>

          <div className="mb-4 mt-4">
            <label className="block text-black font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-medium mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 bg-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Query <span className="text-red-500">*</span>
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 bg-white"
              required
            ></textarea>
          </div>

          <div className="text-left">
            <button
              type="submit"
              className="bg-gray-100 text-black py-2 px-6 border border-gray-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default ContactUs;

const SoftwareAndWhyRegex = () => {
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
          <h1 className="text-white text-4xl font-bold">Software Services</h1>
        </div>
      </div>

      {/* Software Services Section */}
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-36 py-12 text-center">
        <div className="mb-8">
          <p className="text-black leading-relaxed text-sm">
            <span className="font-bold">REGex Software Services</span> offer a
            comprehensive range of software services that cater to the diverse
            needs of our clients. Our goal is to provide innovative and
            customized solutions that enhance efficiency, productivity, and
            growth for businesses across various industries.With our team of
            experienced professionals and cutting-edge technologies, We deliver
            high-quality software services that meet and exceed client
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-30">
          {[
            {
              title: "Web Applications",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/02/pexels-photo-574071.jpeg",
              desc: "We have a team of experts which uses their high-level imagination to build attractive and effective website design. You can generate/increase your business online by using our Website Designing and Development Services. We offer a broad variety of design and development tools such as Responsive Website, CMS, E-commerce etc.",
            },
            {
              title: "Android/iOS Applications",
              img: "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-52.webp",
              desc: "We create highly responsive, innovative and functional application to build your business and attract audience. We have a team of exceptionally trained developers to build effective and attractive application designs. We create applications in Android, IOS and Hybrid Environments like React-Native and Flutter, according to your need.",
            },
            {
              title: "Digital Marketing",
              img: "https://www.regexsoftware.com/wp-content/uploads/2023/04/New-Project-53.webp",
              desc: "In this modern Era, Every Industry must have a digital marketing strategy to be competitive in the internet marketplace. So, We provide digital marketing with Social Media Marketing(SMM) and Email Marketing to ensure maximum reach and grow online presence of our clients to help them in gaining new customers.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-full"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mb-4 h-40 w-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm w-full">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 md:px-34 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Why REGex?</h2>
        <div className="mb-6 w-24 sm:w-40 mx-auto border-b-2 border-blue-900"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expertise",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/edtech.png",
              desc: "We pride ourselves on having a highly skilled team of software developers who possess extensive expertise and experience in various domains and technologies. Our developers stay up-to-date with the latest industry trends and best practices, enabling them to deliver high-quality software solutions that meet your specific requirements.",
            },
            {
              title: "Customized Solutions",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/liveclass.png",
              desc: "We understand that every business has unique needs and challenges. That's why we focus on developing tailor-made software solutions that are designed to address your specific business objectives. We take the time to understand your requirements, analyze your workflows, and create software that perfectly aligns with your goals, ensuring maximum efficiency and productivity.",
            },
            {
              title: "Agile Development Methodology",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/liveproject.png",
              desc: "We follow an Agile development methodology, which allows for greater flexibility, collaboration, and adaptability throughout the software development lifecycle. By breaking the project into smaller iterations, we can incorporate your feedback and make adjustments along the way, ensuring that the final product meets your expectations.",
            },
            {
              title: "Quality Assurance",
              img: "https://www.regexsoftware.com/wp-content/uploads/2022/02/Virtual-Learning.jpg",
              desc: "Quality is at the forefront of everything we do. Our dedicated quality assurance team conducts rigorous testing at every stage of the development process to ensure that the software is robust, secure, and free of any defects or vulnerabilities. We employ various testing methodologies, including functional testing, performance testing, security testing, and user acceptance testing, to deliver a high-quality, reliable product.",
            },
            {
              title: "Transparent Communication",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/mentorship.png",
              desc: "we provide regular updates on the project's progress, discuss any challenges or roadblocks, and actively seek your input and feedback. We value your ideas and opinions, and we strive to maintain open lines of communication to ensure that we are always on the same page.",
            },
            {
              title: "Post-Development Support",
              img: "https://www.regexsoftware.com/wp-content/uploads/2020/11/hiring-package.png",
              desc: "Our commitment to your success extends beyond the development phase. We offer comprehensive post-development support, including maintenance, bug fixes, and system enhancements. Our dedicated support team is always available to address any concerns or issues that may arise after the software is deployed, ensuring smooth operation and user satisfaction.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`shadow-lg md:shadow-xl p-6 sm:p-8 ${
                [1, 3, 5].includes(index)
                  ? "bg-blue-900 text-white"
                  : "bg-white"
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-full mx-auto mb-4 h-32 w-32 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="text-center mt-8">
        <NavLink
          to="/Allsoftware"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Learn More About Our Software Services
        </NavLink>
      </div> */}

      <NavLink to="/Allsoftware"></NavLink>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};
export default SoftwareAndWhyRegex;
