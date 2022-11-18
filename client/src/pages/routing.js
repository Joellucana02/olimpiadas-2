import React, { useContext } from "react";
import { Routes, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;
