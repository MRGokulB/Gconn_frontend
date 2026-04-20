// src/data/universityData.js
const universityData = {
  // top small contact bar
  contact: {
    helpline1: "XXX-XXX-XXXX",
    helpline2: "XXX-XXX-XXXX",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/"
  },

  // main nav links (dropdowns handled in UI)
  navLinks: [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Annexures", path: "/annexures" },
    { title: "University", path: "/university" },
    { title: "Examination", path: "/examination" },
    { title: "Academic", path: "/academic" },
    { title: "Online Payment", path: "/payment" },
    { title: "RTI", path: "/rti" },
    { path: "/faculty", title: "Faculty" },
  ],

  // important side links (left column)
  importantLinks: [
    "MUHS Act 1998",
    "Perspective Plan 2022-27",
    "Proactive Disclosures (RTI)",
    "Citizen Charter",
    "Right To Service Act, 2015",
    "Finance",
    "Online Payment",
    "Whats New",
    "Gallery",
    "Contact Us"
  ],

  // top officers (for the carousel / cards)
  topOfficers: [{ id: 1, name: "Hon'ble Shri Acharya Devvrat", title: "Chancellor", image: "/assets/images/officers/chancellor.jpg" },
  { id: 2, name: "Shri. Hasan Mushrif", title: "Pro-Chancellor", image: "/assets/images/officers/pro-chancellor.jpg" },
  { id: 3, name: "Lt Gen Madhuri Kanitkar (Retd)", title: "Vice-Chancellor", image: "/assets/images/officers/vice-chancellor.jpg" },
  { id: 4, name: "Prof Dr. Milind Nikumbh", title: "Pro Vice-Chancellor", image: "/assets/images/officers/pro-vc.jpg" },
  { id: 5, name: "Dr. Rajendra Bangal", title: "Registrar", image: "/assets/images/officers/registrar.jpg" },
  { id: 6, name: "Prof. Dr. Sandeep S. Kadu", title: "Controller of Examinations", image: "/assets/images/officers/controller.jpg" },
  ],

  // about section text (will be imported into AboutSection)
  about: {
    title: "MAHARASHTRA UNIVERSITY OF HEALTH SCIENCES (MUHS), NASHIK",
    paragraphs: [
      "The state Government of Maharashtra has established and incorporated an independent University of the health sciences for the purposes of ensuring proper and systematic instruction, teaching, training and research in modern medicine and Indian system of medicine in the State of Maharashtra and to have balanced growth in the medical sciences so also in uniformity in various courses in medical faculty in the State, and to provide for matters connected therewith and incidental thereto.",
      "MUHS focuses on promoting quality education, research and innovation in healthcare. The university aims to support students via modern infrastructure and digital initiatives."
    ],
    missionPoints: [
      "Provide high quality medical education and training.",
      "Promote research and innovation in health sciences.",
      "Facilitate digital & online examination processes."
    ]
  },

  // courses section (cards)
  courses: [
    { id: "pg", title: "Post Graduate", short: "Advanced specialization programs", image: "/assets/images/courses/pg.jpg" },
    { id: "super-speciality", title: "Super Speciality", short: "Highly focused clinical training", image: "/assets/images/courses/super.jpg" },
    { id: "ug", title: "UG Diploma", short: "Undergraduate diploma programs", image: "/assets/images/courses/ug.jpg" },
    { id: "certificate", title: "Certificate Course", short: "Short-term professional courses", image: "/assets/images/courses/certificate.jpg" },
  ],

  // news / press releases (simple)
  news: [
    {
      id: 1,
      title: "Circular No. 07/2025 - Provisional General Merit List",
      date: "01-10-2025",
      excerpt: "To publish the Provisional General Merit list of eligible candidates and list of Not Eligible candidates for admission to Ph.D. Course."
    },
    {
      id: 2,
      title: "Admission Notice - PG Course 2024-25",
      date: "29-09-2025",
      excerpt: "Important information regarding PG admissions and schedule."
    },
    {
      id: 3,
      title: "University Online Exam Monitoring Update",
      date: "25-09-2025",
      excerpt: "Update on online exam monitoring with CCTV integration."
    }
  ],

  // FAQ list (right column)
  faqs: [
    "Information Related to Eligibility and Registration for UG PG Courses",
    "Information Related to Migration",
    "Information Related to University Theory Examinations",
    "Information Related to Result",
    "Information Related to Examination Form and Hall Tickets",
    "Information Related to Degree Certificate"
  ],

  facultyMembers: [
    {
      name: 'Prof. Balaji Nangrale',
      image: "/assets/images/Faculty/Nangrale B B.jpg",
      title: 'Principal • Medical Surgical Oncology Nursing',
      email: 'balajinagrale@gmail.com',
      bio: `College of Nursing, proposes to prepare nurses for global healthcare industry. The health care needs of people are dynamic and are more challenging with emerging new diseases and increasing load of non-communicable diseases. The nurses today have their roles expanded from traditional care giving to their contributions in preventive and promotive aspects of health. Our college with its state of the art facilities shall be one of the best college of nursing in the Nanded district and Marathawada region of Maharashtra.
        Today, alternative and complementary modalities of treatment is accessible and affordable to people of all classes. Nurses need to be trained in caring for clients choosing from these diverse treatment modalities. The books of nursing demand inclusions of extensive literature related to caring the patients opting such modalities. This college is committed to fulfil these demands of the present client. As head of the College of Nursing, I feel privileged to be part of a visionary group committed to social cause and quality health professional's education.
        The pass outs can work as Registered nurse in Government/ private Hospitals, medical institutes, colleges, etc. The candidates have great demand in national as well as international health care sectors. Also they can pursue higher education in M.Sc nursing which enables them to seek teaching profession in Nursing.`
    },
    {
      name: 'Prof. Bhimu Chakre',
      image: "/assets/images/Faculty/ChakreBP.jpg",
      title: 'Vice Principal • Mental Health Nursing',
      email: 'bpchakre@gmail.com',
      bio: `Mental health is an essential pillar of healthcare, influencing every aspect of an individual's life and well-being. As Vice Principal and faculty in Mental Health Nursing, I am dedicated to shaping nurses who can deliver holistic, empathetic, and evidence-based care. My goal is to foster a deeper understanding of the human mind and its connection to overall health, preparing students to respond compassionately and competently to mental health challenges.
        At our institution, we provide an environment that prioritizes emotional intelligence, patient-centered care, and interdisciplinary collaboration. I guide students to develop strong clinical judgment while nurturing empathy and communication — two core values of mental health nursing. We encourage active learning through case studies, role-play, and reflective discussions, ensuring that students become confident and sensitive caregivers.
        I believe that nursing education is not just about clinical training but about nurturing humanity within healthcare. Together, we aim to create professionals who advocate for mental health awareness, break societal stigmas, and contribute to a world that values emotional well-being as much as physical health.`
    },
    {
      name: 'Ms. Chandbibi Pathan',
      image: "/assets/images/Faculty/Pathan C H.jpg",
      title: 'Tutor • ObGy',
      email: 'chandbibipathan@gmail.com',
      bio: `As a faculty member specializing in Obstetrics and Gynecology, I am passionate about preparing nursing students to serve women with confidence, empathy, and clinical precision. Maternal and neonatal health form the cornerstone of nursing care, and I aim to equip students with the knowledge and hands-on experience to handle this vital responsibility with grace and competence.
        Through innovative teaching methods and compassionate mentorship, I help students understand the emotional and physical dimensions of maternal care. My goal is to foster professionals who can blend evidence-based practice with human touch, ensuring dignity and safety for every mother and newborn. Our college’s commitment to women’s health aligns perfectly with my vision of empowering future nurses to bring life, care, and hope to every family they serve.`
    },
    {
      name: 'Mr. Salim Shaikh',
      image: "/assets/images/Faculty/Shaikh.jpg",
      title: 'Tutor • Community Health Nursing',
      email: 'ss13111972@gmail.com',
      bio: `Community Health Nursing stands as the bridge between healthcare institutions and the people they serve. My teaching philosophy revolves around empowering students to address real-world challenges through preventive, promotive, and rehabilitative care. I encourage each learner to understand the social, economic, and environmental determinants of health that shape communities.
        By guiding students in outreach programs and rural health initiatives, I aim to cultivate leadership and empathy among future nurses. Our goal is to produce community health professionals who not only treat illness but also work toward long-term wellness and equity. Together, we are nurturing a generation of nurses ready to transform public health through compassion, service, and knowledge.`
    },
    {
      name: 'Ms. Unita Deshmane',
      image: "/assets/images/Faculty/Deshmane U B.jpg",
      title: 'Tutor • Nursing Foundation',
      email: 'ubdeshmane@gmail.com',
      bio: `The Nursing Foundation is where every student begins their journey toward professional excellence. My passion lies in strengthening this base — ensuring that every student learns the principles, techniques, and ethics that define outstanding nursing care. I emphasize both precision and compassion, helping students balance clinical competence with humane service.
        At our college, I strive to make foundational training interactive and impactful. Each lecture and practical session is an opportunity to mold confident and responsible nurses who uphold the dignity of the profession. I believe that once students master the basics with dedication, they will shine across any specialization they pursue.`
    },
    {
      name: 'Mr. Rameshwar Palwade',
      image: "/assets/images/Faculty/Palwade R V.jpg",
      title: 'Tutor • Community Health Nursing',
      email: 'Rampalwade6171@gmail.com',
      bio: `Community health is the soul of nursing education — and my mission is to help students understand its depth and importance. I focus on preparing nurses who can serve not only in hospitals but in villages, schools, and families — wherever health promotion is needed most.
        By connecting theoretical knowledge with field experiences, I guide my students to see health from a broader, people-centered perspective. My vision is to develop professionals who are compassionate advocates of preventive care and community development. Together, we aim to build a healthier and more informed society through service, outreach, and continuous learning.`
    },
    {
      name: 'Mr. Mudassir Ansari',
      image: "/assets/images/Faculty/Ansari.jpg",
      title: 'Tutor • Community Health Nursing',
      email: 'mudseeransari@gmail.com',
      bio: `Nursing is both a science and a service, and community health allows us to practice both meaningfully. My approach to teaching integrates practical exposure, research-driven insights, and community engagement. I aim to prepare nurses who understand that every community — urban or rural — deserves accessible and quality healthcare.
        At this college, I take pride in mentoring students to become independent thinkers and compassionate caregivers. Through health camps, surveys, and real-life case studies, they learn to identify challenges and craft solutions. My dedication lies in shaping nurses who will take preventive healthcare to the next level, ensuring wellness reaches every corner of society.`
    },
    {
      name: 'Ms. Pradnya Madle',
      image: "/assets/images/Faculty/Madle P A.jpg",
      title: 'Tutor • ObGy',
      email: 'pradnyamadle9@gmail.com',
      bio: `Nursing in Obstetrics and Gynecology is a journey of compassion, science, and responsibility. My teaching philosophy is to nurture nurses who can handle the joys and complexities of childbirth and women’s health with confidence and care. I believe that effective maternal care begins with education that blends theory with practical understanding.
        At our institution, I create a supportive environment where students can learn through real-world experiences and patient-centered care. I am proud to contribute to the college’s mission of empowering nurses to uphold the dignity of women’s health and to provide care that brings safety, comfort, and hope to every mother.`
    },
    {
      name: 'Mr. Ajay Mohite',
      image: "/assets/images/Faculty/Mohite.jpeg",
      title: 'Tutor • Community Health Nursing',
      email: 'ajaymohite17@gmail.com',
      bio: `Community Health Nursing is about service beyond walls — reaching people where they live, work, and learn. I consider it a privilege to guide students on this rewarding path of public service and empowerment. Through my teaching, I emphasize the value of teamwork, cultural sensitivity, and innovative thinking in addressing public health challenges.
        Our college provides a strong foundation for such experiential learning, allowing students to participate directly in community programs and surveys. My goal is to see each student graduate not just as a nurse, but as a change-maker — ready to contribute to a healthier, more resilient society.`
    },
    {
      name: 'Mr. Chavan Sunil',
      image: "/assets/images/Faculty/Chavan Sunil.jpg",
      title: 'Tutor • Child Health Nursing',
      email: 'sunilschavan47@gmail.com',
      bio: `As a tutor specializing in Child Health Nursing, I am dedicated to nurturing a generation of nurses who are skilled in pediatric care. My focus is on the unique needs of children and their families, emphasizing growth, development, and preventive care.
        I guide students to understand the delicate nature of pediatric nursing, fostering patience, observation, and gentle care. Together, we strive to ensure a healthier future by protecting and promoting the well-being of our youngest population.`
    },
    {
      name: 'Mr. S Kendre',
      image: "/assets/images/Faculty/Kendre S.jpg",
      title: 'Tutor • Mental Health Nursing',
      email: 'kendresantosh62@gmail.com',
      bio: `Mental Health Nursing is a field requiring profound empathy and understanding. My mission is to equip students with the skills to provide holistic care for individuals facing mental health challenges. I emphasize the importance of breaking stigma and promoting mental well-being in society.
        Through theoretical knowledge and clinical exposure, I guide students to become compassionate listeners and effective caregivers. I am proud to contribute to a learning environment that values emotional intelligence and human dignity.`
    },
    {
      name: 'Ms. Shreedevi Maske',
      image: "/assets/images/Faculty/Maske Shreedevi.jpeg",
      title: 'Tutor • Community Health Nursing',
      email: 'shridevimaske01@gmail.com',
      bio: `As a tutor in Community Health Nursing, I am deeply committed to helping students grasp the essence of public service through nursing. My teaching emphasizes awareness, communication, and empathy — the cornerstones of effective community care. I motivate students to understand the cultural and environmental context of every patient they serve.
        Our college’s mission aligns perfectly with my vision to train nurses who are confident, capable, and community-oriented. I take pride in mentoring students who will become ambassadors of preventive health, working tirelessly to uplift the lives of individuals and families across all backgrounds.`
    },
    {
      name: 'Mr. Sushilkumar Rathod',
      image: "/assets/images/Faculty/Rathod Sushil.jpg",
      title: 'Tutor • Community Health Nursing',
      email: '',
      bio: `Public health is a collective effort, and nursing plays a vital role in shaping its success. In my teaching, I focus on preparing students to be proactive, observant, and compassionate in their approach to healthcare delivery. Each classroom session and community visit becomes an opportunity for students to develop both skills and empathy.
        At our college, I have the privilege to guide future nurses who are motivated to make a difference beyond hospital boundaries. My goal is to help them grow into professionals who embody the values of service, discipline, and humanity — the pillars of nursing excellence.`
    },
    {
      name: 'Mr. Shrinivas Shahapure',
      image: "/assets/images/Faculty/Mahapure Shreenivas.jpg",
      title: 'Tutor • Mental Health Nursing',
      email: '',
      bio: `As a dedicated faculty member in Mental Health Nursing, my focus is on helping students understand the complexities of psychiatric care and the importance of mental hygiene. I believe in a compassionate approach that respects the dignity of every individual.
        I strive to create an engaging learning environment where students can develop the critical thinking and interpersonal skills necessary for effective mental health practice. It is my privilege to mentor future nurses who will be instrumental in promoting mental health and providing support to those in need.
        Through interactive learning and real-world exposure, I strive to build confidence, responsibility, and leadership among our students. Together, we are contributing to a healthcare system that prioritizes compassion, inclusivity, and proactive well-being for every community we serve.`
    },
    {
      name: 'Mr. Santosh Dhanure',
      image: "/assets/images/Faculty/Dhanure Santosh.jpeg",
      title: 'Tutor • Medical Surgical Nursing',
      email: 'santoshdhanure1991@gmail.com',
      bio: `Medical Surgical Nursing with a specialization in Oncology is a demanding and deeply rewarding field that requires both clinical precision and heartfelt compassion. As a Tutor dedicated to this discipline, my goal is to prepare nursing students to deliver exceptional care to patients navigating complex surgical and oncological conditions.
        I believe in blending evidence-based practice with empathetic patient interaction, ensuring that every student understands the science behind treatment as well as the emotional needs of those they care for. Through structured clinical exposures and case-based learning, I help students develop the critical thinking and decision-making skills essential for high-acuity care environments.
        At our institution, I am committed to fostering a culture of continuous learning and professional growth. My vision is to mentor nurses who are not only technically proficient but also emotionally resilient — professionals who bring hope, comfort, and healing to patients and their families during the most challenging moments of their lives.`
    },
    {
      name: 'Mr. Vishwajeet Kamble',
      image: "/assets/images/Faculty/Kamble Vishwajeet.jpeg",
      title: 'Tutor • Nursing Education',
      email: '',
      bio: `As a dedicated Tutor in Nursing Education, I am committed to nurturing the next generation of healthcare professionals with a focus on clinical excellence and compassionate care. My teaching philosophy revolves around creating an engaging and supportive learning environment where students can develop both their technical skills and their capacity for empathy.
        I believe that effective nursing education goes beyond textbooks and lectures — it requires hands-on experience, reflective practice, and a deep understanding of patient-centered care. Through innovative teaching methods and mentorship, I guide students to become confident practitioners who can adapt to the evolving demands of modern healthcare.
        At our institution, I take pride in contributing to a learning culture that values integrity, professionalism, and lifelong learning. Together, we are shaping nurses who will make meaningful contributions to health outcomes across communities.`
    },
    {
      name: 'Mr. Yashwant Wathore',
      image: "/assets/images/Faculty/Wathore Yashwant.jpeg",
      title: 'Tutor • Nursing Education',
      email: '',
      bio: `Nursing is a profession built on trust, skill, and unwavering dedication to human well-being. As a Tutor, my mission is to instill these core values in every student I guide. I focus on bridging the gap between theoretical knowledge and practical application, ensuring that graduates are fully prepared for the realities of clinical practice.
        My approach to teaching is rooted in active learning — engaging students through simulations, case discussions, and collaborative problem-solving. I believe that when students are actively involved in their education, they develop deeper understanding and stronger clinical judgment that serves them throughout their careers.
        I am proud to be part of an institution that is dedicated to producing well-rounded nursing professionals. Through continuous mentorship and a commitment to academic excellence, I strive to help every student realize their potential and contribute meaningfully to the healthcare sector.`
    },
    {
      name: 'Mr. Dnyaneshwar Panchal',
      image: "/assets/images/Faculty/Panchal Dnyaneshwar.jpeg",
      title: 'Tutor • Nursing Education',
      email: '',
      bio: `Education is the cornerstone of quality healthcare, and as a Tutor in Nursing, I am passionately devoted to building strong foundations for aspiring nurses. My teaching methodology integrates clinical expertise with innovative pedagogical approaches, preparing students to navigate complex healthcare scenarios with confidence and competence.
        I emphasize critical thinking, ethical practice, and evidence-based decision-making in every aspect of my instruction. By creating a nurturing academic environment, I encourage students to question, explore, and grow both personally and professionally. My goal is to develop nurses who are not only skilled clinicians but also compassionate advocates for patient welfare.
        At our college, we share a collective vision of excellence in nursing education. I am honored to play a role in mentoring future healthcare leaders who will carry forward the values of service, integrity, and dedication to the well-being of every individual they encounter.`
    },
    {
      name: 'Smt. Poonam Rajput',
      image: "/assets/images/Faculty/Rajput Poonam.jpeg",
      title: 'Tutor • Community Health Nursing',
      email: 'poonambaisrajput1494@gmail.com',
      bio: `Community Health Nursing is at the heart of preventive and promotive healthcare, and as a Tutor in this specialty, I am dedicated to training nurses who can serve as catalysts for positive change in communities. My teaching focuses on equipping students with the knowledge and skills to assess community health needs, design interventions, and evaluate outcomes effectively.
        I believe that the strength of a healthcare system lies in its ability to reach every individual, regardless of their socio-economic background. Through field-based learning, health education campaigns, and community engagement activities, I help students develop a holistic understanding of public health challenges and solutions.
        At our institution, I am proud to nurture future nurses who will champion health equity, disease prevention, and community empowerment. Together, we are building a healthier society — one community, one family, one individual at a time.`
    },
    {
      name: 'Smt. Mayuri Andhare',
      image: "/assets/images/Faculty/Andhare Mayuri.jpeg",
      title: 'Tutor • Obstetrics and Gynecology',
      email: 'mayuriandhare24@gmail.com',
      bio: `Obstetrics and Gynecology nursing is a field that demands both clinical excellence and deep compassion. As a Tutor specializing in this discipline, I am committed to preparing students to provide safe, dignified, and evidence-based care to women across all stages of their reproductive health journey.
        My teaching philosophy centers on hands-on clinical experience combined with strong theoretical foundations. I guide students through the complexities of maternal and neonatal care, empowering them to handle both routine and high-risk situations with confidence and sensitivity. I believe that every mother and newborn deserves the highest standard of care, and this belief drives my dedication to nursing education.
        At our college, I am honored to contribute to the development of skilled, empathetic nurses who will be advocates for women's health and well-being. Through mentorship and continuous learning, we are shaping professionals who bring hope, safety, and compassion to every family they serve.`
    },
    {
      name: 'Mr. Sharad Kendre',
      image: "/assets/images/Faculty/Kendre Sharad.jpeg",
      title: 'Assistant Professor • Mental Health Nursing',
      email: 'sharadkendre777@gmail.com',
      bio: `A professor specializing in Mental Health (Psychiatric) Nursing operates at the intersection of clinical expertise, academic research, and advocacy. Their focus is not just on treating illness, but on the holistic "recovery model" and the psychological well-being of both patients and the student nurses they mentor.
        Psychiatric nursing education plays a vital role in preparing nursing students to meet the growing mental health needs of individuals and communities. As a Mental health professional and Assistant Professor in an Institute of Nursing, my responsibilities are guiding, teaching, and mentoring students to become competent and compassionate mental health professionals.
        My focus goes far beyond just delivering lectures. It centers on shaping competent, empathetic, and mentally aware nurses who can handle real-life psychological and emotional challenges in patients.
        My role in an Institute of Nursing is crucial in shaping the future workforce of mental health services. Through effective teaching, clinical supervision, and mentorship, the educator ensures the development of skilled, ethical, and compassionate nurses capable of providing holistic mental health care in both hospital and community settings.`
    },
  ]
};

export default universityData;
