import React from 'react';
import { FileText, Users, Mail, ExternalLink } from 'lucide-react';

const RTI = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Right to Information (RTI)
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Ensuring transparency and accountability in the working of every public authority.
                    </p>
                </div>

                {/* Introduction Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">About RTI Act</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The Right to Information Act, 2005 empowers citizens to get information from any 'public authority'.
                                The Government College of Nursing, Nanded is committed to transparency and accountability in its functioning
                                and strictly adheres to the provisions of the RTI Act.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Officers Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* PIO Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                            <Users className="h-6 w-6 text-indigo-600" />
                            <h2 className="text-xl font-bold text-gray-900">Public Information Officer (PIO)</h2>
                        </div>
                        <div className="space-y-3">
                            <p className="font-medium text-gray-900">Principal</p>
                            <p className="text-sm text-gray-500">Government College of Nursing, Nanded</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:gcongmcnanded22@gmail.com" className="hover:text-blue-600 transition">
                                    gcongmcnanded22@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Appellate Authority Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                            <Users className="h-6 w-6 text-emerald-600" />
                            <h2 className="text-xl font-bold text-gray-900">Appellate Authority</h2>
                        </div>
                        <div className="space-y-3">
                            <p className="font-medium text-gray-900">Dean</p>
                            <p className="text-sm text-gray-500">Dr. S.C. Govt. Medical College & Hospital, Nanded</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:deanscgmcnanded@gmail.com" className="hover:text-blue-600 transition">
                                    deanscgmcnanded@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Apply */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">How to File an RTI Application?</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Write a formal application specifying the particulars of the information sought.</li>
                        <li>Submit the application to the Public Information Officer (PIO).</li>
                        <li>Pay the prescribed fee as per the RTI rules (usually via IPO/Demand Draft/Cash).</li>
                        <li>Use the online RTI portal of Maharashtra Government for online submissions.</li>
                    </ul>
                    <div className="mt-6">
                        <a
                            href="https://rtionline.maharashtra.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
                        >
                            Visit Online RTI Portal <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RTI;
