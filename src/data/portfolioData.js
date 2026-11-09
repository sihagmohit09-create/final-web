/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * All content for Mohit's portfolio is maintained here.
 * To update your portfolio in the future:
 * 1. To change your profile picture: replace /public/assets/mohit.jpg or update the `profileImage` path below.
 * 2. To add a certificate: add a new object to `certificates` array with the image placed in /public/assets/.
 * 3. To update internships: edit or add entries in the `internships` array.
 * 4. To edit skills or education: modify the respective arrays below.
 * No code changes in UI components are required!
 */

export const personalInfo = {
  name: "Mohit",
  headline: "Marketing | Operations | Business Analytics",
  subheadline: "Bridging technology, business strategy and data-driven decision-making.",
  aboutBrief:
    "MBA candidate at IILM University with a B.Tech in Computer Science Engineering from UPES. I combine technical fluency in data analytics and software systems with strategic capabilities in marketing, operations, procurement, and process optimization.",
  location: "Greater Noida & NCR, India",
  email: "mohit.gnmba27@iilm.edu",
  phone: "7015129246",
  displayPhone: "+91 70151 29246",
  linkedin: "https://www.linkedin.com/in/mohit-sihag-b66566228",
  profileImage: "/assets/mohit.jpg",
  resumePath: "#contact", // or link to a downloadable resume PDF in /assets/resume.pdf
  quickStats: [
    { label: "Core Focus", value: "Marketing & Ops" },
    { label: "Engineering Root", value: "B.Tech CSE" },
    { label: "Quality Certification", value: "Lean Six Sigma" },
    { label: "Analytics Expertise", value: "Excel & Power BI" },
  ],
};

export const aboutMe = {
  narrative: [
    "I am an MBA candidate specialising in Marketing and Operations at IILM University, Greater Noida, backed by a rigorous Bachelor of Technology in Computer Science Engineering from UPES University. My trajectory unites engineering-level analytical discipline with contemporary business acumen.",
    "With proven hands-on exposure across end-to-end procurement and SAP at Solarworld Energy Solutions, AI-driven computer vision modelling at WCS India, and social data outreach at Kotak Education Foundation, I specialize in transforming raw operational and market data into strategic, actionable business decisions.",
    "I am targeting high-impact roles in Marketing, Business Analytics, and Operations where I can leverage predictive modelling, vendor strategy, and customer analytics to fuel sustainable corporate growth."
  ],
  corePillars: [
    {
      title: "Business Analytics & BI",
      description: "Developing dynamic KPI dashboards, statistical trend analysis, and data cleaning workflows using Advanced Excel, Power BI, and Python."
    },
    {
      title: "Marketing & Strategy",
      description: "Executing market research, digital marketing strategies, competitor benchmarking, and data-driven consumer behavior analysis."
    },
    {
      title: "Supply Chain & Procurement",
      description: "Managing Procure-to-Pay (P2P) cycles, SAP PR/PO generation, vendor negotiations, TCO evaluation, and logistics coordination."
    },
    {
      title: "Operational Excellence",
      description: "Implementing DMAIC methodologies, process variance reduction, root cause identification, and Lean Six Sigma best practices."
    }
  ],
  interestKeywords: [
    "Business Analytics",
    "Marketing Strategy",
    "Supply Chain Management",
    "Procurement & Vendor Management",
    "Data Visualisation",
    "Digital Marketing",
    "Business Development",
    "Operational Excellence"
  ]
};

export const educationList = [
  {
    degree: "MBA – Marketing & Operations",
    institution: "IILM University, Greater Noida",
    boardUniversity: "IILM University",
    duration: "2025 – 2027",
    score: "79.5%",
    status: "In Progress",
    description: "Specializing in Marketing Management, Operations Strategy, Supply Chain Optimization, and Data Analytics.",
    highlights: [
      "IIM Sirmaur Management Immersion Programme participant (Feb 2026)",
      "HCLTech Business Analytics & Data-Driven Decision-Making Programme (2025–2026)",
      "Live simulations in corporate strategy, HR analytics, and logistics"
    ]
  },
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "University of Petroleum & Energy Studies (UPES)",
    boardUniversity: "UPES University",
    duration: "2020 – 2024",
    score: "84.4%",
    status: "Completed",
    description: "Solid technical core covering object-oriented programming, data structures, algorithms, databases, cloud architecture, and machine learning.",
    highlights: [
      "Graduated with Distinction (84.4% aggregate)",
      "Developed deep expertise in Python, Java, C, and TensorFlow",
      "Applied computer vision models and bioeconomy research framework"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institution: "Indus Public School, Jind",
    boardUniversity: "Central Board of Secondary Education (CBSE)",
    duration: "2019 – 2020",
    score: "89.6%",
    status: "Completed",
    description: "Focused on Physics, Chemistry, and Mathematics with exceptional analytical aptitude.",
    highlights: ["Strong foundation in quantitative problem solving and mathematics"]
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institution: "Indus Public School, Pillukhera",
    boardUniversity: "Central Board of Secondary Education (CBSE)",
    duration: "2017 – 2018",
    score: "80.4%",
    status: "Completed",
    description: "Comprehensive foundational education covering Science, Mathematics, and Languages.",
    highlights: ["Consistent academic distinction and active participation in school co-curriculars"]
  }
];

export const internshipsList = [
  {
    company: "Solarworld Energy Solutions",
    role: "Supply Chain Management Intern",
    period: "June 2026 – July 2026",
    location: "Head Office, Noida",
    badge: "Supply Chain & Procurement",
    summary: "Hands-on role supporting corporate procurement operations, SAP P2P cycles, supplier evaluation, and total cost of ownership analysis.",
    responsibilities: [
      "Supported end-to-end procurement and vendor management, including supplier identification, quotation comparison, and delivery tracking.",
      "Created Purchase Requisitions (PRs) and Purchase Orders (POs) in SAP, gaining practical exposure to the Procure-to-Pay (P2P) cycle, GRN, and Accounts Payable processes.",
      "Conducted Total Cost of Ownership (TCO) analysis of wooden versus plastic pallets, evaluating initial capital outlay, durability, maintenance, and operational efficiencies.",
      "Coordinated with suppliers regarding delivery schedules, delayed shipments, samples, and critical material requirements to ensure uninterrupted production."
    ],
    skillsLearned: ["SAP ERP", "P2P Cycle", "Vendor Management", "TCO Analysis", "Procurement Logistics", "Quotation Comparison"],
    hasDocument: true,
    documentTitle: "Internship Offer & Appointment Letter",
    documentFile: "/assets/solarworld-internship-letter.jpg"
  },
  {
    company: "Wildlife Conservation Society (WCS India)",
    role: "Technical Intern",
    period: "June 2023 – July 2023",
    location: "Remote / Research Lab",
    badge: "AI & Computer Vision",
    summary: "Technical internship developing deep learning computer vision models for automated wildlife activity recognition.",
    responsibilities: [
      "Developed and trained a Convolutional Neural Network (CNN)-based behavioural classification model using TensorFlow to automate wildlife activity recognition for Snow Petrel birds.",
      "Engineered automated pipelines for image augmentation, normalisation, and feature extraction to enhance model accuracy and generalisation.",
      "Validated the CNN model in a Google Colab environment, achieving high benchmark performance for automated activity classification.",
      "Directly supported ecological conservation monitoring and data-driven decision making in remote wildlife zones."
    ],
    skillsLearned: ["TensorFlow", "CNN Architectures", "Python", "Google Colab", "Computer Vision", "Data Normalisation"],
    hasDocument: false
  },
  {
    company: "Kotak Education Foundation",
    role: "Social Intern",
    period: "June 2021 – July 2021",
    location: "Mumbai / Hybrid",
    badge: "Social Research & Analytics",
    summary: "Field and data research internship analyzing educational and career pathways for youth development programmes.",
    responsibilities: [
      "Conducted targeted outreach and beneficiary engagement initiatives to evaluate post-secondary education and career pathways among underserved youth populations.",
      "Leveraged organisational datasets for data-driven reporting and evidence-based programme enhancement.",
      "Systematised and documented beneficiary responses to strengthen NGO research integrity and field insights.",
      "Prepared comprehensive literature reviews synthesizing primary field surveys with secondary research to reinforce strategic decision-making."
    ],
    skillsLearned: ["Primary Research", "Stakeholder Outreach", "Data-Driven Reporting", "Literature Review", "Social Impact Evaluation"],
    hasDocument: false
  }
];

export const certificatesList = [
  {
    id: "kpmg-six-sigma",
    title: "Lean Six Sigma Green Belt Certification",
    issuer: "KPMG India Services LLP",
    date: "28 January 2026",
    duration: "4 Days | 32 Learning Hours",
    credentialId: "IP042026110",
    image: "/assets/kpmg-lean-six-sigma.png",
    downloadUrl: "/assets/kpmg-lean-six-sigma.png",
    description: "Industry-standard certification demonstrating mastery in DMAIC (Define, Measure, Analyze, Improve, Control) methodologies for corporate process improvement.",
    highlights: [
      "Proficient in DMAIC framework for structured root-cause analysis and operational waste reduction.",
      "Applied data-driven statistical methods and quality management best practices to business processes.",
      "Formulated continuous improvement and efficiency recommendations for enterprise workflows."
    ],
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "hcl-business-analytics",
    title: "Business Analytics & Data-Driven Decision-Making",
    issuer: "HCLTech (with IILM University)",
    date: "16 February 2026",
    duration: "October 2025 – January 2026",
    credentialId: "Issued by HCLTech",
    image: "/assets/hcl-business-analytics.jpg",
    downloadUrl: "/assets/hcl-business-analytics.jpg",
    description: "Executive programme delivering comprehensive practical training in business analytics, statistical modelling, and KPI dashboarding.",
    highlights: [
      "Delivered a live Business Analytics engagement leveraging Advanced Excel statistical analysis and Power BI to construct dynamic KPI dashboards.",
      "Streamlined automated data cleaning and transformation workflows, dramatically improving analytical accuracy.",
      "Generated actionable business intelligence reports supporting executive strategic planning."
    ],
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "iim-sirmaur-immersion",
    title: "Management Immersion Programme For MBA Students",
    issuer: "Indian Institute of Management Sirmaur (IIM Sirmaur)",
    date: "09 – 13 February 2026",
    duration: "Management Development Programme",
    credentialId: "IIMS/CMDP/WO-030/32",
    image: "/assets/iim-sirmaur-immersion.jpg",
    downloadUrl: "/assets/iim-sirmaur-immersion.jpg",
    description: "Rigorous executive management programme at IIM Sirmaur covering strategic leadership, operations management, and AI in business.",
    highlights: [
      "Engaged in real-world business simulations exploring AI applications in strategic decision-making and logistics optimization under senior IIM faculty mentorship.",
      "Analysed advanced business case studies on HR strategy, operational planning, and managerial problem-solving.",
      "Formulated structured frameworks for data-driven strategic corporate decision-making."
    ],
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
  }
];

export const researchPublication = {
  title: "Bright & Livable Bioeconomy Platform: A New Approach Towards Livability",
  topic: "Smart Cities, Artificial Intelligence, IoT & Urban Ecological Sustainability",
  role: "Lead Research Framework Developer",
  summary:
    "Developed a conceptual framework for a smart bioeconomy platform integrating Artificial Intelligence (AI) and Internet of Things (IoT) technologies to enhance sustainable urban ecosystems, enable real-time environmental monitoring, and support data-driven resource optimisation for ecological sustainability and smart city policy formulation.",
  keyContributions: [
    "Architected AI + IoT sensor data ingestion model for urban environmental parameters",
    "Formulated resource optimization algorithms to reduce metropolitan ecological footprints",
    "Outlined actionable data frameworks for municipal smart city policy formulation",
    "Bridged computational engineering with environmental sustainability metrics"
  ]
};

export const skillsCategories = [
  {
    category: "Analytics & Business Tools",
    iconName: "BarChart3",
    description: "Core analytical platforms and statistical tools for data manipulation and dashboarding.",
    skills: [
      { name: "Advanced Excel", level: "Expert" },
      { name: "Pivot Tables & VLOOKUP", level: "Expert" },
      { name: "Statistical Analysis", level: "Advanced" },
      { name: "Power BI (Dashboarding)", level: "Advanced" },
      { name: "Data Visualisation", level: "Advanced" },
      { name: "Data Cleaning & Prep", level: "Advanced" },
      { name: "Business Intelligence", level: "Advanced" },
      { name: "SAP (P2P / PR / PO)", level: "Intermediate" },
      { name: "Orange (Data Mining)", level: "Intermediate" }
    ]
  },
  {
    category: "Business & Management Skills",
    iconName: "Briefcase",
    description: "Strategic capabilities driving marketing, procurement, and commercial growth.",
    skills: [
      { name: "Market Research", level: "Advanced" },
      { name: "Market Analysis", level: "Advanced" },
      { name: "Competitor Analysis", level: "Advanced" },
      { name: "Digital Marketing", level: "Advanced" },
      { name: "Data-Driven Marketing", level: "Advanced" },
      { name: "Strategic Planning", level: "Advanced" },
      { name: "Business Development", level: "Intermediate" },
      { name: "Stakeholder Management", level: "Advanced" },
      { name: "Operational Excellence (DMAIC)", level: "Advanced" }
    ]
  },
  {
    category: "Technical Skills",
    iconName: "Code2",
    description: "Computer science foundation enabling software comprehension and AI execution.",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "C Language", level: "Intermediate" },
      { name: "TensorFlow & CNN", level: "Intermediate" },
      { name: "AWS (S3, KMS)", level: "Intermediate" },
      { name: "GIS & Remote Sensing", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" }
    ]
  },
  {
    category: "Soft & Leadership Skills",
    iconName: "Users",
    description: "Interpersonal and managerial attributes essential for cross-functional success.",
    skills: [
      { name: "Strategic Communication", level: "Exemplary" },
      { name: "Leadership", level: "Exemplary" },
      { name: "Analytical Problem-Solving", level: "Exemplary" },
      { name: "Critical Thinking", level: "Exemplary" },
      { name: "Negotiation", level: "Advanced" },
      { name: "Cross-Functional Collaboration", level: "Exemplary" },
      { name: "Decision-Making", level: "Exemplary" }
    ]
  }
];
