import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile/profile";
import Home from "./home";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
