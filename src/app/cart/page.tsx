'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiTrash2, FiArrowLeft, FiShoppingBag, FiTruck, 
  FiShield, FiClock, FiGift, FiPercent, FiStar,
  FiHeart, FiTag, FiCreditCard, FiCheckCircle,
  FiAlertCircle, FiPackage, FiMapPin, FiCalendar
} from 'react-icons/fi';
import Button from '../../../components/Button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  useEffect(() => {
    loadCart();
    calculateDelivery();
  }, []);

  const loadCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const items = JSON.parse(cart);
      setCartItems(items);
      calculateSubtotal(items);
    }
    
    const saved = localStorage.getItem('savedItems');
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
  };

  const calculateSubtotal = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const calculateDelivery = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 5));
    setEstimatedDelivery(deliveryDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    }));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  const saveForLater = (item: CartItem) => {
    const cartIndex = cartItems.findIndex(i => i.id === item.id);
    if (cartIndex !== -1) {
      removeItem(cartIndex);
      const updatedSaved = [...savedItems, item];
      setSavedItems(updatedSaved);
      localStorage.setItem('savedItems', JSON.stringify(updatedSaved));
    }
  };

  const moveToCart = (item: CartItem) => {
    const savedIndex = savedItems.findIndex(i => i.id === item.id);
    if (savedIndex !== -1) {
      const updatedSaved = savedItems.filter((_, i) => i !== savedIndex);
      setSavedItems(updatedSaved);
      localStorage.setItem('savedItems', JSON.stringify(updatedSaved));
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      calculateSubtotal(updatedCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setSubtotal(0);
    setPromoApplied(false);
    setPromoDiscount(0);
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE20') {
      setPromoApplied(true);
      setPromoDiscount(subtotal * 0.2);
      setShowPromoInput(false);
    } else if (promoCode.toUpperCase() === 'FASHION10') {
      setPromoApplied(true);
      setPromoDiscount(subtotal * 0.1);
      setShowPromoInput(false);
    } else {
      alert('Invalid promo code');
    }
  };

  const shippingCost = shippingMethod === 'express' ? 15 : 
                      shippingMethod === 'nextday' ? 25 : 0;
  const total = subtotal - promoDiscount + shippingCost;

  const getShippingDate = () => {
    const today = new Date();
    let days = shippingMethod === 'express' ? 3 : 
               shippingMethod === 'nextday' ? 1 : 5;
    const delivery = new Date(today.setDate(today.getDate() + days));
    return delivery.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (cartItems.length === 0 && savedItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full flex items-center justify-center animate-pulse-slow">
                <FiShoppingBag className="text-6xl text-pink-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white animate-bounce">
                0
              </div>
            </div>

            <h1 className="font-playfair text-4xl font-black mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                Your Cart is Empty
              </span>
            </h1>
            <p className="font-sans text-gray-400 mb-8 animate-fade-in-up animation-delay-200">
              Looks like you haven't added anything to your cart yet.
            </p>
            
            <Link href="/shop">
              <Button variant="primary" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                Continue Shopping
              </Button>
            </Link>

            <div className="mt-12">
              <h3 className="font-sans text-sm text-gray-400 mb-4">You might like</h3>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group cursor-pointer">
                    <div className="relative aspect-square bg-gray-800 rounded-lg mb-2 overflow-hidden group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={`/women.jpg`}
                        alt={`Product ${item}`}
                        fill
                        className="object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
                      />
                    </div>
                    <p className="font-sans text-xs text-gray-300">Product {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* SECTION 1: Header */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-black mb-2">
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Shopping Cart
                </span>
              </h1>
              <p className="font-sans text-gray-400">
                You have <span className="text-pink-400 font-semibold">{cartItems.length} items</span> in your cart
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Cart</span>
              </div>
              <FiArrowLeft className="text-gray-600 rotate-180" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span className="text-sm text-gray-500">Checkout</span>
              </div>
              <FiArrowLeft className="text-gray-600 rotate-180" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span className="text-sm text-gray-500">Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Free Shipping Progress Bar */}
        {subtotal < 50 && (
          <div className="mb-6 bg-gray-800/50 border border-gray-700 rounded-xl p-4 animate-slide-in-right">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300 flex items-center gap-2">
                <FiTruck className="text-pink-400" />
                Add ${(50 - subtotal).toFixed(2)} more for FREE shipping
              </span>
              <span className="text-xs text-pink-400">{((subtotal / 50) * 100).toFixed(0)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-1000"
                style={{ width: `${(subtotal / 50) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* SECTION 3: Main Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center text-sm text-gray-400 border-b border-gray-700 pb-2">
              <span>Product</span>
              <div className="flex gap-8">
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>
            </div>

            {/* Cart Items - WITH IMAGES */}
            {cartItems.map((item, index) => (
              <div key={index} className="group bg-gray-800/30 border border-gray-700 rounded-xl p-4 hover:border-pink-500 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* PRODUCT IMAGE */}
                  <div className="relative w-24 h-24 bg-gray-700 rounded-xl overflow-hidden">
                    <Image
                      src={item.image || '/images/placeholder.jpg'}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-montserrat font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                        Size: {item.size}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                        Color: {item.color}
                      </span>
                    </div>
                    <p className="font-raleway text-lg font-bold text-pink-400 mt-2">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300">-</button>
                      <span className="w-10 h-8 bg-gray-800 text-white flex items-center justify-center font-mono">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300">+</button>
                    </div>
                    <p className="font-raleway font-bold text-white w-20 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex gap-1">
                      <button onClick={() => saveForLater(item)}
                        className="p-2 text-gray-400 hover:text-pink-400 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110">
                        <FiHeart />
                      </button>
                      <button onClick={() => removeItem(index)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-700">
              <Link href="/shop" className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors group">
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Continue Shopping
              </Link>
              <button onClick={clearCart} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group">
                <FiTrash2 className="group-hover:scale-110 transition-transform" />
                Clear Cart
              </button>
            </div>

            {/* SECTION 4: Saved for Later - WITH IMAGES */}
            {savedItems.length > 0 && (
              <div className="mt-8">
                <h3 className="font-montserrat text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiHeart className="text-pink-400" />
                  Saved for Later ({savedItems.length})
                </h3>
                <div className="space-y-3">
                  {savedItems.map((item, index) => (
                    <div key={index} className="bg-gray-800/20 border border-gray-700 rounded-xl p-3 hover:border-pink-500 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        {/* SAVED ITEM IMAGE */}
                        <div className="relative w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={item.image || '/images/placeholder.jpg'}
                            alt={item.name}
                            fill
                            className="object-cover"
                            onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-montserrat font-bold text-white text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-400">${item.price}</p>
                        </div>
                        <button onClick={() => moveToCart(item)}
                          className="px-3 py-1 bg-pink-600 text-white text-sm rounded-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105">
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 5: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sticky top-24">
              <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <FiShoppingBag className="text-pink-400" />
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount (20%)</span>
                    <span className="font-mono">-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="font-mono">{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span className="font-raleway text-pink-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* SECTION 6: Promo Code */}
              <div className="mb-4">
                {!showPromoInput && !promoApplied ? (
                  <button onClick={() => setShowPromoInput(true)} className="text-pink-400 hover:text-pink-300 text-sm flex items-center gap-1 group">
                    <FiPercent className="group-hover:rotate-12 transition-transform" />
                    Have a promo code?
                  </button>
                ) : showPromoInput && !promoApplied ? (
                  <div className="flex gap-2 animate-fade-in">
                    <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code" className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white" />
                    <button onClick={applyPromoCode} className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300">
                      Apply
                    </button>
                  </div>
                ) : promoApplied && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-2 rounded-lg">
                    <FiCheckCircle /><span className="text-sm">Promo applied! You saved ${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* SECTION 7: Shipping Options */}
              <div className="mb-4">
                <h3 className="font-sans text-sm font-medium text-gray-300 mb-2">Shipping Method</h3>
                <div className="space-y-2">
                  {[
                    { id: 'standard', label: 'Standard', time: '5-7 days', cost: 0, icon: FiPackage },
                    { id: 'express', label: 'Express', time: '2-3 days', cost: 15, icon: FiTruck },
                    { id: 'nextday', label: 'Next Day', time: 'Tomorrow', cost: 25, icon: FiClock },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <label key={method.id} className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                        shippingMethod === method.id ? 'border-pink-500 bg-pink-600/10' : 'border-gray-700 hover:border-gray-600'
                      }`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" name="shipping" value={method.id} checked={shippingMethod === method.id}
                            onChange={(e) => setShippingMethod(e.target.value)} className="w-4 h-4 text-pink-500 bg-gray-700 border-gray-600 focus:ring-pink-500" />
                          <Icon className={`text-lg ${shippingMethod === method.id ? 'text-pink-400' : 'text-gray-400'}`} />
                          <div><p className="text-sm font-medium text-white">{method.label}</p><p className="text-xs text-gray-400">{method.time}</p></div>
                        </div>
                        <span className="text-sm font-mono text-white">{method.cost === 0 ? 'Free' : `$${method.cost}`}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 8: Delivery Estimate */}
              <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <FiCalendar className="text-pink-400" />
                  <span className="text-gray-300">Estimated delivery:</span>
                  <span className="text-white font-semibold">{getShippingDate()}</span>
                </div>
              </div>

              {/* SECTION 9: Checkout Button */}
              <Button className="w-full mb-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 group">
                <span className="flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <FiArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* SECTION 10: Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[
                  { icon: FiShield, text: 'Secure Payment' },
                  { icon: FiTruck, text: 'Free Shipping' },
                  { icon: FiClock, text: '24/7 Support' },
                ].map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-8 h-8 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-1 group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-gray-400 group-hover:text-white text-sm" />
                      </div>
                      <p className="text-xs text-gray-500 group-hover:text-pink-400 transition-colors">{badge.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* SECTION 11: Payment Methods */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 text-center mb-2">We accept</p>
                <div className="flex justify-center gap-3">
                  <FiCreditCard className="text-gray-500 hover:text-pink-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                  <FiTag className="text-gray-500 hover:text-pink-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                  <FiGift className="text-gray-500 hover:text-pink-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 12: You Might Also Like - WITH IMAGES */}
        <div className="mt-16">
          <h2 className="font-playfair text-2xl font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-800 rounded-xl mb-2 overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <Image
                    src={`/images/products/${item}-main.jpg`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                    onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
                  />
                </div>
                <p className="font-sans text-sm text-white group-hover:text-pink-400 transition-colors">Product {item}</p>
                <p className="text-xs text-pink-400">$49.99</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}