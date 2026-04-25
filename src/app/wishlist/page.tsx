'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiHeart, FiShoppingBag, FiTrash2, FiArrowLeft,
  FiShare2, FiStar, FiTruck, FiShield, FiClock,
  FiGift, FiPercent, FiTag, FiEye, FiPlus,
  FiChevronRight, FiBell, FiTwitter, FiFacebook,
  FiMail, FiLink, FiShoppingCart
} from 'react-icons/fi';

// Mock data for wishlist items
const mockWishlistItems = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    category: 'Men',
    image: '/man.jpg',      // 📍 IMAGE 1
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    addedDate: '2024-03-10'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    category: 'Men',
    image: '/white.jpg',        // 📍 IMAGE 2
    rating: 4.8,
    reviews: 95,
    inStock: true,
    sizes: ['30', '32', '34', '36'],
    colors: ['Blue', 'Black'],
    addedDate: '2024-03-09'
  },
  {
    id: 3,
    name: 'Floral Summer Dress',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    category: 'Women',
    image: '/herobg.jpg',        // 📍 IMAGE 3
    rating: 4.9,
    reviews: 156,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pink', 'Blue', 'Yellow'],
    addedDate: '2024-03-08'
  },
  {
    id: 4,
    name: 'Leather Jacket',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    category: 'Women',
    image: '/li.jpg',       // 📍 IMAGE 4
    rating: 4.7,
    reviews: 67,
    inStock: false,
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Brown'],
    addedDate: '2024-03-07'
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    category: 'Men',
    image: '/running.jpg',        // 📍 IMAGE 5
    rating: 4.6,
    reviews: 203,
    inStock: true,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black/Red', 'Blue/White'],
    addedDate: '2024-03-06'
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    category: 'Women',
    image: '/woo.jpg',     // 📍 IMAGE 6
    rating: 4.4,
    reviews: 82,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Navy', 'Burgundy'],
    addedDate: '2024-03-05'
  }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [showShareModal, setShowShareModal] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  // Select all items
  const selectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map(item => item.id));
    }
  };

  // Select single item
  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    showNotification('Item removed from wishlist');
  };

  // Remove selected items
  const removeSelected = () => {
    setWishlistItems(wishlistItems.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    showNotification('Selected items removed from wishlist');
  };

  // Add to cart
  const addToCart = (id: number) => {
    showNotification('Item added to cart!');
    // Here you would also update cart in localStorage
  };

  // Add all to cart
  const addAllToCart = () => {
    showNotification('All items added to cart!');
  };

  // Show notification
  const showNotification = (message: string) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 3000);
  };

  // Sort items
  const sortedItems = [...wishlistItems].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'discount') return b.discount - a.discount;
    if (sortBy === 'newest') return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    return 0;
  });

  const totalSavings = wishlistItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-pink-700/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in-right">
          {notification.message}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 relative animate-scale-in">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 hover:scale-110 transition-all"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4">Share Wishlist</h3>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value="https://fashionstore.com/wishlist/share/abc123"
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://fashionstore.com/wishlist/share/abc123');
                    showNotification('Link copied!');
                  }}
                  className="px-4 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-all"
                >
                  <FiLink />
                </button>
              </div>
              
              <div className="flex justify-center gap-4">
                <button className="p-3 bg-gray-700 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all">
                  <FiFacebook size={20} />
                </button>
                <button className="p-3 bg-gray-700 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white hover:scale-110 transition-all">
                  <FiTwitter size={20} />
                </button>
                <button className="p-3 bg-gray-700 rounded-full text-pink-400 hover:bg-pink-600 hover:text-white hover:scale-110 transition-all">
                  <FiHeart size={20} />
                </button>
                <button className="p-3 bg-gray-700 rounded-full text-gray-400 hover:bg-pink-600 hover:text-white hover:scale-110 transition-all">
                  <FiMail size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* SECTION 1: Header with Stats */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Home
                </Link>
                <FiChevronRight className="text-gray-600" />
                <span className="text-pink-400">Wishlist</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  My Wishlist
                </span>
              </h1>
              <p className="text-gray-400">
                You have <span className="text-pink-400 font-semibold">{wishlistItems.length}</span> items saved
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 group"
              >
                <FiShare2 className="group-hover:scale-110 transition-transform" />
                Share
              </button>
              {selectedItems.length > 0 && (
                <button
                  onClick={removeSelected}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 hover:scale-105 transition-all duration-300"
                >
                  <FiTrash2 />
                  Remove ({selectedItems.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FiHeart, label: 'Total Items', value: wishlistItems.length, color: 'from-pink-500 to-pink-600' },
            { icon: FiTag, label: 'Total Value', value: `$${wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(0)}+`, color: 'from-pink-600 to-pink-700' },
            { icon: FiPercent, label: 'Total Savings', value: `$${totalSavings}`, color: 'from-pink-700 to-pink-800' },
            { icon: FiShoppingBag, label: 'In Stock', value: wishlistItems.filter(i => i.inStock).length, color: 'from-pink-800 to-pink-900' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="text-white text-lg" />
                </div>
                <div className="font-bold text-2xl text-white group-hover:text-pink-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* SECTION 3: Controls Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          {/* Select All */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedItems.length === wishlistItems.length && wishlistItems.length > 0}
              onChange={selectAll}
              className="w-5 h-5 text-pink-500 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
            />
            <span className="text-gray-300 group-hover:text-pink-400 transition-colors">
              Select All ({selectedItems.length}/{wishlistItems.length})
            </span>
          </label>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                <FiTag />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                <FiShoppingBag />
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="discount">Biggest Discount</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 4: Wishlist Items Grid/List - WITH ACTUAL IMAGES */}
        {/* ============================================ */}
        {wishlistItems.length > 0 ? (
          <div className={`grid ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'grid-cols-1 gap-4'
          }`}>
            {sortedItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-pink-500 transition-all duration-500 ${
                  viewMode === 'grid' ? 'hover:-translate-y-2' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Checkbox */}
                <div className="absolute top-4 left-4 z-10">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelectItem(item.id)}
                    className="w-5 h-5 text-pink-500 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                  />
                </div>

                {/* Discount Badge */}
                {item.discount > 0 && (
                  <div className="absolute top-4 right-12 z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{item.discount}%
                  </div>
                )}

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 z-10 p-1.5 bg-gray-800 rounded-full text-gray-400 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FiTrash2 size={16} />
                </button>

                {/* Out of Stock Overlay */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* 📍 IMAGE - Product Image with Next/Image */}
                <div className="relative aspect-square bg-gray-700">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="p-3 bg-white rounded-full text-pink-600 hover:scale-110 transition-transform"
                    >
                      <FiShoppingCart />
                    </button>
                    <button className="p-3 bg-white rounded-full text-pink-600 hover:scale-110 transition-transform">
                      <FiEye />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category & Rating */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-pink-400 font-semibold bg-pink-400/10 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-500 fill-yellow-500 text-sm" />
                      <span className="text-xs text-gray-400">{item.rating}</span>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-pink-400">
                      ${item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Sizes */}
                  {viewMode === 'list' && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-400 mb-1">Available Sizes:</p>
                      <div className="flex gap-1">
                        {item.sizes.map(size => (
                          <span key={size} className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full mt-2 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiShoppingBag />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <FiHeart className="text-4xl text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Your wishlist is empty</h3>
            <p className="text-gray-400 mb-8">Save items you love and they'll appear here</p>
            <Link href="/shop">
              <button className="px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 hover:scale-105 transition-all duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* ============================================ */}
        {/* SECTION 5: Recently Viewed - WITH IMAGES */}
        {/* ============================================ */}
        {wishlistItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Recently Viewed</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group cursor-pointer">
                  {/* 📍 IMAGE - Recently Viewed */}
                  <div className="relative aspect-square bg-gray-800 rounded-lg mb-2 overflow-hidden">
                    <Image
                      src={`/men.jpg`}
                      alt={`Product ${item}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-pink-400 transition-colors">
                    Product {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* SECTION 6: Recommendations - WITH IMAGES */}
        {/* ============================================ */}
        {wishlistItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group bg-gray-800/30 border border-gray-700 rounded-xl p-4 hover:border-pink-500 hover:scale-105 transition-all duration-500">
                  {/* 📍 IMAGE - Recommended Product */}
                  <div className="relative aspect-square bg-gray-700 rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={`/p2.jpg`}
                      alt={`Recommended Product ${item}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/p1.jpg';
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                    Recommended Product {item}
                  </h3>
                  <p className="text-pink-400 font-bold mt-1">$49.99</p>
                  <button className="mt-2 text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}