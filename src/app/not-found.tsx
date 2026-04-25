'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome, FiShoppingBag, FiArrowRight, FiAlertCircle, FiSearch } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-pink-700/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-6xl md:text-7xl font-black text-gray-700 select-none">
              Fashion Store
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FiAlertCircle className="text-6xl md:text-7xl text-pink-500 animate-pulse" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Coming Soon!
          </h1>
          <p className="font-sans text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/">
              <button className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <FiHome className="group-hover:scale-110 transition-transform" />
                Back to Home
              </button>
            </Link>
            <Link href="/shop">
              <button className="group bg-gray-800 border border-gray-700 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-pink-500 hover:text-pink-400 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <FiShoppingBag className="group-hover:scale-110 transition-transform" />
                Browse Products
              </button>
            </Link>
          </div>

          {/* Popular Categories */}
          <div className="border-t border-gray-800 pt-8">
            <h3 className="font-sans text-sm text-gray-400 mb-4">Popular Categories</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Men', 'Women', 'Accessories', 'Sale', 'New Arrivals'].map((cat, i) => (
                <Link key={i} href={`/shop?category=${cat.toLowerCase()}`}>
                  <span className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-pink-500 hover:text-pink-400 hover:scale-105 transition-all duration-300 cursor-pointer">
                    {cat}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="mt-12">
            <h3 className="font-sans text-sm text-gray-400 mb-4">You might also like</h3>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <Link key={item} href={`/product/${item}`}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square bg-gray-800 rounded-lg mb-2 overflow-hidden">
                      <Image
                        src={`/women.jpg`}
                        alt={`Product ${item}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.src = '/man.jpg'; }}
                      />
                    </div>
                    <p className="font-sans text-xs text-gray-400 group-hover:text-pink-400 transition-colors">
                      Product {item}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}