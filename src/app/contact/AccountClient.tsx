'use client';

import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import { 
  FiUser, FiPackage, FiHeart, FiLogOut, FiShoppingBag,
  FiStar, FiClock, FiTruck, FiAward, FiGift, FiCreditCard,
  FiMapPin, FiBell, FiSettings, FiHelpCircle, FiMail,
  FiPhone, FiCamera, FiEdit2, FiCheckCircle, FiTrendingUp,
  FiDollarSign, FiPercent, FiShield, FiCalendar, FiTag,
  FiGift as FiGiftIcon, FiFacebook, FiTwitter, FiInstagram,
  FiGithub, FiLock  // ← YEH ADD KARO
} from 'react-icons/fi';

export default function AccountClient() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [loading, setLoading] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showRegister, setShowRegister] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            {/* Logo/Header with Animation */}
            <div className="text-center mb-8 animate-fade-in-down">
              <div className="relative inline-block">
                <h1 className="font-playfair text-5xl font-black mb-2">
                  <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                    Welcome Back
                  </span>
                </h1>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full animate-width-infinite"></div>
              </div>
              <p className="font-sans text-gray-400 mt-4 animate-fade-in animation-delay-200">
                {!showRegister ? 'Sign in to your account' : 'Create your account'}
              </p>
            </div>
            
            {!showRegister ? (
              // Enhanced Login Form with Animation
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiUser className="text-pink-400" />
                  Login
                </h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-4 animate-slide-in-left animation-delay-100">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative group">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 animate-slide-in-left animation-delay-200">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative group">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 animate-slide-in-left animation-delay-300">
                    <label className="flex items-center group cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-pink-500 bg-gray-700 border-gray-600 rounded focus:ring-pink-500 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-pink-400 transition-colors">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-pink-400 hover:text-pink-300 transition-colors hover:scale-105 inline-block">
                      Forgot password?
                    </a>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={loading}
                    className="w-full mb-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-400"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                  
                  <p className="text-center text-gray-400 animate-fade-in animation-delay-500">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setShowRegister(true)}
                      className="text-pink-400 font-semibold hover:text-pink-300 transition-colors hover:scale-105 inline-block"
                    >
                      Register
                    </button>
                  </p>
                </form>
              </div>
            ) : (
              // Enhanced Register Form with Animation
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiUser className="text-pink-400" />
                  Create Account
                </h2>
                <form onSubmit={handleRegister}>
                  <div className="mb-4 animate-slide-in-right animation-delay-100">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name
                    </label>
                    <div className="relative group">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="text"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 animate-slide-in-right animation-delay-200">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative group">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 animate-slide-in-right animation-delay-300">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative group">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6 animate-slide-in-right animation-delay-400">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pink-400 transition-colors" />
                      <input
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-pink-400"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 animate-slide-in-right animation-delay-500">
                    <label className="flex items-center group cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-pink-500 bg-gray-700 border-gray-600 rounded focus:ring-pink-500 transition-transform duration-300 group-hover:scale-110"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-pink-400 transition-colors">
                        I agree to the{' '}
                        <a href="#" className="text-pink-400 hover:text-pink-300">Terms of Service</a>
                      </span>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={loading}
                    className="w-full mb-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 animate-slide-in-right animation-delay-600"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                  
                  <p className="text-center text-gray-400 animate-fade-in animation-delay-700">
                    Already have an account?{' '}
                    <button
                      onClick={() => setShowRegister(false)}
                      className="text-pink-400 font-semibold hover:text-pink-300 transition-colors hover:scale-105 inline-block"
                    >
                      Sign In
                    </button>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Logged in view with multiple sections
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* ============================================ */}
        {/* SECTION 1: Welcome Header with Animations */}
        {/* ============================================ */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-black mb-2">
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  My Account
                </span>
              </h1>
              <p className="font-sans text-gray-400 text-lg">
                Welcome back, <span className="text-pink-400 font-semibold animate-pulse-slow inline-block">John Doe</span>! 
                <span className="ml-2 text-sm bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full animate-bounce inline-block">
                  Premium Member
                </span>
              </p>
            </div>
            
            {/* Notification Bell with Badge */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <FiBell className="text-2xl text-gray-400 group-hover:text-pink-400 group-hover:scale-125 transition-all duration-300 cursor-pointer" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              
              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 animate-scale-in">
                  <div className="p-3 border-b border-gray-700">
                    <p className="text-white font-semibold">Notifications</p>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-gray-400">Your order #2345 has been shipped</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                  <div className="p-3 border-t border-gray-700">
                    <button className="text-pink-400 text-sm hover:text-pink-300">View all</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 2: Stats Cards with Animations */}
        {/* ============================================ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FiShoppingBag, label: 'Total Orders', value: '24', color: 'from-pink-500 to-pink-600', change: '+12%' },
            { icon: FiDollarSign, label: 'Total Spent', value: '$1,249', color: 'from-pink-600 to-pink-700', change: '+8%' },
            { icon: FiStar, label: 'Loyalty Points', value: '450', color: 'from-pink-700 to-pink-800', change: '+5%' },
            { icon: FiPercent, label: 'Discounts', value: '3', color: 'from-pink-800 to-pink-900', change: 'active' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="text-white text-lg" />
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="font-raleway text-2xl font-black text-white mb-1 group-hover:text-pink-400 transition-colors">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-gray-400 group-hover:text-pink-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================ */}
        {/* SECTION 3: Currency & Preferences */}
        {/* ============================================ */}
        <div className="mb-6 flex flex-wrap gap-3 animate-slide-in-right">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-2 flex items-center gap-2">
            <span className="text-sm text-gray-400 ml-2">Currency:</span>
            {['USD', 'EUR', 'GBP'].map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
                className={`px-3 py-1 rounded-lg transition-all duration-300 hover:scale-110 ${
                  selectedCurrency === currency
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                {currency}
              </button>
            ))}
          </div>
          
          {/* Gift Coupon Button */}
          <button 
            onClick={() => setShowCoupon(!showCoupon)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-pink-500 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 flex items-center gap-2 group-hover:border-pink-500 transition-all duration-300">
              <FiGiftIcon className="text-pink-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <span className="text-sm text-gray-300">Gift Coupon</span>
            </div>
            {showCoupon && (
              <div className="absolute top-12 right-0 bg-gray-800 border border-pink-500 rounded-lg p-3 w-48 animate-scale-in z-50">
                <p className="text-white text-sm font-bold">SAVE20</p>
                <p className="text-xs text-gray-400">20% off your next order</p>
              </div>
            )}
          </button>
        </div>

        {/* ============================================ */}
        {/* SECTION 4: Main Grid with Sidebar */}
        {/* ============================================ */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Enhanced */}
          <div className="md:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sticky top-24 animate-slide-in-left">
              {/* Profile Summary */}
              <div className="relative mb-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="relative flex items-center space-x-4 p-4 bg-gray-800 rounded-xl border border-gray-700 transform group-hover:scale-105 transition-all duration-500">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse-slow">
                      JD
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-800 hover:bg-pink-600 hover:scale-110 transition-all duration-300">
                      <FiCamera className="text-xs text-gray-300" />
                    </button>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-white">John Doe</p>
                    <p className="font-sans text-sm text-gray-400">Premium Member</p>
                    <div className="flex items-center mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <FiStar key={star} className={`text-xs ${star <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'} hover:scale-125 transition-transform`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: FiUser },
                  { id: 'orders', label: 'My Orders', icon: FiPackage, badge: 3 },
                  { id: 'wishlist', label: 'Wishlist', icon: FiHeart, badge: 5 },
                  { id: 'profile', label: 'Profile Settings', icon: FiSettings },
                  { id: 'addresses', label: 'Addresses', icon: FiMapPin },
                  { id: 'payments', label: 'Payment Methods', icon: FiCreditCard },
                  { id: 'notifications', label: 'Notifications', icon: FiBell, badge: notifications },
                  { id: 'rewards', label: 'Rewards', icon: FiAward },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group animate-fade-in-right ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white'
                          : 'text-gray-400 hover:bg-gray-700 hover:text-pink-400'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center space-x-3">
                        <Icon className={`text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                          activeTab === item.id ? 'text-white' : ''
                        }`} />
                        <span className="font-sans text-sm font-medium">{item.label}</span>
                      </span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full transition-all duration-300 group-hover:scale-110 ${
                          activeTab === item.id
                            ? 'bg-white text-pink-700'
                            : 'bg-gray-600 text-white'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:scale-105 transition-all duration-300 mt-4 group"
                >
                  <FiLogOut className="text-lg group-hover:rotate-12 transition-transform" />
                  <span className="font-sans text-sm font-medium">Logout</span>
                </button>
              </nav>

              {/* Social Links */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 mb-2">Connect with us</p>
                <div className="flex gap-2">
                  {[FiFacebook, FiTwitter, FiInstagram, FiGithub].map((Icon, index) => (
                    <a key={index} href="#" className="p-2 bg-gray-700 rounded-lg text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 5: Main Content Area */}
          {/* ============================================ */}
          <div className="md:col-span-3 space-y-6">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Recent Activity */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                  <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <FiTrendingUp className="text-pink-400" />
                    Dashboard
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group p-6 bg-gray-700/30 rounded-xl border border-gray-700 hover:border-pink-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                      <FiPackage className="text-3xl mb-3 text-pink-400 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                      <h3 className="font-montserrat font-bold mb-2 text-white">Recent Orders</h3>
                      <p className="font-sans text-gray-400 mb-4">You have 3 recent orders</p>
                      <button className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 group/btn">
                        View All 
                        <FiTrendingUp className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                    <div className="group p-6 bg-gray-700/30 rounded-xl border border-gray-700 hover:border-pink-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                      <FiHeart className="text-3xl mb-3 text-pink-400 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                      <h3 className="font-montserrat font-bold mb-2 text-white">Wishlist</h3>
                      <p className="font-sans text-gray-400 mb-4">You have 5 items saved</p>
                      <button className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 group/btn">
                        View Wishlist
                        <FiTrendingUp className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Orders Preview */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-slide-in-right">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-montserrat font-bold text-white">Recent Orders</h3>
                    <span className="text-pink-400 text-sm cursor-pointer hover:text-pink-300 hover:scale-105 transition-all duration-300">View All →</span>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 hover:scale-102 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <FiPackage className="text-pink-400" />
                          </div>
                          <div>
                            <p className="font-sans font-medium text-white">Order #{order}2345</p>
                            <p className="text-xs text-gray-400">March {order}, 2024</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-sans font-bold text-white">$129.99</p>
                          <span className="text-xs text-green-400">Delivered</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-fade-in">
                  <h3 className="font-montserrat font-bold text-white mb-4">Recommended for You</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="group cursor-pointer">
                        <div className="aspect-square bg-gray-700 rounded-xl mb-2 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-300"></div>
                        <p className="font-sans text-sm text-white group-hover:text-pink-400 transition-colors">Product {item}</p>
                        <p className="text-xs text-pink-400">$49.99</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiPackage className="text-pink-400" />
                  Order History
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((order) => (
                    <div key={order} className="group p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 hover:scale-102 hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="flex flex-wrap justify-between items-start">
                        <div>
                          <p className="font-montserrat font-bold text-white">Order #FNS{order}2345{order}</p>
                          <p className="text-sm text-gray-400">Placed on March {order}, 2024</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Delivered</span>
                            <span className="text-xs text-gray-400">3 items</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-raleway text-xl font-black text-white">$129.99</p>
                          <button className="text-sm text-pink-400 hover:text-pink-300 mt-2 hover:scale-105 transition-all duration-300 inline-block">
                            Track Order →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiHeart className="text-pink-400" />
                  My Wishlist
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="group flex space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 hover:scale-102 hover:shadow-xl transition-all duration-300">
                      <div className="w-20 h-20 bg-gray-600 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"></div>
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-white group-hover:text-pink-400 transition-colors">Premium Product {item}</h3>
                        <p className="text-pink-400 font-bold mt-1">$49.99</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button className="text-xs px-3 py-1 bg-pink-600 text-white rounded-full hover:bg-pink-700 hover:scale-110 transition-all duration-300">
                            Add to Cart
                          </button>
                          <FiHeart className="text-pink-400 hover:fill-pink-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Settings Tab */}
            {activeTab === 'profile' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-montserrat text-2xl font-bold text-white flex items-center gap-2">
                    <FiSettings className="text-pink-400" />
                    Profile Settings
                  </h2>
                  <button 
                    onClick={() => setEditMode(!editMode)}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 hover:scale-105 transition-all duration-300"
                  >
                    <FiEdit2 className="group-hover:rotate-12 transition-transform" />
                    {editMode ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white transition-all duration-300 group-hover:border-pink-400"
                        defaultValue="John"
                        disabled={!editMode}
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white transition-all duration-300 group-hover:border-pink-400"
                        defaultValue="Doe"
                        disabled={!editMode}
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white transition-all duration-300 group-hover:border-pink-400"
                      defaultValue="john.doe@example.com"
                      disabled={!editMode}
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-white transition-all duration-300 group-hover:border-pink-400"
                      defaultValue="+1 234 567 8900"
                      disabled={!editMode}
                    />
                  </div>

                  {editMode && (
                    <div className="flex gap-3 pt-4 animate-fade-in">
                      <Button type="submit" variant="primary" className="bg-pink-600 hover:bg-pink-700 hover:scale-105 transition-all duration-300">
                        Save Changes
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setEditMode(false)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-montserrat text-2xl font-bold text-white flex items-center gap-2">
                    <FiMapPin className="text-pink-400" />
                    Saved Addresses
                  </h2>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <FiMapPin className="text-lg" />
                    Add New
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2].map((addr) => (
                    <div key={addr} className="group p-4 bg-gray-700/30 rounded-xl border border-gray-700 hover:border-pink-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 bg-pink-600/20 text-pink-400 text-xs rounded-full group-hover:scale-105 transition-transform">
                          {addr === 1 ? 'Home' : 'Office'}
                        </span>
                        <FiEdit2 className="text-gray-400 hover:text-pink-400 hover:scale-125 transition-all duration-300 cursor-pointer" />
                      </div>
                      <p className="font-bold text-white group-hover:text-pink-400 transition-colors">John Doe</p>
                      <p className="text-sm text-gray-400">123 Fashion Street</p>
                      <p className="text-sm text-gray-400">New York, NY 10001</p>
                      <p className="text-sm text-gray-400">+1 234 567 8900</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-montserrat text-2xl font-bold text-white flex items-center gap-2">
                    <FiCreditCard className="text-pink-400" />
                    Payment Methods
                  </h2>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <FiCreditCard />
                    Add Card
                  </button>
                </div>
                <div className="space-y-3">
                  {[1, 2].map((card) => (
                    <div key={card} className="group flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 hover:scale-102 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <FiCreditCard className="text-pink-400 text-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                        <div>
                          <p className="font-bold text-white group-hover:text-pink-400 transition-colors">**** **** **** {1234 + card}</p>
                          <p className="text-xs text-gray-400">Expires 12/25</p>
                        </div>
                      </div>
                      <FiCheckCircle className="text-green-400 text-xl group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiBell className="text-pink-400" />
                  Notifications
                </h2>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((notif) => (
                    <div key={notif} className="group flex items-start space-x-3 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 hover:scale-102 hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 mt-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="font-medium text-white group-hover:text-pink-400 transition-colors">
                          Your order #{notif}2345 has been shipped
                        </p>
                        <p className="text-xs text-gray-400">{notif} hours ago</p>
                      </div>
                      <button className="text-gray-500 hover:text-pink-400 hover:scale-125 transition-all duration-300">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rewards Tab - New! */}
            {activeTab === 'rewards' && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-scale-in">
                <h2 className="font-montserrat text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <FiAward className="text-pink-400" />
                  Rewards & Loyalty
                </h2>
                
                {/* Points Card */}
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white/80 text-sm">Your Points</p>
                      <p className="text-4xl font-black text-white">2,450</p>
                    </div>
                    <FiAward className="text-5xl text-white/30" />
                  </div>
                  <div className="mt-4">
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-white rounded-full"></div>
                    </div>
                    <p className="text-xs text-white/80 mt-2">250 more points to next reward</p>
                  </div>
                </div>

                {/* Rewards Grid */}
                <div className="grid md:grid-cols-3 gap-3">
                  {[1, 2, 3].map((reward) => (
                    <div key={reward} className="p-4 bg-gray-700/30 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 group cursor-pointer">
                      <FiGift className="text-2xl text-pink-400 mb-2 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300" />
                      <p className="font-bold text-white">10% OFF</p>
                      <p className="text-xs text-gray-400">500 points</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}