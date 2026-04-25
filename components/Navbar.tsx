// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiShoppingCart, 
  FiMenu, 
  FiX, 
  FiUser, 
  FiHeart,
  FiHome,
  FiGrid,
  FiInfo,
  FiMail,
  FiTag,
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);
      setCartCount(cartItems.reduce((total: number, item: any) => total + item.quantity, 0));
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Consistent nav links for both desktop and mobile
  const navLinks = [
    { href: '/', label: 'Home', icon: FiHome },
    { href: '/shop', label: 'Shop', icon: FiGrid },
    { href: '/about', label: 'About', icon: FiInfo },
    { href: '/contact', label: 'Contact', icon: FiMail },
    { href: '/wishlist', label: 'Wishlist', icon: FiHeart },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-gray-900 shadow-md border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Responsive text size */}
          <Link href="/" className="group relative flex-shrink-0">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-pink-400 to-gray-300 bg-clip-text text-transparent">
              FASHION
            </span>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-pink-400 relative ml-0.5 sm:ml-1">
              STORE
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          {/* Desktop Menu - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-pink-400 font-medium'
                      : 'text-gray-300 hover:text-pink-400'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-1 lg:space-x-2">
                    <Icon className={`text-base lg:text-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`} />
                    <span className="font-sans text-xs lg:text-sm font-medium tracking-wide">{link.label}</span>
                  </span>
                  {isActive(link.href) && (
                    <span className="absolute inset-0 bg-pink-500/10 rounded-full -z-0 animate-pulse"></span>
                  )}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pink-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                </Link>
              );
            })}

            {/* Special Offer Badge */}
            <Link
              href="/shop?category=sale"
              className="relative px-3 py-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 transition-all duration-300 hover:scale-105 group ml-1 lg:ml-2"
            >
              <span className="flex items-center space-x-1 lg:space-x-2">
                <FiTag className="text-sm lg:text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-xs lg:text-sm font-bold tracking-widest">SALE</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full animate-ping"></span>
              </span>
            </Link>
          </div>

          {/* Right Icons - Always visible, responsive spacing */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Wishlist Icon */}
            <button className="relative p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110 group">
              <FiHeart className="text-xl sm:text-2xl group-hover:fill-pink-400 transition-all duration-300" />
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-pink-600 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                0
              </span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 font-sans text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700 hidden sm:block">
                Wishlist
              </span>
            </button>

            {/* Account Icon */}
            <Link href="/account" className="relative p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110 group">
              <FiUser className="text-xl sm:text-2xl" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 font-sans text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700 hidden sm:block">
                My Account
              </span>
            </Link>
            
            {/* Cart Icon with badge */}
            <Link href="/cart" className="relative p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110 group">
              <FiShoppingCart className="text-xl sm:text-2xl" />
              {cartCount > 0 ? (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 font-sans text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700 hidden sm:block">
                Cart
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-all duration-300 ml-1"
            >
              {isOpen ? (
                <FiX className="text-xl sm:text-2xl animate-spin" />
              ) : (
                <FiMenu className="text-xl sm:text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide down animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 transform ${
                    isActive(link.href)
                      ? 'bg-pink-600/20 text-pink-400 font-medium translate-x-2'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-pink-400 hover:translate-x-2'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center space-x-3">
                    <Icon className="text-xl" />
                    <span className="font-sans text-base font-medium tracking-wide">{link.label}</span>
                  </span>
                </Link>
              );
            })}

            {/* Mobile Sale Link */}
            <Link
              href="/shop?category=sale"
              className="block py-3 px-4 rounded-lg bg-gradient-to-r from-pink-700 to-pink-800 text-white hover:from-pink-800 hover:to-pink-900 transition-all duration-300 transform hover:translate-x-2 mt-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <FiTag className="text-xl" />
                <span className="font-mono text-base font-bold tracking-widest">SALE</span>
                <span className="ml-auto text-xs bg-white text-pink-800 px-2 py-1 rounded-full font-sans">
                  New
                </span>
              </span>
            </Link>

            {/* Mobile Account & Wishlist (if not already in navLinks) */}
            <Link
              href="/account"
              className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-pink-400 hover:translate-x-2 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center space-x-3">
                <FiUser className="text-xl" />
                <span className="font-sans text-base font-medium">Account</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;