import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { RiArrowDropDownLine, RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleUseCasesOpen = () => {
    setUseCasesOpen((prev) => !prev);
  };

  const toggleResourcesOpen = () => {
    setResourcesOpen((prev) => !prev);
  };

  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white text-black py-4 px-6 fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img src={Logo} alt="Logo" className="w-45 h-12 hover:cursor-pointer" />
            </a>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button className="text-2xl" onClick={toggleMenuOpen}>
              {menuOpen ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
          </div>

          {/* Menu for large screens */}
          <div className="hidden md:flex space-x-6 items-center">
            <ul className="flex space-x-6 text-lg">
              <li className="hover:bg-gray-100 cursor-pointer">Prebuilt Robots</li>
              <li
                className="hover:bg-gray-100 cursor-pointer"
                onClick={toggleUseCasesOpen}
              >
                <div className="flex items-center">
                  Use Cases
                  <RiArrowDropDownLine className="w-6 h-6" />
                </div>
                {useCasesOpen && (
                  <ul
                    className="absolute top-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-2 space-y-2"
                    style={{ width: '250px' }}
                  >
                    <li className="hover:bg-gray-100 cursor-pointer">Popular Use Cases</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Download Data from any website</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Monitor websites for changes</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Turn any website into an API</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Pricing monitoring</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Extract real estate data</li>
                    <li className="hover:bg-gray-100 cursor-pointer">All features</li>
                  </ul>
                )}
              </li>
              <li
                className="hover:bg-gray-100 cursor-pointer"
                onClick={toggleResourcesOpen}
              >
                <div className="flex items-center">
                  Resources
                  <RiArrowDropDownLine className="w-6 h-6" />
                </div>
                {resourcesOpen && (
                  <ul className="absolute top-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-2 space-y-2">
                    <li className="hover:bg-gray-100 cursor-pointer">Help Center</li>
                    <li className="hover:bg-gray-100 cursor-pointer">API Documentation</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Blog</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Contact Us</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Request a Demo</li>
                    <li className="hover:bg-gray-100 cursor-pointer">Affiliate Program</li>
                  </ul>
                )}
              </li>
              <li className="hover:bg-gray-100 cursor-pointer">About Us</li>
              <li className="hover:bg-gray-100 cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Buttons for large screens */}
          <div className="hidden md:flex space-x-4">
            <button className="border border-purple-500 bg-white text-purple-600 hover:bg-white px-4 py-2 rounded transition duration-200">
              Login
            </button>
            <button className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded text-white transition duration-200">
              Get Started for Free
            </button>
          </div>

          {/* Menu and buttons for small screens */}
          <div className={`absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-4 p-4">
              <div className="flex space-x-4">
                <button className="border border-purple-500 bg-white text-purple-600 hover:bg-white px-4 py-2 rounded transition duration-200">
                  Login
                </button>
                <button className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded text-white transition duration-200">
                  Get Started for Free
                </button>
              </div>
              <ul className="flex flex-col space-y-4 text-lg">
                <li className="hover:bg-gray-100 cursor-pointer">Prebuilt Robots</li>
                <li
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={toggleUseCasesOpen}
                >
                  <div className="flex items-center">
                    Use Cases
                    <RiArrowDropDownLine className="w-6 h-6" />
                  </div>
                  {useCasesOpen && (
                    <ul className="space-y-2">
                      <li className="hover:bg-gray-100 cursor-pointer">Popular Use Cases</li>
                      <li className="hover:bg-gray-100 cursor-pointer">Download Data from any website</li>
                      <li className="hover:bg-gray-100 cursor-pointer">Monitor websites for changes</li>
                      <li className="hover:bg-gray-100 cursor-pointer">Turn any website into an API</li>
                      <li className="hover:bg-gray-100 cursor-pointer">Pricing monitoring</li>
                      <li className="hover:bg-gray-100 cursor-pointer">Extract real estate data</li>
                      <li className="hover:bg-gray-100 cursor-pointer">All features</li>
                    </ul>
                  )}
                </li>
                <li className="hover:bg-gray-100 cursor-pointer">About Us</li>
                <li className="hover:bg-gray-100 cursor-pointer">Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Padding to ensure header doesn't overlap content */}
      <div className="pt-16" />
    </>
  );
};

export default Header;
