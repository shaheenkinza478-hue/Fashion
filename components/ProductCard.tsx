'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // ← IMPORT KARO
import { FiHeart, FiEye, FiShoppingBag, FiStar } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.id % 2 === 0 && (
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            🔥 SALE
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-4 right-4 z-10 bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <FiHeart className={`text-xl ${isWishlisted ? 'fill-pink-500 text-pink-500' : 'text-gray-400'}`} />
      </button>

      {/* ✅ PRODUCT IMAGE - YAHAN FIX KARO */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
          onError={(e) => {
            // Agar image load na ho to placeholder
            e.currentTarget.src = '/placeholder.jpg';
          }}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-3 mb-6">
            <button className="bg-white p-2 rounded-full hover:scale-110 transition-all">
              <FiEye className="text-pink-600" />
            </button>
            <button className="bg-pink-600 p-2 rounded-full hover:scale-110 transition-all">
              <FiShoppingBag className="text-white" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-pink-400 uppercase font-bold bg-pink-400/10 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-500 fill-yellow-500 text-sm" />
            <span className="text-xs text-gray-400">4.5</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-white mb-1 hover:text-pink-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-400">
            ${product.price}
          </span>
          
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 hover:scale-105 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;