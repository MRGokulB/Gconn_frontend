import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo/CollegeLogo.png";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Faculty", path: "/faculty" },
    { name: "Annexure", path: "/annexure" },
    { name: "Students", path: "#" },
    { name: "Alumni", path: "#" },
    { name: "CSR", path: "#" },
    { name: "Vendors", path: "#" },
  ];

  return (
    <header className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="IIT Bombay" className="h-25" />
        <div>
          <h1 className="text-xl font-semibold">
            GOVERNMENT COLLEGE OF NURSING, VISHNUPURI, NANDED
          </h1>
          <p className="text-xl text-gray-600">
            सरकारी नर्सिंग महाविद्यालय, विष्णुपुरी, नांदेड़
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        {navLinks.map((link) => {
          const isInternal = link.path.startsWith("/");

          const linkContent = (
            <div className="relative inline-block h-6 overflow-hidden group">
              {/* Upper text slides up */}
              <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
                {link.name}
              </span>
              {/* Lower text slides in from bottom */}
              <span className="absolute left-0 top-0 block transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                {link.name}
              </span>
            </div>
          );

          return isInternal ? (
            <Link key={link.name} to={link.path}>
              {linkContent}
            </Link>
          ) : (
            <a key={link.name} href={link.path}>
              {linkContent}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
