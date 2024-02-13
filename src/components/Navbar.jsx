import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({supNum}) => {
  return (
    <>
    <nav className=" flex items-center bg-gray-700">
      <div className="navbar ">
        <p className="btn btn-ghost text-xl text-gray-300"> <Link to="/">Ah Store</Link> </p>
      </div>
      <ul className=" flex gap-5 text-gray-300">
        <li className=" font-semibold btn btn-ghost"><Link to="/">Home</Link></li>
        <li className=" font-semibold btn btn-ghost"><Link to="about">About</Link></li>
        <li className=" font-semibold btn btn-ghost"><Link to="contact">Contact</Link></li>
        <li className=" font-semibold btn btn-ghost mr-3"><Link to="cart"><i class="fa-solid fa-cart-shopping"></i><sup>{supNum}</sup></Link></li>
      </ul>
      </nav>
    </>
  );
};

export default Navbar;
