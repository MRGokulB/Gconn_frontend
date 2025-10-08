import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Contact Info */}
      <div className="flex items-center space-x-4">
        <span>Email: <a href="mailto:info@muhs.ac.in" className="underline hover:text-gray-300">info@muhs.ac.in</a></span>
        <span>|</span>
        <span>Phone: <a href="tel:+912532534200" className="underline hover:text-gray-300">+91-253-2534200</a></span>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex items-center space-x-3 mt-2 md:mt-0">
        <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}
