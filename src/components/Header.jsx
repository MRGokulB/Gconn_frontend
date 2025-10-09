import React from "react";
import Logo from "../assets/images/Logo/CollegeLogo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="IIT Bombay" className="h-25" />
        <div>
          <h1 className="text-xl font-semibold">GOVERNMENT COLLEGE OF NURSING, VISHNUPURI, NANDED</h1>
          <p className="text-xl text-gray-600">सरकारी नर्सिंग महाविद्यालय, विष्णुपुरी, नांदेड़</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="#">Students |</a>
        <a href="#"> Faculty & Staff |</a>
        <a href="#"> Alumni |</a>
        <a href="#"> Donate |</a>
        <a href="#"> CSR |</a>
        <a href="#"> Vendors</a>
      </nav>
    </header>
  );
};

export default Header;
