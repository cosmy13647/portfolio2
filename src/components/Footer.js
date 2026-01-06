import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-gray-900 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex items-center space-x-4">
                    <span className="text-white font-bold tracking-tighter uppercase text-sm">© {new Date().getFullYear()} Cosmas Kibet</span>
                    <span className="text-gray-700">/</span>
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Built with Passion</span>
                </div>

                <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
                    {portfolioData.socials.map((social, index) => (
                        <a key={index} href={social.url} className="hover:text-white transition-colors">
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;