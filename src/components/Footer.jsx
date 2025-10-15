import React from "react";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="mb-1">Government College of Nursing</p>
          <p className="mb-1">Dr. Shankarrao Chavan Government Medical College and Hospital</p>
          <p className="mb-2">Vishnupuri, Nanded - 431 606, Maharashtra</p>
          <p className="mb-1">
            Email: <a href="mailto:gcongmcnanded22@gmail.com" className="underline hover:text-blue-400 transition">gcongmcnanded22@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:02462229123" className="underline hover:text-blue-400 transition">02462 229123</a>
          </p>
        </div>

        {/* Mini Map */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">How to reach</h3>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Dr.%20Shankarrao%20Chavan%20Government%20Medical%20College%20and%20Hospital%20Nanded&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 md:h-56"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <p className="mb-3">Stay connected with us on social media:</p>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-blue-500 transition text-white px-4 py-2 rounded shadow-md">
              <FaTwitter /> Twitter
            </a>
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-blue-700 transition text-white px-4 py-2 rounded shadow-md">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-red-600 transition text-white px-4 py-2 rounded shadow-md">
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Government College of Nursing, Nanded. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
