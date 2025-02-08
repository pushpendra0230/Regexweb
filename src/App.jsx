// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Header";
// import FooterUp from "./components/Footer";
// import Homepage from "./pages/Homepage";
// import Allabout from "./pages/Allabout";
// import Allsoftware from "./pages/Allsoftware";
// import Alltraining from "./pages/Alltraining";
// import AboutUs from "./components/AboutUs";
// import SoftwareAndWhyRegex from "./components/Software";
// import Training from "./components/Training";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/software-services" element={<SoftwareAndWhyRegex />} />
//         <Route path="/training-services" element={<Training />} />
//         <Route path="/allabout" element={<Allabout />} />
//         <Route path="/allsoftware" element={<Allsoftware />} />
//         <Route path="/alltraining" element={<Alltraining />} />
//         {/* Add other routes here */}
//       </Routes>
//       <FooterUp />
//     </BrowserRouter>
//   );
// };

// export default App;

// old code
// ===================================================================================
// new code with routing

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Allabout from "./pages/Allabout";
import Allsoftware from "./pages/Allsoftware";
import Alltraining from "./pages/Alltraining";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allabout" element={<Allabout />} />
        <Route path="/allsoftware" element={<Allsoftware />} />
        <Route path="/alltraining" element={<Alltraining />} />
      </Routes>
    </>
  );
};

export default App;