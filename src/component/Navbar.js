import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-grey-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold text-pjc font- m-4">Partha Jyoti Chutia</h1>
      <ul className="hidden  md:flex">
        <li className="p-5 text-xl text-white">Home</li>
        <li className="p-5 text-xl text-white">Experiences</li>
        <li className="p-5 text-xl text-white">Certificates</li>  
        <Link to="/about" className="p-5 text-xl text-white">About</Link>
        <li className="p-5 text-xl text-white">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-grey-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        
        <h1 className="text-3xl text-pjc font-bold m-4">Partha Jyoti Chutia</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2 text-white">Home</li>
          <li className="p-2 text-white">Experiences</li>
          <li className="p-2 text-white">Certificates</li>
          <li className="p-2 text-white">About</li>
          <li className="p-2 text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
