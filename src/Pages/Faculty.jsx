import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail } from 'lucide-react';
import NangraleImg from '../assets/images/Faculty/Nangrale B B.jpg';
import AnsariImg from '../assets/images/Faculty/Ansari.jpg';//
import ChakreImg from '../assets/images/Faculty/Chakre.jpg';//
import ChandbibiImg from '../assets/images/Faculty/Pathan C H.jpg';
import DeshmaneImg from '../assets/images/Faculty/Deshmane.jpg';
import MadleImg from '../assets/images/Faculty/Madle P A.jpg';
import MohiteImg from '../assets/images/Faculty/Mohite.jpeg';
import PalwadeImg from '../assets/images/Faculty/Palwade R V.jpg';
import ShaikhImg from '../assets/images/Faculty/Shaikh.jpg';
import MahapureImg from '../assets/images/Faculty/Mahapure Shreenivas.jpg';
import MaskeImg from '../assets/images/Faculty/Maske Shreedevi.jpeg';
import RathodImg from '../assets/images/Faculty/Rathod Sushil.jpg';
import KendreImg from '../assets/images/Faculty/Kendre S.jpg';
import ChavanImg from '../assets/images/Faculty/Chavan Sunil.jpg';

const staticFacultyMembers = [
    {
        name: 'Prof. Balaji Nangrale',
        image: NangraleImg, 
        title: 'Principal • Administration',
        email: 'balajinagrale@gmail.com',
        bio: `College of Nursing, proposes to prepare nurses for global healthcare industry. The health care needs of people are dynamic and are more challenging with emerging new diseases and increasing load of non-communicable diseases. The nurses today have their roles expanded from traditional care giving to their contributions in preventive and promotive aspects of health. Our college with its state of the art facilities shall be one of the best college of nursing in the Nanded district and Marathawada region of Maharashtra.
        Today, alternative and complementary modalities of treatment is accessible and affordable to people of all classes. Nurses need to be trained in caring for clients choosing from these diverse treatment modalities. The books of nursing demand inclusions of extensive literature related to caring the patients opting such modalities. This college is committed to fulfil these demands of the present client. As head of the College of Nursing, I feel privileged to be part of a visionary group committed to social cause and quality health professional's education.
        The pass outs can work as Registered nurse in Government/ private Hospitals, medical institutes, colleges, etc. The candidates have great demand in national as well as international health care sectors. Also they can pursue higher education in M.Sc nursing which enables them to seek teaching profession in Nursing.`    
    },
    {
        name: 'Prof. Bhimu Chakre',
        image: ChakreImg,
        title: 'Vice Principal • Mental Health Nursing',
        email: 'bpchakre@gmail.com',
        bio: `With a passion for mental health nursing, I dedicate myself to nurturing both the academic and emotional well-being of our students. Our college provides a supportive learning environment where critical thinking and empathy are equally valued. My aim is to inspire students to become leaders in mental health care and advocates for those struggling with psychological difficulties. Together, we are building a campus that reduces stigma and promotes holistic care.`
    },
    // {
    //     name: 'Ms. Sukumar Gude',
    //     image: '/assets/images/t3.jpg',
    //     title: 'Tutor • Community Health',
    //     email: 'gudesr16@gmail.com',
    //     bio: `Community health is not only my profession—it's my calling. I am proud to be part of an institution that sees nursing as a tool for positive change. Here, I guide my students to engage with local populations, understand their needs, and apply evidence-based solutions. It is my responsibility to foster a new generation of community health nurses who will serve with commitment and integrity.`
    // },
    {
        name: 'Ms. Chandbibi Pathan',
        image: ChandbibiImg,
        title: 'Tutor • ObGy',
        email: 'chandbibipathan@gmail.com',
        bio: `As a faculty member in Obstetrics and Gynecology, I strive every day to empower future nurses with the skills and confidence needed to care for women and newborns. I believe this college is building a solid foundation for quality and dignity in women's health. My dedication is to share my clinical experience, promote lifelong learning, and encourage a respectful, sensitive approach to every patient.`
    },
    {
        name: 'Mr. Salim Shaikh',
        image: ShaikhImg,
        title: 'Tutor • Community Health',
        email: 'ss13111972@gmail.com',
        bio: `I have dedicated my career to public health and preventive care, and our college's vision resonates deeply with me. Every day, I endeavor to make learning practical and meaningful, so my students become caring, action-driven health professionals. I believe our collective efforts will continue to uplift communities, address health disparities, and create a healthier society for all.`
    },
    // {
    //     name: 'Ms. Sunita Giri',
    //     image: '/assets/images/t4.jpg',
    //     title: 'Tutor • Nursing Foundation',
    //     email: 'sggirir27m@gmail.com',
    //     bio: `At the core of nursing lies a blend of knowledge, skill, and compassion. I am committed to helping each student master the fundamentals that define excellent nursing practice. I value the college's emphasis on discipline and modern education and believe that every student should take pride in their journey toward becoming a skilled and ethical caregiver.`
    // },
    {
        name: 'Ms. Unita Deshmane',
        image: DeshmaneImg,
        title: 'Tutor • Nursing Foundation',
        email: 'ubdeshmane@gmail.com',
        bio: `Teaching foundational nursing skills is my passion, and at this college, I have the opportunity to shape future nurses in positive ways. I encourage my students to approach every task with diligence and empathy. My goal is to build their confidence so they are ready to excel, whether in a hospital, community, or educational setting.`
    },
    {
        name: 'Mr. Rameshwar Palwade',
        image: PalwadeImg,
        title: 'Tutor • Community Health',
        email: 'Rampalwade6171@gmail.com',
        bio: `As a community health tutor, my mission is to inspire students to serve beyond hospital walls. I believe this college's hands-on approach is key for preparing nurses who are adaptable and solution-oriented. I am dedicated to making learning relatable and impactful, so each nurse graduates ready to make a difference where it matters most.`
    },
    {
        name: 'Mr. Muddassir Ansari',
        image: AnsariImg,
        title: 'Tutor • Community Health',
        email: 'mudseeransari@gmail.com',
        bio: `Being part of this esteemed college allows me to combine my love for healthcare service and education. My teaching philosophy is rooted in real-world experiences, teamwork, and community engagement. I strive to help students discover their own strengths so that together, we can improve the well-being of our society through preventive care and education.`
    },
    {
        name: 'Ms. Pradnya Madle',
        image: MadleImg,
        title: 'Tutor • ObGy',
        email: 'pradnyamadle@gmail.com',
        bio: `I believe that excellence in maternity and gynecology nursing starts with compassionate, competent training. Here, I focus on supporting students to develop their clinical expertise and personal growth. I am proud to work in a college that prioritizes women's health and prepares graduates to meet the evolving needs of our communities.`
    },
    {
        name: 'Mr. Ajay Mohite',
        image: MohiteImg,
        title: 'Tutor • Community Health',
        email: 'Ajaymohite@gmail.com',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
    {
        name: 'Mr. Chavan Sunil',
        image: ChavanImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
    {
        name: 'Mr. S Kendre',
        image: KendreImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
    {
        name: 'Ms. Shreedevi Maske',
        image: MaskeImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
    {
        name: 'Mr. Sushil Rathod',
        image: RathodImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
    {
        name: 'Mr. Mahapure Shreenivas',
        image: MahapureImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
];

const FacultyPage = () => {
    const navigate = useNavigate();
    const [facultyMembers] = useState(staticFacultyMembers);

    const handleCardClick = (member) => {
        navigate(`/faculty/${member.name}`, { state: { facultyMember: member } });
    };

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">COLLEGE FACULTIES</h1>
                    <div className="w-20 h-1 bg-teal-600"></div>
                </div>
                
                {/* Faculty Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {facultyMembers.map((member, index) => (
                        <div 
                            key={index}
                            onClick={() => handleCardClick(member)}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2">
                                    {member.name}
                                </h3>
                                
                                <div className="flex items-center justify-center mb-3">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                        {member.title.split('•')[0].trim()}
                                    </span>
                                </div>
                                
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    {member.title.split('•')[1]?.trim() || 'Nursing Education'}
                                </p>
                                
                                <p className="text-sm text-gray-700 line-clamp-3 text-center mb-4">
                                    {member.bio}
                                </p>
                                
                                {/* Email */}
                                {member.email && (
                                    <div className="pt-4 border-t border-gray-100">
                                        <a 
                                            href={`mailto:${member.email}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center justify-center text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                                        >
                                            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                                            <span className="truncate">{member.email}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FacultyPage;