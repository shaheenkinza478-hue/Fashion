import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import {
  FiArrowRight, FiStar, FiTruck, FiShield, FiClock,
  FiHeart, FiShoppingBag, FiUsers, FiAward, FiTrendingUp,
  FiGift, FiPercent, FiCamera, FiPlay, FiChevronRight,
  FiTwitter, FiFacebook, FiInstagram, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiGlobe
} from 'react-icons/fi';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(0, 4);
  const bestSellers = products.slice(0, 4);

  const stats = [
    { icon: FiUsers, value: '50K+', label: 'Happy Customers' },
    { icon: FiShoppingBag, value: '100K+', label: 'Products Sold' },
    { icon: FiAward, value: '50+', label: 'Awards Won' },
    { icon: FiTruck, value: '24/7', label: 'Delivery Support' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Fashion Blogger', text: 'Best quality clothing I have ever purchased!', rating: 5, image: '/p1.jpg' },
    { name: 'Michael Chen', role: 'Style Icon', text: 'Amazing collection and super fast delivery.', rating: 5, image: '/man.jpg' },
    { name: 'Emily Rodriguez', role: 'Fashion Designer', text: 'My go-to place for trendy outfits.', rating: 5, image: '/p3.jpg' },
  ];

  const brands = [
    { name: 'Zara', image: '/p1.jpg' },
    { name: 'H&M', image: '/p2.jpg' },
    { name: 'Gucci', image: '/p3.jpg' },
    { name: 'Prada', image: '/p4.png' },
    { name: 'Nike', image: '/p1.jpg' },
    { name: 'Adidas', image: '/herobg.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-pink-700/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* ============================================ */}
      {/* SECTION 1: Hero Section with Parallax */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
          <video
            src="/v2.mp4"
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <FiTrendingUp className="text-pink-400" />
                <span className="text-sm text-white">New Collection 2024</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                  Discover Your
                </span>
                <br />
                <span className="text-white">Perfect Style</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                Explore our latest collection of trendy and fashionable clothing.
                Quality products that define your personality and elevate your style.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-lg px-8 py-4 group">
                    <span className="flex items-center gap-2">
                      Shop Now
                      <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>

                <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-xl text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 group">
                  <FiPlay className="group-hover:scale-110 transition-transform" />
                  Watch Video
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.slice(0, 3).map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1 justify-center">
                        <Icon className="text-pink-400 text-sm" />
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              {/* Floating Cards */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl animate-float-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl animate-float-slower"></div>

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="aspect-square relative">
                  <Image
                    src="/herobg1.jpg"
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 z-20 animate-bounce">
                  🔥 50% OFF
                </div>

                <div className="absolute bottom-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm z-20 animate-pulse">
                  Limited Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: Trust Badges */}
      {/* ============================================ */}
      <section className="py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FiTruck, title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: FiShield, title: 'Secure Payment', desc: '100% protected' },
              { icon: FiClock, title: '24/7 Support', desc: 'Live chat support' },
              { icon: FiHeart, title: 'Easy Returns', desc: '30-day policy' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: Featured Categories */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Shop by Category
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of categories and find your perfect style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Men's Wear", image: '/men.jpg', items: '250+ items' },
              { name: "Women's Wear", image: '/p2.jpg', items: '300+ items' },
              { name: 'Accessories', image: '/acc.jpg', items: '150+ items' },
              { name: 'Sale', image: '/sale.jpg', items: 'Limited Time' },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/shop?category=${category.name.toLowerCase().replace("'", '').split(' ')[0]}`}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Category Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-pink-400 text-sm mb-2">{category.items}</p>
                  <span className="inline-flex items-center gap-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: Featured Products */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Featured Products</h2>
              <p className="text-gray-400">Hand-picked just for you</p>
            </div>
            <Link href="/shop" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 group">
              View All
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: Statistics Counter */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="text-pink-400 text-3xl" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: New Arrivals */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">New Arrivals</h2>
            <p className="text-gray-400">Be the first to wear our latest collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: Promo Banner */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(/herobg1.jpg)',
                backgroundSize: 'cover'
              }}
            ></div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center p-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Summer Sale
                  <span className="block text-2xl text-pink-200 mt-2">Up to 50% Off</span>
                </h2>
                <p className="text-pink-100 mb-6 max-w-md">
                  Limited time offer on selected items. Don't miss out on these amazing deals!
                </p>
                <Link href="/shop?category=sale">
                  <Button className="bg-white text-pink-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl p-8 text-center">
                  <div className="text-6xl font-black text-white mb-2">50%</div>
                  <div className="text-xl text-pink-100">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: Testimonials */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">What Our Customers Say</h2>
            <p className="text-gray-400">Real feedback from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-pink-500 hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Testimonial Image */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: Brands */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Trusted by Leading Brands</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center hover:border-pink-500 hover:scale-105 transition-all duration-500"
              >
                {/* Brand Logo */}
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    
                    className="object-contain group-hover:scale-110 group-hover:rotate-6  transition-all duration-500 "
                  />
                </div>
                <p className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: Instagram Feed */}
      {/* ============================================ */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Follow Us on Instagram</h2>
              <p className="text-gray-400">@fashionstore_official</p>
            </div>
            <FiInstagram className="text-4xl text-pink-400" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative aspect-square bg-gray-700 rounded-lg overflow-hidden cursor-pointer">
                {/* Instagram Post Image */}
                <Image
                  src={`/p1.jpg`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-pink-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FiCamera className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: Newsletter */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
              <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>

              <form className="flex max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-4 bg-white text-pink-700 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-pink-200 mt-4">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}