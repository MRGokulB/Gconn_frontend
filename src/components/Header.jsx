import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Logo = "/assets/images/Logo/CollegeLogo.png";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Faculty", path: "/faculty" },
    { name: "Annexure", path: "/annexure" },
    { name: "Events", path: "/events" },
    { name: "Students", path: "#" },
    { name: "Alumni", path: "#" },
    { name: "CSR", path: "#" },
    { name: "Vendors", path: "#" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo and College Name */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <img 
              src={Logo} 
              alt="College Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto flex-shrink-0" 
            />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 leading-tight">
                <span className="block sm:inline">GOVERNMENT COLLEGE OF NURSING,</span>
                <span className="block sm:inline sm:ml-1">VISHNUPURI, NANDED</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight mt-0.5">
                सरकारी नर्सिंग महाविद्यालय, विष्णुपुरी, नांदेड़
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 ml-8">
            {navLinks.map((link) => {
              const isInternal = link.path.startsWith("/");

              const linkContent = (
                <div className="relative inline-block h-6 overflow-hidden group px-4 py-2">
                  <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full text-gray-700">
                    {link.name}
                  </span>
                  <span className="absolute left-4 top-2 block transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 text-indigo-600 font-semibold">
                    {link.name}
                  </span>
                </div>
              );

              return isInternal ? (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {linkContent}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.path}
                  className="text-sm font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {linkContent}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden ml-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 py-4 mb-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isInternal = link.path.startsWith("/");

                const linkClasses = "px-4 py-3 text-sm font-medium rounded-lg transition-colors text-gray-700 hover:bg-indigo-50 hover:text-indigo-600";

                return isInternal ? (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.path}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;