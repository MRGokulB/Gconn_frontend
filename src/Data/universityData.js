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
  ]
};

export default universityData;
