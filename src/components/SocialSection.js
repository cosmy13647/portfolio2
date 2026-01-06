import React from 'react';
import { portfolioData } from '../data';

const SocialSection = () => {
    return (
        <section id="socials" className="py-32 px-6 bg-[#050505]">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Get In Touch</p>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter italic font-serif">Let's Create Together</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    {portfolioData.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-10 border border-gray-900 rounded-[2.5rem] hover:bg-white transition-all duration-500 hover:border-white"
                        >
                            <span className="text-xl font-bold text-gray-500 group-hover:text-black transition-colors lowercase tracking-tighter">@{social.name.toLowerCase()}</span>
                            <div className="mt-4 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="pt-20">
                    <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Or drop a line at</p>
                    <a href={`mailto:${portfolioData.email}`} className="text-2xl md:text-4xl font-light text-white hover:text-gray-400 transition-colors border-b border-gray-800 pb-2">
                        {portfolioData.email}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
