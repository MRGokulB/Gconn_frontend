import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiPhone, FiSearch } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import universityData from "../Data/universityData";
import Logo from "../assets/images/Logo/CollegeLogo.png";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top small contact bar */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><FiPhone /> {universityData.contact.helpline1}</span>
            <span className="flex items-center gap-1"><FiPhone /> {universityData.contact.helpline2}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={universityData.contact.twitter} className="hover:opacity-80" aria-label="Twitter"><FaTwitter /></a>
            <a href={universityData.contact.facebook} className="hover:opacity-80" aria-label="Facebook"><FaFacebookF /></a>
            <a href={universityData.contact.instagram} className="hover:opacity-80" aria-label="Instagram"><FaInstagram /></a>
            <a href={universityData.contact.linkedin} className="hover:opacity-80" aria-label="Linkedin"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="MUHS Logo" className="h-12 w-12 object-contain" />
                <div>
                  <h1 className="text-lg font-bold">GOVERNMENT COLLEGE OF NURSING, VISHNUPURI, NANDED</h1>
                  <p className="text-xs text-gray-600">सरकारी नर्सिंग महाविद्यालय, विष्णुपुरी, नांदेड़</p>
                </div>
              </Link>
            </div>

            {/* Desktop menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {universityData.navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    "text-sm font-medium hover:text-blue-600 " + (isActive ? "text-blue-600" : "text-gray-700")
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Keyword..."
                  className="border rounded-full px-3 py-2 text-sm w-52 focus:outline-none"
                />
                <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">LMS</button>
                <select className="border rounded-full px-3 py-2 text-sm">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md border"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col gap-2">
                {universityData.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded hover:bg-gray-100"
                  >
                    {link.title}
                  </NavLink>
                ))}
                <div className="px-3 py-2">
                  <input type="text" placeholder="Search Keyword..." className="w-full border rounded px-3 py-2 text-sm" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
