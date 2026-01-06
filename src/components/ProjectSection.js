import React from 'react';
import { portfolioData } from '../data';

const ProjectSection = () => {
    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
                    <div>
                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Featured Work</p>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Selected Projects</h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm md:text-base">
                        A collection of projects built with passion and attention to detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className="group relative bg-[#0a0a0a] border border-gray-900 rounded-3xl overflow-hidden hover:border-gray-700 transition-all duration-500">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider text-gray-500 px-2 py-1 bg-gray-900 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors uppercase tracking-tight">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:underline underline-offset-8">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
