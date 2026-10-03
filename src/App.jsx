import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Sidebarright from "./components/Sidebarright";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Message from "./pages/Message";

const App = () => {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
