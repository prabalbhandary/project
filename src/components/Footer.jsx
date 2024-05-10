import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
<footer className="bg-purple-800 text-white py-12">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h2 className="text-xl font-semibold">SOLUTIONS</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="hover:underline">Prebuilt Robots</a></li>
          <li><a href="#" className="hover:underline">Popular Use Cases</a></li>
          <li><a href="#" className="hover:underline">Monitor Websites for Changes</a></li>
          <li><a href="#" className="hover:underline">Download Data from Any Website</a></li>
          <li><a href="#" className="hover:underline">Turn Any Website Into an API</a></li>
          <li><a href="#" className="hover:underline">Price Monitoring</a></li>
          <li><a href="#" className="hover:underline">All Features</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">RESOURCES</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="hover:underline">Help Center</a></li>
          <li><a href="#" className="hover:underline">API Documentation</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Schedule a Demo</a></li>
          <li><a href="#" className="hover:underline">Login</a></li>
          <li><a href="#" className="hover:underline">Media Kit</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">PARTNERS</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="hover:underline">Affiliate Program</a></li>
          <li><a href="#" className="hover:underline">Browse AI for Startups</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">LEGAL</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Affiliates Terms & Conditions</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-700 pt-8 lg:flex lg:justify-between">
      <div>
        <p className="text-lg">SUBSCRIBE TO OUR NEWSLETTER</p>
        <p className="mt-2 text-sm">The latest news, articles, and resources, sent to your inbox monthly.</p>
        <form className="mt-4">
          <div className="flex">
            <input type="email" className="p-2 rounded-l-lg border-0 w-64" placeholder="youremail@company.com" />
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="mt-8 lg:mt-0">
        <p className="text-sm">© 2024 Browse AI Inc.</p>
        <p className="text-sm">Made with ❤️ and ☕ in 🍁</p>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="hover:underline">
            <GrLinkedin />
          </a>
          <a href="#" className="hover:underline">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer