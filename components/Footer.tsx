import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiHeart, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white  overflow-hidden">
      {/* Animated Background Elements - Matching dark theme */}
      <div className="absolute inset-0 ">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 ml-10 mr-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About - Dark theme optimized */}
          <div className="group">
            <h3 className="font-serif text-2xl font-black tracking-wider mb-4 bg-gradient-to-r from-pink-400 to-gray-300 bg-clip-text text-transparent">
              FASHION
              <span className="text-pink-400">STORE</span>
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>
            <p className="font-sans text-gray-300 text-sm leading-relaxed tracking-wide">
              Your one-stop destination for trendy and fashionable clothing. Quality products at affordable prices.
            </p>
            
            {/* Social Icons - Added for completeness */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <FiFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110">
                <FiHeart className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links - Dark theme optimized */}
          <div className="group ">
            <h4 className="font-serif text-lg font-bold tracking-wide mb-4 relative inline-block text-white">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-500"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/account" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories - Dark theme optimized */}
          <div className="group">
            <h4 className="font-serif text-lg font-bold tracking-wide mb-4 relative inline-block text-white">
              Categories
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-500"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=men" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  Men's Wear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=women" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  Women's Wear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="font-sans text-gray-300 hover:text-pink-400 transition-all duration-300 inline-block hover:translate-x-2">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Dark theme optimized */}
          <div className="group">
            <h4 className="font-serif text-lg font-bold tracking-wide mb-4 relative inline-block text-white">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-500"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300 group/item">
                <FiPhone className="text-pink-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300" />
                <span className="font-mono text-sm group-hover/item:text-pink-400 transition-colors duration-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 group/item">
                <FiMail className="text-pink-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300" />
                <span className="font-sans text-sm group-hover/item:text-pink-400 transition-colors duration-300">info@fashionstore.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 group/item">
                <FiMapPin className="text-pink-400 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300" />
                <span className="font-sans text-sm group-hover/item:text-pink-400 transition-colors duration-300">123 Fashion Street, NY 10001</span>
              </li>
            </ul>
            
            {/* Newsletter Signup - Added for completeness */}
            <div className="mt-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-pink-500 text-gray-300 placeholder-gray-500 font-sans text-sm"
                />
                <button className="px-4 py-2 bg-pink-600 text-white rounded-r-lg hover:bg-pink-700 transition-all duration-300 font-sans text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Dark theme optimized */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright - Dark theme optimized */}
            <p className="font-sans text-gray-400 text-sm tracking-wide group">
              &copy; {new Date().getFullYear()} 
              <span className="mx-1 font-serif font-semibold text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                FashionStore
              </span>
              All rights reserved.
              <span className="inline-block ml-2 group-hover:scale-125 group-hover:text-pink-400 transition-all duration-300">
                ❤️
              </span>
            </p>

            {/* Payment Methods - Added for completeness */}
            <div className="flex space-x-3">
              <span className="text-gray-500 text-sm">Visa</span>
              <span className="text-gray-500 text-sm">Mastercard</span>
              <span className="text-gray-500 text-sm">PayPal</span>
              <span className="text-gray-500 text-sm">Apple Pay</span>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">Secure Shopping</span>
              <span className="text-pink-400">🔒</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;