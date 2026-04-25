'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';  // ← YEH IMPORT ADD KARO
import { Product , products } from '../../../../data/products';
import Button from '../../../../components/Button';
import { 
  FiArrowLeft, FiHeart, FiShare2, FiStar, FiTruck, 
  FiShield, FiClock, FiRefreshCw, FiCheck, FiShoppingBag,
  FiTwitter, FiFacebook, FiMail, FiLink, FiChevronRight,
  FiPackage, FiAward, FiThumbsUp, FiPercent, FiGift,
  FiCamera, FiEye, FiBarChart2, FiMessageCircle,
  FiLock
} from 'react-icons/fi';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');
  const [showShare, setShowShare] = useState(false);
  const [reviews] = useState([
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      rating: 5, 
      date: '2 days ago', 
      comment: 'Absolutely love this! Quality is amazing.', 
      helpful: 24,
      image: '/p1.jpg'
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      rating: 4, 
      date: '1 week ago', 
      comment: 'Great product, fits perfectly. Will buy again.', 
      helpful: 12,
      image: '/man.jpg'
    },
    { 
      id: 3, 
      name: 'Emily Rodriguez', 
      rating: 5, 
      date: '2 weeks ago', 
      comment: 'Exceeded my expectations!', 
      helpful: 8,
      image: '/p3.jpg'
    },
  ]);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct || null);
    if (foundProduct) {
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [params.id]);

  const addToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: `/images/products/${product.id}-main.jpg`
    };

    const existingCart = localStorage.getItem('cart');
    let cart = existingCart ? JSON.parse(existingCart) : [];
    
    const existingItemIndex = cart.findIndex(
      (item: any) => item.id === product.id && item.size === selectedSize && item.color === selectedColor
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  // Generate image URLs based on product ID
  const getMainImage = () => {
    return `/images/products/${product?.id}-main.jpg`;
  };

  const getThumbImage = (index: number) => {
    return `/images/products/${product?.id}-thumb${index + 1}.jpg`;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto animate-scale-in">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <FiPackage className="text-4xl text-pink-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link href="/shop">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* ============================================ */}
        {/* SECTION 1: Breadcrumb Navigation */}
        {/* ============================================ */}
        <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in-down">
          <Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">
            Home
          </Link>
          <FiChevronRight className="text-gray-600" />
          <Link href="/shop" className="text-gray-400 hover:text-pink-400 transition-colors">
            Shop
          </Link>
          <FiChevronRight className="text-gray-600" />
          <Link href={`/shop?category=${product.category}`} className="text-gray-400 hover:text-pink-400 transition-colors capitalize">
            {product.category}
          </Link>
          <FiChevronRight className="text-gray-600" />
          <span className="text-pink-400">{product.name}</span>
        </nav>

        {/* ============================================ */}
        {/* SECTION 2: Main Product Grid - WITH ACTUAL IMAGES */}
        {/* ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Product Images */}
          <div className="space-y-4 animate-slide-in-left">
            {/* Main Image - WITH ACTUAL IMAGE */}
            <div className="relative aspect-square bg-gray-800 rounded-2xl overflow-hidden group/image">
              {/* Next.js Image Component */}
              <Image
                src={getMainImage()}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === i 
                        ? 'w-6 bg-pink-500' 
                        : 'bg-gray-500 hover:bg-pink-400'
                    }`}
                  />
                ))}
              </div>

              {/* Zoom/Hover Effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                <FiEye className="text-white text-3xl transform scale-0 group-hover/image:scale-100 transition-transform duration-500" />
              </div>
            </div>

            {/* Thumbnail Grid - WITH ACTUAL THUMBNAILS */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((thumbIndex) => (
                <div
                  key={thumbIndex}
                  className={`relative aspect-square bg-gray-700 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden ${
                    activeImage === thumbIndex ? 'ring-2 ring-pink-500' : ''
                  }`}
                  onClick={() => setActiveImage(thumbIndex)}
                >
                  <Image
                    src={getThumbImage(thumbIndex)}
                    alt={`${product.name} - View ${thumbIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 150px"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-thumb.jpg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Title & Actions */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`text-sm ${
                          i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-1">(24 reviews)</span>
                  </div>
                  <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FiHeart
                    className={`text-xl transition-all duration-300 group-hover:scale-110 ${
                      isWishlisted ? 'fill-pink-500 text-pink-500' : 'text-gray-400'
                    }`}
                  />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowShare(!showShare)}
                    className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <FiShare2 className="text-xl text-gray-400 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  {/* Share Dropdown */}
                  {showShare && (
                    <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl p-2 z-50 animate-scale-in">
                      <div className="flex gap-2">
                        <FiTwitter className="text-gray-400 hover:text-blue-400 hover:scale-110 cursor-pointer transition-all" />
                        <FiFacebook className="text-gray-400 hover:text-blue-600 hover:scale-110 cursor-pointer transition-all" />
                        <FiMail className="text-gray-400 hover:text-pink-400 hover:scale-110 cursor-pointer transition-all" />
                        <FiLink className="text-gray-400 hover:text-green-400 hover:scale-110 cursor-pointer transition-all" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-pink-400">
                ${product.price}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* ============================================ */}
            {/* SECTION 3: Key Features */}
            {/* ============================================ */}
            <div className="grid grid-cols-2 gap-3 py-4">
              {[
                { icon: FiTruck, text: 'Free Shipping' },
                { icon: FiRefreshCw, text: '30-Day Returns' },
                { icon: FiShield, text: '2-Year Warranty' },
                { icon: FiAward, text: 'Premium Quality' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon className="text-pink-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* ============================================ */}
            {/* SECTION 4: Size Selection */}
            {/* ============================================ */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-white">Select Size</h3>
                <button className="text-sm text-pink-400 hover:text-pink-300">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border-2 rounded-xl font-medium transition-all duration-300 hover:scale-110 ${
                      selectedSize === size
                        ? 'border-pink-500 bg-pink-500 text-white'
                        : 'border-gray-700 text-gray-400 hover:border-pink-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ============================================ */}
            {/* SECTION 5: Color Selection */}
            {/* ============================================ */}
            <div>
              <h3 className="font-semibold text-white mb-3">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`group relative px-6 py-3 border-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-pink-500 bg-pink-500 text-white'
                        : 'border-gray-700 text-gray-400 hover:border-pink-400'
                    }`}
                  >
                    {color}
                    {selectedColor === color && (
                      <FiCheck className="absolute -top-2 -right-2 text-white bg-pink-600 rounded-full p-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ============================================ */}
            {/* SECTION 6: Quantity & Add to Cart */}
            {/* ============================================ */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center border-2 border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  -
                </button>
                <span className="w-16 h-12 bg-gray-800 text-white flex items-center justify-center font-mono border-x-2 border-gray-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  +
                </button>
              </div>

              <Button
                onClick={addToCart}
                className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 h-12 text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiShoppingBag className="group-hover:rotate-12 transition-transform" />
                  Add to Cart
                </span>
              </Button>
            </div>

            {/* Success Message */}
            {addedToCart && (
              <div className="animate-slide-in-right">
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl flex items-center gap-3">
                  <FiCheck className="text-green-400 text-xl" />
                  <span className="text-green-400">Added to cart successfully!</span>
                </div>
              </div>
            )}

            {/* ============================================ */}
            {/* SECTION 7: Delivery Info */}
            {/* ============================================ */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800">
              <div className="flex items-start gap-3">
                <FiPackage className="text-pink-400 text-xl mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Free Delivery</p>
                  <p className="text-xs text-gray-500">Enter your postal code</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiRefreshCw className="text-pink-400 text-xl mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 8: Tabs (Details, Specs, Reviews) */}
        {/* ============================================ */}
        <div className="mb-16 animate-fade-in-up">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-800 mb-6">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-all duration-300 relative ${
                  selectedTab === tab
                    ? 'text-pink-400'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
                {selectedTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            {selectedTab === 'description' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-white">Product Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {product.description}. This premium product is crafted with the finest materials
                  and attention to detail. Perfect for any occasion, it combines style with comfort
                  and durability.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Premium quality materials</li>
                  <li>Designed for comfort and style</li>
                  <li>Easy to care and maintain</li>
                  <li>Perfect for everyday wear</li>
                </ul>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-white">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Material', value: '100% Cotton' },
                    { label: 'Fit', value: 'Regular' },
                    { label: 'Care', value: 'Machine Wash' },
                    { label: 'Origin', value: 'Imported' },
                    { label: 'Style', value: 'Casual' },
                    { label: 'Season', value: 'All Season' },
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-400">{spec.label}:</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Customer Reviews</h3>
                  <button className="text-pink-400 hover:text-pink-300 text-sm">
                    Write a Review
                  </button>
                </div>

                {/* Reviews List - WITH REVIEWER IMAGES */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 bg-gray-800 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          {/* Reviewer Image */}
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={review.image}
                              alt={review.name}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '/images/avatar-placeholder.jpg';
                              }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-white">{review.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <FiStar
                                    key={i}
                                    className={`text-sm ${
                                      i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-500 hover:text-pink-400 text-sm flex items-center gap-1">
                          <FiThumbsUp />
                          {review.helpful}
                        </button>
                      </div>
                      <p className="text-gray-300 text-sm ml-14">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 9: Related Products - WITH IMAGES */}
        {/* ============================================ */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-pink-500 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-square bg-gray-700">
                    <Image
                      src={`/images/products/${relatedProduct.id}-main.jpg`}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white group-hover:text-pink-400 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-pink-400 font-bold mt-1">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* SECTION 10: Recently Viewed */}
        {/* ============================================ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Recently Viewed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-800 rounded-lg mb-2 overflow-hidden">
                  <Image
                    src={`/images/products/${item}-main.jpg`}
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

        {/* ============================================ */}
        {/* SECTION 11: Newsletter Signup */}
        {/* ============================================ */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Stay in the Loop
          </h3>
          <p className="text-pink-100 mb-6 max-w-md mx-auto">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-pink-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}