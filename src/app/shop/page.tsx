'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// ✅ FIX: Sahi path use karo - apne folder ke hisab se
import { products } from '../../../data/products';  // Option A
// import { products } from '@/data/products';      // Option C (agar alias set hai)

import ProductCard from '../../../components/ProductCard';
import { 
  FiGrid, FiList, FiFilter, FiX, FiChevronDown,
  FiSearch, FiSliders, FiArrowUp, FiHeart,
  FiStar, FiTruck, FiShield, FiClock,
  FiTag, FiPercent, FiGift, FiAward
} from 'react-icons/fi';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const categories = ['all', 'men', 'women', 'accessories', 'sale'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Pink', 'Gray', 'Brown'];

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    // Size filter
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) return false;
    
    // Color filter
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) return false;
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0;
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 200]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* SECTION 1: Header */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  Shop Collection
                </span>
              </h1>
              <p className="text-gray-400">
                Showing <span className="text-pink-400 font-semibold">{filteredProducts.length}</span> products
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Search Bar */}
        <div className="mb-6 animate-slide-in-right">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-400"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* SECTION 3: Filter Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-pink-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="default">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>

        {/* SECTION 4: Products Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <FiSliders className="text-pink-400" />
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-pink-400 hover:text-pink-300"
                >
                  Clear all
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-pink-500"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`w-10 h-10 border rounded-lg transition-all duration-300 hover:scale-110 ${
                        selectedSizes.includes(size)
                          ? 'border-pink-500 bg-pink-500 text-white'
                          : 'border-gray-700 text-gray-400 hover:border-pink-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">Colors</h4>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1 border rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
                        selectedColors.includes(color)
                          ? 'border-pink-500 bg-pink-500 text-white'
                          : 'border-gray-700 text-gray-400 hover:border-pink-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FiTag className="text-5xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 5: Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 animate-fade-in">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 ${
                  currentPage === page
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-pink-400'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* SECTION 6: Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 hover:scale-110 transition-all duration-300 animate-bounce z-50"
          >
            <FiArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}