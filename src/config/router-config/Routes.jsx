import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Home from "../../screens/home/Home"
import About from "../../screens/about/About"
import Contact from "../../screens/contact/Contact"
import SingleProduct from "../../screens/single-product/SingleProduct"

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="singleProduct/:id" element={<SingleProduct/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
