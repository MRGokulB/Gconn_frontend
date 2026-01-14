import React from 'react';

const NursePledge = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <img
                                    src="/florence nightingale.jpg"
                                    alt="Florence Nightingale"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10 blur-xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-xl"></div>
                        </div>

                        {/* Text Section */}
                        <div className="order-2 lg:order-1">
                            <div className="text-center lg:text-left mb-8">
                                <h2 className="text-3xl font-bold text-slate-800 mb-2 font-serif">The Nurse's Pledge</h2>
                                <p className="text-slate-500 italic">In honor of Florence Nightingale</p>
                            </div>

                            <div className="space-y-6 text-slate-700 leading-relaxed font-medium">
                                <p className="relative pl-6 border-l-4 border-blue-500 bg-white p-4 rounded-r-lg shadow-sm">
                                    "I solemnly pledge myself before God and in presence of this assembly to practice my profession with dedication."
                                </p>
                                <p className="relative pl-6 border-l-4 border-emerald-500 bg-white p-4 rounded-r-lg shadow-sm">
                                    "I will serve mankind with love and compassion, recognising their dignity and rights irrespective of colour, caste, creed, religion and nationality."
                                </p>

                                <div className="space-y-4 text-sm sm:text-base text-slate-600 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                    <p>I will endeavour to maintain up to date knowledge and skill to uphold standard of Nursing care to individual, family and community in all settings and in all aspects of holistic care as a member of the health care team.</p>
                                    <p>I will hold in confidence personal matters of my clients committed to my care and help them to develop confidence in care rendered by me.</p>
                                    <p>I will refrain from any activity that will harm my personal and professional dignity as a Nurse.</p>
                                    <p>I will actively support my profession and strive towards its advancement.</p>
                                    <p>I will fulfill my responsibilities as a citizen and encourage change towards better health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NursePledge;
