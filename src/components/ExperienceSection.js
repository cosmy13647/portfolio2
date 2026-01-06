import React from 'react';
import { portfolioData } from '../data';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">My Journey</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Experience</h2>
                </div>

                <div className="space-y-12">
                    {portfolioData.experience.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
                            <div className="w-32 pt-1 text-gray-500 font-bold text-sm tracking-widest uppercase shrink-0">
                                {item.year}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                                    {item.role} @ <span className="text-gray-500 font-medium tracking-tight uppercase">{item.company}</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-2xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
