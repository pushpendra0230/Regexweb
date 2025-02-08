// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter here
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Move BrowserRouter to index.js */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
