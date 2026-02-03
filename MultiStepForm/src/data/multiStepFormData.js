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
  WorkspacePremium, // Certifications
  RocketLaunch,   // Study Abroad substitute
  Psychology,     // Psychology substitute
  Gavel,          // Law substitute
  Brush,          // Arts substitute
  Public,         // International
  Balance,        // Finance alternate
  Lightbulb,      // Innovation/Other
  Handshake       // Sales alternate
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
  { label: "UG Courses", value: "UG", icon: School, color: "#3B82F6" },         // Blue
  { label: "PG Courses", value: "PG", icon: Business, color: "#8B5CF6" },       // Violet
  { label: "Study Abroad", value: "STUDY_ABROAD", icon: FlightTakeoff, color: "#F59E0B" }, // Amber
  { label: "Certifications", value: "CERTIFICATION", icon: WorkspacePremium, color: "#10B981" }, // Emerald
];

/* PG SUB TYPES */
export const PG_TYPES = [
  { label: "Online MBA", value: "Online MBA", icon: CastForEducation, color: "#8B5CF6" }, // Violet
  { label: "Offline MBA", value: "Offline MBA", icon: BusinessCenter, color: "#EC4899" }, // Pink
  { label: "Executive MBA", value: "Executive MBA", icon: VerifiedUser, color: "#06B6D4" }, // Cyan
];

export const COURSE_PURPOSE = [
  { label: "Salary Hike", value: "Salary Hike", icon: TrendingUp, color: "#10B981" },     // Emerald
  { label: "Promotion", value: "Promotion", icon: SwitchAccount, color: "#F59E0B" },      // Amber
  { label: "Career Growth", value: "Career Growth", icon: AutoGraph, color: "#3B82F6" },  // Blue
  { label: "Field Change", value: "Field Change", icon: Landscape, color: "#6366F1" },    // Indigo
];

export const WORKING_FIELDS = [
  { label: "IT / Software", value: "IT / Software", icon: Terminal, color: "#3B82F6" },       // Blue
  { label: "Finance", value: "Finance", icon: AccountBalance, color: "#10B981" },             // Emerald
  { label: "Marketing", value: "Marketing", icon: Campaign, color: "#EC4899" },               // Pink
  { label: "HR", value: "HR", icon: Diversity3, color: "#8B5CF6" },                           // Violet
  { label: "Healthcare", value: "Healthcare", icon: LocalHospital, color: "#EF4444" },        // Red
  { label: "Engineering", value: "Engineering", icon: Engineering, color: "#F97316" },        // Orange
  { label: "Education", value: "Education", icon: School, color: "#EAB308" },                 // Yellow
  { label: "Other", value: "Other", icon: Lightbulb, color: "#64748B" },                      // Slate
];

export const SALARY_RANGES = [
  { label: "Below ₹25,000", value: "Below ₹25,000", icon: Payments, color: "#94A3B8" },       // Slate 400
  { label: "₹25,000 – ₹50,000", value: "₹25,000 – ₹50,000", icon: Payments, color: "#2DD4BF" }, // Teal
  { label: "₹50,000 – ₹1 Lakh", value: "₹50,000 – ₹1 Lakh", icon: Payments, color: "#3B82F6" }, // Blue
  { label: "Above ₹1 Lakh", value: "Above ₹1 Lakh", icon: Savings, color: "#F59E0B" },          // Amber
];

export const STUDY_ABROAD_BUDGETS = [
  { label: "Above ₹25 Lakh", value: "Above ₹25 Lakh", icon: Savings, color: "#F59E0B" },        // Amber
  { label: "₹20 – 25 Lakh", value: "₹20 – 25 Lakh", icon: CurrencyRupee, color: "#10B981" },    // Emerald
  { label: "₹15 – 20 Lakh", value: "₹15 – 20 Lakh", icon: CurrencyRupee, color: "#3B82F6" },    // Blue
  { label: "₹12 – 15 Lakh", value: "₹12 – 15 Lakh", icon: CurrencyRupee, color: "#8B5CF6" },    // Violet
];

export const COURSE_LEVELS = [
  { label: "Undergraduate (UG)", value: "UG", icon: School, color: "#3B82F6" },    // Blue
  { label: "Postgraduate (PG)", value: "PG", icon: Business, color: "#8B5CF6" },   // Violet
];

export const STUDY_ABROAD_ANNUAL_BUDGETS = [
  { label: "₹12 – 15 Lakh / year", value: "12-15", icon: CurrencyRupee, color: "#8B5CF6" }, // Violet
  { label: "₹15 – 20 Lakh / year", value: "15-20", icon: CurrencyRupee, color: "#3B82F6" }, // Blue
  { label: "₹20 – 25 Lakh / year", value: "20-25", icon: CurrencyRupee, color: "#10B981" }, // Emerald
  { label: "Above ₹25 Lakh / year", value: "25+", icon: Savings, color: "#F59E0B" },        // Amber
];

export const STUDY_ABROAD_COUNTRIES = [
  { name: "United Kingdom", code: "gb", icon: Place, color: "#EF4444" },   // Red (Union Jackish)
  { name: "Ireland", code: "ie", icon: Place, color: "#10B981" },         // Green
  { name: "United States", code: "us", icon: Place, color: "#3B82F6" },    // Blue
  { name: "Canada", code: "ca", icon: Place, color: "#EF4444" },           // Red
  { name: "Australia", code: "au", icon: Place, color: "#EAB308" },       // Gold/Yellow
  { name: "New Zealand", code: "nz", icon: Place, color: "#1E293B" },      // Dark (All Blacks)
  { name: "Germany", code: "de", icon: Place, color: "#F59E0B" },         // Gold
  { name: "France", code: "fr", icon: Place, color: "#3B82F6" },         // Blue
  { name: "Switzerland", code: "ch", icon: Place, color: "#EF4444" },      // Red
  { name: "United Arab Emirates", code: "ae", icon: Place, color: "#10B981" }, // Green
  { name: "Netherlands", code: "nl", icon: Place, color: "#F97316" },      // Orange
  { name: "Spain", code: "es", icon: Place, color: "#EF4444" },           // Red
  { name: "Poland", code: "pl", icon: Place, color: "#EF4444" },          // Red
  { name: "Grenada", code: "gd", icon: Place, color: "#EAB308" },         // Yellow
  { name: "Cyprus", code: "cy", icon: Place, color: "#F59E0B" },          // Orange
];


/* COMMON OPTIONS */

export const QUALIFICATIONS = [
  { label: "12th", value: "12th", icon: HistoryEdu, color: "#F97316" },        // Orange
  { label: "Graduate", value: "UG", icon: School, color: "#3B82F6" },          // Blue
  { label: "Post Graduate", value: "PG", icon: Business, color: "#8B5CF6" },   // Violet
];

export const ACADEMIC_PERFORMANCE = [
  { label: "Below 60%", value: "Below 60%", icon: TrendingDown, color: "#EF4444" },    // Red
  { label: "60% – 75%", value: "60% – 75%", icon: Grade, color: "#F59E0B" },           // Amber
  { label: "75% & Above", value: "75% & Above", icon: WorkspacePremium, color: "#10B981" }, // Emerald
];

export const EXPERIENCE = [
  { label: "Fresher (0–2 years)", value: "Fresher (0–2 years)", icon: School, color: "#3B82F6" },    // Blue
  { label: "2–4 years", value: "2–4 years", icon: Work, color: "#10B981" },                          // Emerald
  { label: "4–7 years", value: "4–7 years", icon: Timeline, color: "#F59E0B" },                      // Amber
  { label: "7+ years", value: "7+ years", icon: VerifiedUser, color: "#8B5CF6" },                   // Violet
];

export const INTERESTS = [
  { label: "Marketing", value: "Marketing", icon: Campaign, color: "#EC4899" },                 // Pink
  { label: "Sales", value: "Sales", icon: Handshake, color: "#F59E0B" },                        // Amber
  { label: "Finance", value: "Finance", icon: AccountBalance, color: "#10B981" },               // Emerald
  { label: "HR", value: "HR", icon: Diversity3, color: "#8B5CF6" },                             // Violet
  { label: "Operations", value: "Operations", icon: SupportAgent, color: "#64748B" },           // Slate
  { label: "Supply Chain", value: "Supply Chain", icon: Factory, color: "#F97316" },            // Orange
  { label: "Business Analytics", value: "Business Analytics", icon: Analytics, color: "#3B82F6" }, // Blue
  { label: "Data Science", value: "Data Science", icon: Biotech, color: "#06B6D4" },            // Cyan
  { label: "IT", value: "IT", icon: Terminal, color: "#6366F1" },                               // Indigo
  { label: "Digital Marketing", value: "Digital Marketing", icon: Computer, color: "#A855F7" },  // Purple
  { label: "Healthcare", value: "Healthcare", icon: LocalHospital, color: "#EF4444" },          // Red
  { label: "Travel & Tourism", value: "Travel & Tourism", icon: TravelExplore, color: "#14B8A6" }, // Teal
  { label: "International Business", value: "International Business", icon: Public, color: "#0EA5E9" }, // Sky
  { label: "Others / Not Sure", value: "Others / Not Sure", icon: Lightbulb, color: "#94A3B8" }, // Slate
];

export const BUDGETS = [
  { label: "Under ₹1 Lakh", value: "Under ₹1 Lakh", icon: Payments, color: "#94A3B8" },       // Slate
  { label: "₹1 – 1.5 Lakh", value: "₹1 – 1.5 Lakh", icon: Payments, color: "#2DD4BF" },       // Teal
  { label: "₹1.5 – 2 Lakh", value: "₹1.5 – 2 Lakh", icon: Payments, color: "#3B82F6" },       // Blue
  { label: "Above ₹2 Lakh", value: "Above ₹2 Lakh", icon: Savings, color: "#F59E0B" },        // Amber
];

export const COUNTRIES = [
  { label: "USA", value: "USA", icon: Place, color: "#3B82F6" },        // Blue
  { label: "UK", value: "UK", icon: Place, color: "#EF4444" },          // Red
  { label: "Canada", value: "Canada", icon: Place, color: "#EF4444" },  // Red
  { label: "Australia", value: "Australia", icon: Place, color: "#EAB308" }, // Gold
  { label: "Germany", value: "Germany", icon: Place, color: "#F59E0B" }, // Gold
  { label: "Ireland", value: "Ireland", icon: Place, color: "#10B981" }, // Green
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