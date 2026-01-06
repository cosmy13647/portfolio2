import React from 'react';
import { portfolioData } from '../data';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">
                    C
                </div>
                <span className="hidden md:block font-bold text-white text-lg tracking-tight ml-2 uppercase">Kibet.</span>
            </div>

            <nav>
                <ul className="flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-gray-400">
                    <li className="hover:text-white transition-colors cursor-pointer">
                        <a href="#home">Home</a>
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                        <a href="#socials">Socials</a>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:block">
                <a href={`mailto:${portfolioData.email}`} className="px-5 py-2 border border-gray-700 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;