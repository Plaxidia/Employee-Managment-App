import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import AddEmployee from "./pages/AddEmployee";
//import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./pages/viewpage";
import Edit from "./pages/editpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
