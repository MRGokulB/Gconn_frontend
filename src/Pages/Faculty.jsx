// src/Pages/Faculty.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from 'lucide-react';
import NangraleImg from '../assets/images/Faculty/Nangrale.jpeg';
import AnsariImg from '../assets/images/Faculty/Ansari.jpeg';
import ChakreImg from '../assets/images/Faculty/Chakre.jpg';
import ChandbibiImg from '../assets/images/Faculty/Chandbibi.jpeg';
import DeshmaneImg from '../assets/images/Faculty/Deshmane.jpg';
import MadleImg from '../assets/images/Faculty/Madle.jpg';
import MohiteImg from '../assets/images/Faculty/Mohite.jpeg';
import PalwadeImg from '../assets/images/Faculty/Palwade.jpg';
import ShaikhImg from '../assets/images/Faculty/Shaikh.jpg';

const staticFacultyMembers = [
    {
        name: 'Prof. Balaji Nangrale',
        image: NangraleImg, 
        title: 'Principal • Administration',
        email: 'balajinagrale@gmail.com',
        bio: ` College of Nursing, proposes to prepare nurses for global healthcare industry. The health care needs of people are dynamic and are more challenging with emerging new diseases and increasing load of non-communicable diseases. The nurses today have their roles expanded from traditional care giving to their contributions in preventive and promotive aspects of health. Our college with its state of the art facilities shall be one of the best college of nursing in the Nanded district and Marathawada region of Maharashtra.
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
    {
        name: 'Ms. Sukumar Gude',
        image: '/assets/images/t3.jpg',
        title: 'Tutor • Community Health',
        email: 'gudesr16@gmail.com',
        bio: `Community health is not only my profession—it's my calling. I am proud to be part of an institution that sees nursing as a tool for positive change. Here, I guide my students to engage with local populations, understand their needs, and apply evidence-based solutions. It is my responsibility to foster a new generation of community health nurses who will serve with commitment and integrity.`
    },
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
        bio: `I have dedicated my career to public health and preventive care, and our college’s vision resonates deeply with me. Every day, I endeavor to make learning practical and meaningful, so my students become caring, action-driven health professionals. I believe our collective efforts will continue to uplift communities, address health disparities, and create a healthier society for all.`
    },
    {
        name: 'Ms. Sunita Giri',
        image: '/assets/images/t4.jpg',
        title: 'Tutor • Nursing Foundation',
        email: 'sggirir27m@gmail.com',
        bio: `At the core of nursing lies a blend of knowledge, skill, and compassion. I am committed to helping each student master the fundamentals that define excellent nursing practice. I value the college’s emphasis on discipline and modern education and believe that every student should take pride in their journey toward becoming a skilled and ethical caregiver.`
    },
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
        title: 'Tutor • Communnity Health',
        email: 'Rampalwade6171@gmail.com',
        bio: `As a community health tutor, my mission is to inspire students to serve beyond hospital walls. I believe this college’s hands-on approach is key for preparing nurses who are adaptable and solution-oriented. I am dedicated to making learning relatable and impactful, so each nurse graduates ready to make a difference where it matters most.`
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
        bio: `I believe that excellence in maternity and gynecology nursing starts with compassionate, competent training. Here, I focus on supporting students to develop their clinical expertise and personal growth. I am proud to work in a college that prioritizes women’s health and prepares graduates to meet the evolving needs of our communities.`
    },
    {
        name: 'Mr. Ajay Mohite',
        image: MohiteImg,
        title: 'Tutor • Community Health',
        email: 'Ajaymohite@gmail.com',
        bio: `Our college stands as a platform for growth and meaningful service. I am privileged to mentor students in community health, exposing them to public health challenges and innovative solutions. I see my role as motivating each student to pursue excellence, creativity, and compassion in their professional journey.`
    },
];

const FacultyPage = () => {
    const navigate = useNavigate();
    const [facultyMembers, setFacultyMembers] = useState(staticFacultyMembers);

    useEffect(() => {
        // To fetch from API in the future, replace below with actual API call.
        // Example:
        // fetch('/api/faculty')
        //   .then(res => res.json())
        //   .then(data => {
        //     // If API doesn't have images, merge with static images list if possible.
        //     setFacultyMembers(data);
        //   });
    }, []);

    return (
        <div className="bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <div className="flex items-center flex-shrink-0 text-white mr-6">
                                <span className="font-semibold text-xl tracking-tight">Gov. Nursing Medical College</span>
                            </div>
                            <div className="block lg:hidden">
                                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <main>
                <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Faculty</h2>
                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {facultyMembers.map((member) => (
                            <div key={member.name}
                                onClick={() => navigate(`/faculty/${member.name}`, { state: { facultyMember: member } })}
                                className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <div className="mt-3">
                                        <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                                        <p className="mt-1 text-sm text-gray-600">{member.title}</p>
                                        <a href={`mailto:${member.email}`} className="mt-1 text-sm font-medium text-teal-600 hover:text-teal-500">{member.email}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FacultyPage;