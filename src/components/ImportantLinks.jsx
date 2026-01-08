import React from 'react';
import { ExternalLink, Building2, GraduationCap, BookOpen } from 'lucide-react';

const links = [
    { name: 'Dr. S.C.G.M.C. Nanded', description: 'Parent Medical College', url: 'https://drscgmcnanded.in/' },
    { name: 'MUHS Nashik', description: 'Maharashtra University of Health Sciences', url: 'https://www.muhs.ac.in/' },
    { name: 'MahaDBT', description: 'Scholarship Portal', url: 'https://mahadbt.maharashtra.gov.in/' },
    { name: 'CET Cell', description: 'Common Entrance Test', url: 'https://cetcell.mahacet.org/' },
    { name: 'DMER Maharashtra', description: 'Directorate of Medical Education', url: 'https://dmer.maharashtra.gov.in/' },
    { name: 'Indian Nursing Council', description: 'National Regulatory Body', url: 'https://indiannursingcouncil.org/' },
    { name: 'Maharashtra Nursing Council', description: 'State Regulatory Body', url: 'https://maharashtranursingcouncil.org/' },
];

export default function ImportantLinks() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                        Important Links
                    </h2>
                    <div className="w-12 h-0.5 bg-blue-600 mx-auto"></div>
                </div>

                {/* Clean Grid with Subtitles */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col px-4 py-3 bg-slate-50 rounded-lg hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors duration-200"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 truncate">
                                    {link.name}
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 flex-shrink-0 ml-2" />
                            </div>
                            <span className="text-xs text-slate-500 truncate">
                                {link.description}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Affiliations Footer */}
                <div className="mt-10 pt-6 border-t border-slate-100">
                    <p className="text-center text-xs text-slate-400 mb-4">
                        Affiliated & Recognized by
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span className="text-xs font-medium">Indian Nursing Council</span>
                        </div>
                        <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span className="text-xs font-medium">MUHS Nashik</span>
                        </div>
                        <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span className="text-xs font-medium">Maharashtra Nursing Council</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
