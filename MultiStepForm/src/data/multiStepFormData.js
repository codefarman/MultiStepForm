import {
  School,
  Business,
  VerifiedUser,
  Timeline,
  Work,
  CurrencyRupee,
  Landscape,
  Engineering,
  Science,
  Computer,
  LocalHospital,
  FlightTakeoff,
  TrendingDown,
  Grade,
  TrendingUp,
  AccountBalance,
  // New Premium Icons
  HistoryEdu,     // For 12th / Qualification
  CastForEducation, // Online MBA
  BusinessCenter, // Offline/Exec MBA
  AutoGraph,      // Career Growth
  SwitchAccount,  // Promotion
  Terminal,       // IT
  Campaign,       // Marketing
  Diversity3,     // HR
  ConnectWithoutContact, // Sales (or similar)
  SupportAgent,   // Operations/Support
  Factory,        // Supply Chain
  Analytics,      // Business Analytics
  Biotech,        // Data Science -> or Science
  TravelExplore,  // Travel & Tourism
  Language,       // International Business / Language
  Savings,        // Budget
  Payments,       // Fee / Salary
  Place,          // Location/Countries
  WorkspacePremium // Certifications
} from "@mui/icons-material";

// ... (University Logos stay the same)
import amity from "../assets/logos/Universities/Amity-univ-logo.jpeg";
import op_jindal from "../assets/logos/Universities/OP-Jindal-Univ-logo.jpeg";
import galotia from "../assets/logos/Universities/galgotia-university-min.jpg";
import parul from "../assets/logos/Universities/parul-university.jpg";
import vgu from "../assets/logos/Universities/vgu-logo.png";
import ggu from "../assets/logos/Universities/golden-gate-uni_logo-min.png";
import uttranchal from "../assets/logos/Universities/uttranchal-univ-logo.png";
import mmu from "../assets/logos/Universities/mmu-univ-logo_11zon.png";
import GLA from "../assets/logos/Universities/GLA-univ-11zon.png";
import jain from "../assets/logos/Universities/jain-univ-logo.png";
import manipal from "../assets/logos/Universities/manipal-univ-logo-min.png";
import kurukshetra from "../assets/logos/Universities/kurukshetra-univ-logo.png";
import shoolini from "../assets/logos/Universities/shoolini-univ-img-min.png";
import sharda from "../assets/logos/Universities/sharda-univ-img-min.png";
import DPU from "../assets/logos/Universities/DPU-univ-logo-min.png";
import chandigarh from "../assets/logos/Universities/chandigarh-univ-logo.webp";
import DYP from "../assets/logos/Universities/DYP-univ-navi-mumbai-logo.png";
import liverpool from "../assets/logos/Universities/liverpool-john-moores-univ-img.webp";
import LPU from "../assets/logos/Universities/LPU-univ-logo.png";


export const UNIVERSITIES = [
  { name: "Amity University", emi: "₹ 8291*", approvals: "UGC, AICTE", logo: amity },
  { name: "OP Jindal University", emi: "₹ 7500*", approvals: "UGC", logo: op_jindal },
  { name: "Galgotias University", emi: "₹ 3200*", approvals: "UGC, NAAC A+", logo: galotia },
  { name: "Parul University", emi: "₹ 5400*", approvals: "UGC, NAAC A++", logo: parul },
  { name: "VGU University", emi: "₹ 4500*", approvals: "UGC", logo: vgu },
  { name: "Golden Gate University", emi: "₹ 9800*", approvals: "WES, International", logo: ggu },
  { name: "Uttranchal University", emi: "₹ 4800*", approvals: "UGC, NAAC A+", logo: uttranchal },
  { name: "MMU University", emi: "₹ 5100*", approvals: "UGC, NAAC A+", logo: mmu },
  { name: "GLA University", emi: "₹ 4292*", approvals: "UGC, NAAC A+", logo: GLA },
  { name: "Jain University", emi: "₹ 8166*", approvals: "UGC, NAAC A++", logo: jain },
  { name: "Manipal University Jaipur", emi: "₹ 7291*", approvals: "UGC, NAAC A++", logo: manipal },
  { name: "Kurukshetra University", emi: "₹ 3900*", approvals: "UGC, NAAC A+", logo: kurukshetra },
  { name: "Shoolini University", emi: "₹ 6200*", approvals: "UGC, NAAC A+", logo: shoolini },
  { name: "Sharda University", emi: "₹ 5900*", approvals: "UGC, NAAC A+", logo: sharda },
  { name: "DY Patil University", emi: "₹ 7229*", approvals: "UGC, NAAC A++", logo: DPU },
  { name: "Chandigarh University", emi: "₹ 6875*", approvals: "UGC, NAAC A+", logo: chandigarh },
  { name: "DY Patil Navi Mumbai", emi: "₹ 7400*", approvals: "UGC", logo: DYP },
  { name: "Lovely Professional University", emi: "₹ 6166*", approvals: "UGC, NAAC A++", logo: LPU },
  { name: "Liverpool John Moores University", emi: "₹ 10,500*", approvals: "WES, International", logo: liverpool },
];

export const PROGRAMS = [
  { label: "UG Courses", value: "UG", icon: School },
  { label: "PG Courses", value: "PG", icon: Business },
  { label: "Study Abroad", value: "STUDY_ABROAD", icon: FlightTakeoff },
  { label: "Certifications", value: "CERTIFICATION", icon: WorkspacePremium },
];

/* PG SUB TYPES */
export const PG_TYPES = [
  { label: "Online MBA", value: "Online MBA", icon: CastForEducation },
  { label: "Offline MBA", value: "Offline MBA", icon: BusinessCenter },
  { label: "Executive MBA", value: "Executive MBA", icon: VerifiedUser },
];

export const COURSE_PURPOSE = [
  { label: "Salary Hike", value: "Salary Hike", icon: TrendingUp },
  { label: "Promotion", value: "Promotion", icon: SwitchAccount },
  { label: "Career Growth", value: "Career Growth", icon: AutoGraph },
  { label: "Field Change", value: "Field Change", icon: Landscape },
];

export const WORKING_FIELDS = [
  { label: "IT / Software", value: "IT / Software", icon: Terminal },
  { label: "Finance", value: "Finance", icon: AccountBalance },
  { label: "Marketing", value: "Marketing", icon: Campaign },
  { label: "HR", value: "HR", icon: Diversity3 },
  { label: "Healthcare", value: "Healthcare", icon: LocalHospital },
  { label: "Engineering", value: "Engineering", icon: Engineering },
  { label: "Education", value: "Education", icon: School },
  { label: "Other", value: "Other", icon: Landscape },
];

export const SALARY_RANGES = [
  { label: "Below ₹25,000", value: "Below ₹25,000", icon: Payments },
  { label: "₹25,000 – ₹50,000", value: "₹25,000 – ₹50,000", icon: Payments },
  { label: "₹50,000 – ₹1 Lakh", value: "₹50,000 – ₹1 Lakh", icon: Payments },
  { label: "Above ₹1 Lakh", value: "Above ₹1 Lakh", icon: Savings },
];

export const STUDY_ABROAD_BUDGETS = [
  { label: "Above ₹25 Lakh", value: "Above ₹25 Lakh", icon: Savings },
  { label: "₹20 – 25 Lakh", value: "₹20 – 25 Lakh", icon: CurrencyRupee },
  { label: "₹15 – 20 Lakh", value: "₹15 – 20 Lakh", icon: CurrencyRupee },
  { label: "₹12 – 15 Lakh", value: "₹12 – 15 Lakh", icon: CurrencyRupee },
];

export const COURSE_LEVELS = [
  { label: "Undergraduate (UG)", value: "UG", icon: School },
  { label: "Postgraduate (PG)", value: "PG", icon: Business },
];

export const STUDY_ABROAD_ANNUAL_BUDGETS = [
  { label: "₹12 – 15 Lakh / year", value: "12-15", icon: CurrencyRupee },
  { label: "₹15 – 20 Lakh / year", value: "15-20", icon: CurrencyRupee },
  { label: "₹20 – 25 Lakh / year", value: "20-25", icon: CurrencyRupee },
  { label: "Above ₹25 Lakh / year", value: "25+", icon: Savings },
];

export const STUDY_ABROAD_COUNTRIES = [
  { name: "United Kingdom", code: "gb", icon: Place },
  { name: "Ireland", code: "ie", icon: Place },
  { name: "United States", code: "us", icon: Place },
  { name: "Canada", code: "ca", icon: Place },
  { name: "Australia", code: "au", icon: Place },
  { name: "New Zealand", code: "nz", icon: Place },
  { name: "Germany", code: "de", icon: Place },
  { name: "France", code: "fr", icon: Place },
  { name: "Switzerland", code: "ch", icon: Place },
  { name: "United Arab Emirates", code: "ae", icon: Place },
  { name: "Netherlands", code: "nl", icon: Place },
  { name: "Spain", code: "es", icon: Place },
  { name: "Poland", code: "pl", icon: Place },
  { name: "Grenada", code: "gd", icon: Place },
  { name: "Cyprus", code: "cy", icon: Place },
];


/* COMMON OPTIONS */

export const QUALIFICATIONS = [
  { label: "12th", value: "12th", icon: HistoryEdu },
  { label: "Graduate", value: "UG", icon: School },
  { label: "Post Graduate", value: "PG", icon: Business },
];

export const ACADEMIC_PERFORMANCE = [
  { label: "Below 60%", value: "Below 60%", icon: TrendingDown },
  { label: "60% – 75%", value: "60% – 75%", icon: Grade },
  { label: "75% & Above", value: "75% & Above", icon: WorkspacePremium },
];

export const EXPERIENCE = [
  { label: "Fresher (0–2 years)", value: "Fresher (0–2 years)", icon: School },
  { label: "2–4 years", value: "2–4 years", icon: Work },
  { label: "4–7 years", value: "4–7 years", icon: Timeline },
  { label: "7+ years", value: "7+ years", icon: VerifiedUser },
];

export const INTERESTS = [
  { label: "Marketing", value: "Marketing", icon: Campaign },
  { label: "Sales", value: "Sales", icon: ConnectWithoutContact },
  { label: "Finance", value: "Finance", icon: AccountBalance },
  { label: "HR", value: "HR", icon: Diversity3 },
  { label: "Operations", value: "Operations", icon: SupportAgent },
  { label: "Supply Chain", value: "Supply Chain", icon: Factory },
  { label: "Business Analytics", value: "Business Analytics", icon: Analytics },
  { label: "Data Science", value: "Data Science", icon: Biotech },
  { label: "IT", value: "IT", icon: Terminal },
  { label: "Digital Marketing", value: "Digital Marketing", icon: Computer },
  { label: "Healthcare", value: "Healthcare", icon: LocalHospital },
  { label: "Travel & Tourism", value: "Travel & Tourism", icon: TravelExplore },
  { label: "International Business", value: "International Business", icon: Language },
  { label: "Others / Not Sure", value: "Others / Not Sure", icon: Landscape },
];

export const BUDGETS = [
  { label: "Under ₹1 Lakh", value: "Under ₹1 Lakh", icon: Payments },
  { label: "₹1 – 1.5 Lakh", value: "₹1 – 1.5 Lakh", icon: Payments },
  { label: "₹1.5 – 2 Lakh", value: "₹1.5 – 2 Lakh", icon: Payments },
  { label: "Above ₹2 Lakh", value: "Above ₹2 Lakh", icon: Savings },
];

export const COUNTRIES = [
  { label: "USA", value: "USA", icon: Place },
  { label: "UK", value: "UK", icon: Place },
  { label: "Canada", value: "Canada", icon: Place },
  { label: "Australia", value: "Australia", icon: Place },
  { label: "Germany", value: "Germany", icon: Place },
  { label: "Ireland", value: "Ireland", icon: Place },
];

/* PROGRAM FLOW */
export const PROGRAM_FLOW = {
  UG: [
    "qualification",
    "academic",
    "interest",
    "budget",
    "final",
  ],

  PG: [
    "pgType",
    "qualification",
    "academic",
    "interest",
    "experience",
    "budget",
    "final",
  ],



  STUDY_ABROAD: [
    "qualification",
    "courseLevel",      // UG or PG interest
    "academic",
    "country",
    "experience",
    "annualBudget",
    "final",
  ],


  CERTIFICATION: [
    "qualification",
    "academic",
    "workingField",
    "experience",
    "budget",
    "purpose",
    "final",
  ],

};