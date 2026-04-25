import React from 'react';
import Link from 'next/link';
import Button from '../../../components/Button';
import { Metadata } from 'next';
import { 
  FiStar, FiTruck, FiShield, FiClock, FiThumbsUp, 
  FiAward, FiUsers, FiShoppingBag, FiHeart, 
  FiTrendingUp, FiGlobe, FiPackage, FiGift, FiCamera,
  FiMail, FiPhone, FiMapPin, FiCheckCircle
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us | FashionStore',
  description: 'Learn about FashionStore - your premier destination for trendy clothing and accessories.',
};

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12 overflow-hidden">
        {/* SECTION 1: Hero Section */}
        <section className="text-center mb-16 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
             
          </div>
          
          <div className="relative">
            <h1 className="font-playfair text-5xl md:text-7xl font-black mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-gray-300 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Our Story
              </span>
            </h1>
            <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed font-medium">
              Discover how FashionStore became the leading destination for fashion enthusiasts since 2020.
            </p>
            
            {/* Animated Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mx-auto mt-6 rounded-full animate-width-infinite"></div>
            
            {/* Floating Elements with Hover */}
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 animate-float group">
              <FiHeart className="text-pink-400 text-4xl opacity-40 group-hover:opacity-100 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700" />
            </div>
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 animate-float animation-delay-1000 group">
              <FiStar className="text-pink-400 text-4xl opacity-40 group-hover:opacity-100 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700" />
            </div>
          </div>
        </section>

        {/* SECTION 2: Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20 group/mission">
          <div className="animate-slide-in-left">
            <h2 className="font-montserrat text-4xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                Our Mission
              </span>
              <span className="absolute -bottom-2 left-0 w-0 group-hover/mission:w-full h-1 bg-gradient-to-r from-pink-500 to-pink-400 transition-all duration-700"></span>
            </h2>
            <p className="font-opensans text-gray-300 mb-4 leading-relaxed text-lg transform transition-all duration-500 hover:translate-x-4 hover:text-pink-400 cursor-default font-medium">
              At FashionStore, we believe that everyone deserves to look and feel their best. 
              Our mission is to provide high-quality, trendy clothing at affordable prices while 
              maintaining sustainable and ethical practices.
            </p>
            <p className="font-opensans text-gray-300 mb-6 leading-relaxed text-lg transform transition-all duration-500 hover:translate-x-4 hover:text-pink-400 delay-100 cursor-default font-medium">
              We work directly with manufacturers who share our values, ensuring fair wages and 
              safe working conditions for all workers in our supply chain.
            </p>
            <Link href="/shop">
              <Button variant="primary" className="font-poppins font-semibold animate-pulse-slow group/btn bg-pink-600 hover:bg-pink-700">
                <span className="flex items-center gap-2">
                  Shop Our Collection
                  <FiShoppingBag className="group-hover/btn:rotate-12 group-hover/btn:translate-x-2 transition-all duration-300" />
                </span>
              </Button>
            </Link>
          </div>
          
          <div className="relative animate-slide-in-right group/image">
            {/* Image with Parallax Effect */}
            <div 
              className="h-96 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/wo.jpg")'
              }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"></div>
              <span className="font-poppins text-white text-2xl z-10 transform group-hover/image:scale-125 group-hover/image:rotate-3 transition-all duration-700 font-semibold bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
                Mission Image
              </span>
              
              {/* Floating Badges with Hover */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center text-white animate-float animation-delay-500 group/badge cursor-pointer shadow-xl">
                <FiAward className="text-3xl group-hover/badge:scale-125 group-hover/badge:rotate-12 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white animate-float animation-delay-1000 group/badge cursor-pointer shadow-xl">
                <FiHeart className="text-2xl group-hover/badge:scale-125 group-hover/badge:rotate-12 transition-all duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Values Section */}
        <section className="mb-20">
          <h2 className="font-lora text-4xl font-bold text-center mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="font-opensans text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-200 text-lg font-medium">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every product is thoroughly tested.',
                icon: <FiAward className="text-4xl" />,
                color: 'from-pink-500 to-pink-600',
                hoverColor: 'group-hover:from-pink-600 group-hover:to-pink-700'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen and improve constantly.',
                icon: <FiHeart className="text-4xl" />,
                color: 'from-pink-600 to-pink-700',
                hoverColor: 'group-hover:from-pink-700 group-hover:to-pink-800'
              },
              {
                title: 'Sustainable Fashion',
                description: 'Committed to reducing our environmental impact through eco-friendly practices.',
                icon: <FiGlobe className="text-4xl" />,
                color: 'from-pink-700 to-pink-800',
                hoverColor: 'group-hover:from-pink-800 group-hover:to-pink-900'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="group relative h-[400px] perspective cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* 3D Flip Card */}
                <div className="relative w-full h-full transition-all duration-1000 transform-style-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden bg-gray-800 border-2 border-gray-700 rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-700">
                    <div className={`w-24 h-24 bg-gradient-to-r ${value.color} rounded-2xl mb-6 flex items-center justify-center text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-xl`}>
                      {value.icon}
                    </div>
                    <h3 className="font-lora text-2xl font-bold mb-4 text-center text-white group-hover:text-pink-400 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="font-opensans text-gray-300 text-center leading-relaxed font-medium">
                      {value.description}
                    </p>
                    
                    {/* Animated Border */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-pink-700 rounded-full group-hover:w-24 group-hover:bg-pink-500 transition-all duration-700"></div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-600 to-pink-700 rounded-3xl p-8 flex flex-col items-center justify-center text-white">
                    <FiStar className="text-6xl mb-6 animate-spin-slow" />
                    <h3 className="font-lora text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="font-opensans text-center text-pink-100 leading-relaxed">
                      Learn more about our commitment to {value.title.toLowerCase()}
                    </p>
                    
                    {/* Hover Effect on Back */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Stats Section */}
        <section className="mb-20 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 py-16 px-8 rounded-3xl relative overflow-hidden border border-gray-700">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 animate-shimmer"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 animate-shimmer animation-delay-1000"></div>
            
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-pink-500/30 rounded-full animate-float-particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          <h2 className="font-raleway text-4xl font-black text-center mb-4 animate-bounce-in">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              FashionStore by Numbers
            </span>
          </h2>
          <p className="font-opensans text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in text-lg font-medium">
            Our growth and impact in the fashion industry
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers', icon: FiUsers, delay: 0, color: 'from-pink-500 to-pink-600' },
              { number: '10K+', label: 'Products Sold', icon: FiShoppingBag, delay: 200, color: 'from-pink-600 to-pink-700' },
              { number: '100+', label: 'Brand Partners', icon: FiAward, delay: 400, color: 'from-pink-700 to-pink-800' },
              { number: '4.9', label: 'Customer Rating', icon: FiStar, delay: 600, color: 'from-pink-800 to-pink-900' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group animate-count-up cursor-pointer"
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <div className="relative inline-block">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 scale-150`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700 group-hover:shadow-2xl overflow-hidden border border-gray-700">
                      <Icon className="text-pink-400 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10" />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                  
                  <div className="font-raleway text-4xl font-black text-white mb-1 group-hover:text-pink-400 transition-all duration-500 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="font-poppins text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-500 tracking-wide font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Animated Underline */}
                  <div className="w-12 h-1 bg-pink-800 mx-auto mt-3 rounded-full group-hover:w-20 group-hover:bg-pink-500 transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: Why Choose Us */}
        <section className="mb-20">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-4 animate-slide-down">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="font-opensans text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in text-lg font-medium">
            What makes FashionStore your perfect shopping destination
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FiTruck, title: 'Free Shipping', desc: 'On orders over $50', delay: 0, color: 'from-pink-500 to-pink-600' },
              { icon: FiShield, title: 'Secure Payment', desc: '100% secure transactions', delay: 100, color: 'from-pink-600 to-pink-700' },
              { icon: FiClock, title: '24/7 Support', desc: 'Round the clock assistance', delay: 200, color: 'from-pink-700 to-pink-800' },
              { icon: FiThumbsUp, title: 'Easy Returns', desc: '30-day return policy', delay: 300, color: 'from-pink-800 to-pink-900' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group relative p-8 border-2 border-gray-700 rounded-2xl hover:border-transparent transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with Animation */}
                    <div className="text-pink-400 group-hover:text-white mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                      <Icon className="text-5xl" />
                    </div>
                    
                    <h3 className="font-poppins text-xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-opensans text-sm text-gray-400 group-hover:text-white/90 transition-colors duration-300 font-medium">
                      {item.desc}
                    </p>
                    
                    {/* Animated Border Line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-16 transition-all duration-700"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: Team Section */}
        <section className="mb-20">
          <h2 className="font-lora text-4xl font-bold text-center mb-4 animate-zoom-in">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </span>
          </h2>
          <p className="font-opensans text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in text-lg font-medium">
            The passionate people behind FashionStore's success
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Sarah Johnson', 
                role: 'CEO & Founder', 
                expertise: '15+ years in fashion', 
                icon: FiAward, 
                color: 'from-pink-500 to-pink-600',
                quote: '"Fashion is my passion"'
              },
              { 
                name: 'Michael Chen', 
                role: 'Creative Director', 
                expertise: 'Parsons graduate', 
                icon: FiHeart, 
                color: 'from-pink-600 to-pink-700',
                quote: '"Creativity knows no bounds"'
              },
              { 
                name: 'Emily Rodriguez', 
                role: 'Head of Sustainability', 
                expertise: 'Eco-fashion expert', 
                icon: FiStar, 
                color: 'from-pink-700 to-pink-800',
                quote: '"Sustainable is achievable"'
              },
              { 
                name: 'David Kim', 
                role: 'Customer Experience', 
                expertise: 'Customer first approach', 
                icon: FiUsers, 
                color: 'from-pink-800 to-pink-900',
                quote: '"Happy customers, happy life"'
              },
            ].map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={index} 
                  className="group relative cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    {/* Image Container with Gradient */}
                    <div className="relative w-56 h-56 mx-auto mb-4 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-700">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
                      
                      {/* Image Placeholder with Background Image */}
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: 'url("/women.jpg")'
                        }}
                      >
                        <div className="w-full h-full bg-black/40 flex items-center justify-center">
                          <FiCamera className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                      </div>
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                        <p className="font-playfair text-white text-sm italic px-4 text-center">{member.quote}</p>
                      </div>
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-r ${member.color} rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-xl`}>
                      <Icon className="text-2xl" />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h3 className="font-lora text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-500">
                      {member.name}
                    </h3>
                    <p className="font-montserrat text-pink-400 text-sm font-semibold mb-1 group-hover:scale-105 transition-transform duration-300">
                      {member.role}
                    </p>
                    <p className="font-opensans text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                      {member.expertise}
                    </p>
                    
                    {/* Social Icons on Hover */}
                    <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                      <FiMail className="text-pink-400 hover:text-pink-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
                      <FiPhone className="text-pink-400 hover:text-pink-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: Testimonials */}
        <section className="mb-20">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="font-opensans text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg font-medium">
            Real feedback from real customers
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Alex Thompson', text: 'Best clothing store ever! The quality is amazing.', rating: 5, location: 'New York' },
              { name: 'Priya Patel', text: 'Love the sustainable fashion line. Great brand!', rating: 5, location: 'London' },
              { name: 'James Wilson', text: 'Fast shipping, great fits, and affordable prices.', rating: 5, location: 'Sydney' },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative p-8 border-2 border-gray-700 rounded-3xl hover:border-pink-500 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Mark */}
                <div className="absolute -top-4 -left-2 text-6xl text-pink-700 group-hover:text-pink-500 transition-colors duration-500">"</div>
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className="text-pink-500 fill-pink-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" 
                        style={{ animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="font-opensans text-gray-300 mb-4 italic leading-relaxed group-hover:text-white transition-colors duration-500 font-medium">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="font-montserrat font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="font-opensans text-xs text-gray-400 font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Timeline */}
        <section className="mb-20">
          <h2 className="font-raleway text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-700 via-pink-500 to-pink-700 rounded-full"></div>
            
            {[
              { year: '2020', title: 'The Beginning', desc: 'FashionStore founded with a vision', icon: FiGift },
              { year: '2021', title: 'First 10K Customers', desc: 'Milestone achieved in first year', icon: FiUsers },
              { year: '2022', title: 'Sustainable Initiative', desc: 'Eco-friendly line launched', icon: FiGlobe },
              { year: '2023', title: 'Global Shipping', desc: 'Started worldwide shipping', icon: FiPackage },
              { year: '2024', title: '1M Happy Customers', desc: 'Celebrating our community', icon: FiHeart },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="group/card p-6 bg-gray-800 border-2 border-gray-700 rounded-2xl hover:border-pink-500 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 cursor-pointer">
                      <span className="font-montserrat text-pink-400 font-bold text-lg group-hover/card:text-pink-300 transition-colors duration-300">
                        {item.year}
                      </span>
                      <h3 className="font-lora text-xl font-bold mb-2 text-white group-hover/card:text-pink-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-opensans text-gray-400 text-sm group-hover/card:text-gray-300 transition-colors duration-300 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center group-hover:scale-125 transition-all duration-700 group-hover:shadow-xl">
                    <Icon className="text-white text-lg group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 9: CTA Section - NO MARGIN BOTTOM! */}
        <section className="relative bg-gradient-to-r from-pink-700 to-pink-800 rounded-3xl p-16 text-center text-white overflow-hidden group/cta">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 transform -skew-y-12 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-1000"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-montserrat text-5xl font-black mb-4 animate-bounce-in">
              Ready to Upgrade Your Style?
            </h2>
            <p className="font-poppins text-xl mb-8 text-pink-200 max-w-2xl mx-auto leading-relaxed font-medium">
              Join thousands of happy customers and discover your perfect style today.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link href="/shop">
                <Button 
                  variant="primary" 
                  className="font-poppins font-semibold bg-white text-pink-800 hover:bg-gray-100 hover:text-pink-800 hover:scale-110 hover:shadow-2xl transition-all duration-700 group/btn"
                >
                  <span className="flex items-center gap-2 text-pink-800 group-hover:text-pink-800">
                    Shop Now
                    <FiShoppingBag className="group-hover/btn:rotate-12 group-hover/btn:translate-x-2 transition-all duration-500 text-pink-800" />
                  </span>
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="font-poppins font-semibold border-2 border-white text-white hover:bg-white hover:text-pink-800 hover:scale-110 transition-all duration-700 group/btn"
                >
                  <span className="flex items-center gap-2 text-white group-hover:text-pink-800">
                    Contact Us
                    <FiMail className="group-hover/btn:rotate-12 group-hover/btn:translate-x-2 transition-all duration-500 text-white group-hover:text-pink-800" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;