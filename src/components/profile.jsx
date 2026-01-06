import React from "react";
import { portfolioData } from "../data";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-500 rounded-2xl blur opacity-25"></div>
          <img
            src={profileImage}
            alt={portfolioData.name}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-2xl border border-gray-800"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 font-medium tracking-[0.3em] uppercase text-xs animate-pulse">
            Available for new projects
          </p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.role}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 pt-6">
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            View My Work
          </a>
          <a href="#socials" className="px-8 py-4 border border-gray-800 text-white font-bold rounded-full hover:bg-gray-900 transition-colors">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export { Hero as Profile };