import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail, BookOpen, GraduationCap, Heart } from 'lucide-react';

const NangraleImg = "/assets/images/Faculty/Nangrale B B.jpg";
const AnsariImg = "/assets/images/Faculty/Ansari.jpg";
const ChakreImg = "/assets/images/Faculty/Chakre.jpg";
const ChandbibiImg = "/assets/images/Faculty/Pathan C H.jpg";
const DeshmaneImg = "/assets/images/Faculty/Deshmane.jpg";
const MadleImg = "/assets/images/Faculty/Madle P A.jpg";
const MohiteImg = "/assets/images/Faculty/Mohite.jpeg";
const PalwadeImg = "/assets/images/Faculty/Palwade R V.jpg";
const ShaikhImg = "/assets/images/Faculty/Shaikh.jpg";
const MahapureImg = "/assets/images/Faculty/Mahapure Shreenivas.jpg";
const MaskeImg = "/assets/images/Faculty/Maske Shreedevi.jpeg";
const RathodImg = "/assets/images/Faculty/Rathod Sushil.jpg";
const KendreImg = "/assets/images/Faculty/Kendre S.jpg";
const ChavanImg = "/assets/images/Faculty/Chavan Sunil.jpg";

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
        bio: `Mental health is an essential pillar of healthcare, influencing every aspect of an individual's life and well-being. As Vice Principal and faculty in Mental Health Nursing, I am dedicated to shaping nurses who can deliver holistic, empathetic, and evidence-based care. My goal is to foster a deeper understanding of the human mind and its connection to overall health, preparing students to respond compassionately and competently to mental health challenges.
        At our institution, we provide an environment that prioritizes emotional intelligence, patient-centered care, and interdisciplinary collaboration. I guide students to develop strong clinical judgment while nurturing empathy and communication — two core values of mental health nursing. We encourage active learning through case studies, role-play, and reflective discussions, ensuring that students become confident and sensitive caregivers.
        I believe that nursing education is not just about clinical training but about nurturing humanity within healthcare. Together, we aim to create professionals who advocate for mental health awareness, break societal stigmas, and contribute to a world that values emotional well-being as much as physical health.`
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
        bio: `As a faculty member specializing in Obstetrics and Gynecology, I am passionate about preparing nursing students to serve women with confidence, empathy, and clinical precision. Maternal and neonatal health form the cornerstone of nursing care, and I aim to equip students with the knowledge and hands-on experience to handle this vital responsibility with grace and competence.
        Through innovative teaching methods and compassionate mentorship, I help students understand the emotional and physical dimensions of maternal care. My goal is to foster professionals who can blend evidence-based practice with human touch, ensuring dignity and safety for every mother and newborn. Our college’s commitment to women’s health aligns perfectly with my vision of empowering future nurses to bring life, care, and hope to every family they serve.`
    },
    {
        name: 'Mr. Salim Shaikh',
        image: ShaikhImg,
        title: 'Tutor • Community Health',
        email: 'ss13111972@gmail.com',
        bio: `Community Health Nursing stands as the bridge between healthcare institutions and the people they serve. My teaching philosophy revolves around empowering students to address real-world challenges through preventive, promotive, and rehabilitative care. I encourage each learner to understand the social, economic, and environmental determinants of health that shape communities.
        By guiding students in outreach programs and rural health initiatives, I aim to cultivate leadership and empathy among future nurses. Our goal is to produce community health professionals who not only treat illness but also work toward long-term wellness and equity. Together, we are nurturing a generation of nurses ready to transform public health through compassion, service, and knowledge.`
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
        bio: `The Nursing Foundation is where every student begins their journey toward professional excellence. My passion lies in strengthening this base — ensuring that every student learns the principles, techniques, and ethics that define outstanding nursing care. I emphasize both precision and compassion, helping students balance clinical competence with humane service.
        At our college, I strive to make foundational training interactive and impactful. Each lecture and practical session is an opportunity to mold confident and responsible nurses who uphold the dignity of the profession. I believe that once students master the basics with dedication, they will shine across any specialization they pursue.`
    },
    {
        name: 'Mr. Rameshwar Palwade',
        image: PalwadeImg,
        title: 'Tutor • Community Health',
        email: 'Rampalwade6171@gmail.com',
        bio: `Community health is the soul of nursing education — and my mission is to help students understand its depth and importance. I focus on preparing nurses who can serve not only in hospitals but in villages, schools, and families — wherever health promotion is needed most.
        By connecting theoretical knowledge with field experiences, I guide my students to see health from a broader, people-centered perspective. My vision is to develop professionals who are compassionate advocates of preventive care and community development. Together, we aim to build a healthier and more informed society through service, outreach, and continuous learning.`
    },
    {
        name: 'Mr. Muddassir Ansari',
        image: AnsariImg,
        title: 'Tutor • Community Health',
        email: 'mudseeransari@gmail.com',
        bio: `Nursing is both a science and a service, and community health allows us to practice both meaningfully. My approach to teaching integrates practical exposure, research-driven insights, and community engagement. I aim to prepare nurses who understand that every community — urban or rural — deserves accessible and quality healthcare.
        At this college, I take pride in mentoring students to become independent thinkers and compassionate caregivers. Through health camps, surveys, and real-life case studies, they learn to identify challenges and craft solutions. My dedication lies in shaping nurses who will take preventive healthcare to the next level, ensuring wellness reaches every corner of society.`
    },
    {
        name: 'Ms. Pradnya Madle',
        image: MadleImg,
        title: 'Tutor • ObGy',
        email: 'pradnyamadle@gmail.com',
        bio: `Nursing in Obstetrics and Gynecology is a journey of compassion, science, and responsibility. My teaching philosophy is to nurture nurses who can handle the joys and complexities of childbirth and women’s health with confidence and care. I believe that effective maternal care begins with education that blends theory with practical understanding.
        At our institution, I create a supportive environment where students can learn through real-world experiences and patient-centered care. I am proud to contribute to the college’s mission of empowering nurses to uphold the dignity of women’s health and to provide care that brings safety, comfort, and hope to every mother.`
    },
    {
        name: 'Mr. Ajay Mohite',
        image: MohiteImg,
        title: 'Tutor • Community Health',
        email: 'Ajaymohite@gmail.com',
        bio: `Community Health Nursing is about service beyond walls — reaching people where they live, work, and learn. I consider it a privilege to guide students on this rewarding path of public service and empowerment. Through my teaching, I emphasize the value of teamwork, cultural sensitivity, and innovative thinking in addressing public health challenges.
        Our college provides a strong foundation for such experiential learning, allowing students to participate directly in community programs and surveys. My goal is to see each student graduate not just as a nurse, but as a change-maker — ready to contribute to a healthier, more resilient society.`
    },
    {
        name: 'Mr. Chavan Sunil',
        image: ChavanImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `As a community health tutor, I believe in preparing students to be leaders in preventive care and social responsibility. Health is not only about treatment but about education, empowerment, and collaboration with communities. My classes focus on bridging the gap between theory and practice through hands-on participation and reflection.
        I am inspired by our college’s dedication to shaping nurses who can adapt to diverse health environments and address evolving challenges. Together with my students, I strive to cultivate compassion-driven leadership that makes meaningful change in people’s lives.`
    },
    {
        name: 'Mr. S Kendre',
        image: KendreImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Community health nursing stands as a symbol of service to humanity. My approach to teaching involves instilling the importance of preventive and promotive care, especially among rural and underserved populations. I encourage students to see themselves not just as healthcare workers, but as agents of positive social change.
        By connecting theory with fieldwork, I help students appreciate the profound role nurses play in transforming community well-being. I am proud to be part of an institution that values integrity, compassion, and lifelong learning — qualities that define the nurses we are shaping for tomorrow.`
    },
    {
        name: 'Ms. Shreedevi Maske',
        image: MaskeImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `As a tutor in Community Health Nursing, I am deeply committed to helping students grasp the essence of public service through nursing. My teaching emphasizes awareness, communication, and empathy — the cornerstones of effective community care. I motivate students to understand the cultural and environmental context of every patient they serve.
        Our college’s mission aligns perfectly with my vision to train nurses who are confident, capable, and community-oriented. I take pride in mentoring students who will become ambassadors of preventive health, working tirelessly to uplift the lives of individuals and families across all backgrounds.`
    },
    {
        name: 'Mr. Sushil Rathod',
        image: RathodImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `Public health is a collective effort, and nursing plays a vital role in shaping its success. In my teaching, I focus on preparing students to be proactive, observant, and compassionate in their approach to healthcare delivery. Each classroom session and community visit becomes an opportunity for students to develop both skills and empathy.
        At our college, I have the privilege to guide future nurses who are motivated to make a difference beyond hospital boundaries. My goal is to help them grow into professionals who embody the values of service, discipline, and humanity — the pillars of nursing excellence.`
    },
    {
        name: 'Mr. Mahapure Shreenivas',
        image: MahapureImg,
        title: 'Tutor • Community Health',
        email: '',
        bio: `My journey as a community health tutor is driven by a commitment to improve healthcare access and awareness among all segments of society. I believe nursing is not only a profession but a lifelong service dedicated to human welfare. I encourage my students to explore the root causes of health disparities and to develop innovative, practical solutions.
        Through interactive learning and real-world exposure, I strive to build confidence, responsibility, and leadership among our students. Together, we are contributing to a healthcare system that prioritizes compassion, inclusivity, and proactive well-being for every community we serve.`
    },
];


const getTitleIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('principal')) {
        return <GraduationCap className="h-4 w-4 mr-1.5" />;
    }
    return <BookOpen className="h-4 w-4 mr-1.5" />;
};

const FacultyPage = () => {
    const navigate = useNavigate();
    const [facultyMembers] = useState(staticFacultyMembers);

    const handleCardClick = (member) => {
        navigate(`/faculty/${member.name}`, { state: { facultyMember: member } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide mb-3">
                                Our Faculty Members
                            </h1>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Meet our dedicated team of experienced nursing educators committed to excellence in healthcare education
                            </p>
                        </div>
                    </div>
                </div>

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {facultyMembers.map((member, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(member)}
                            className="group bg-white rounded-2xl border border-indigo-100 overflow-hidden cursor-pointer transform-gpu transition-all duration-300 ease-out  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:border-indigo-200"                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
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
                                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold     bg-teal-100 text-teal-800 border border-teal-200 shadow-sm   transition">
                                        {getTitleIcon(member.title)}
                                        {member.title.split('•')[0].trim()}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 text-center mb-4">
                                    {member.title.split('•')[1]?.trim() || 'Nursing Education'}
                                </p>

                                <p className="text-sm text-gray-700 line-clamp-3 text-center mb-4">
                                    {member.bio}
                                </p>

                                {member.email ? (
                                    <a
                                        href={`mailto:${member.email}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors group/email"
                                    >
                                        <Mail className="h-4 w-4 mr-2 flex-shrink-0 group-hover/email:scale-110 transition-transform" />
                                        <span className="truncate">{member.email}</span>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center text-sm text-gray-400">
                                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                                        <span>Contact information unavailable</span>
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

 


 