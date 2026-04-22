export type BrandId = "hadeed" | "dhabeji" | "fcps";

export type Brand = {
  id: BrandId;
  name: string;
  shortName: string;
  category: string;
  href: string;
  tagline: string;
  description: string;
  accentLabel: string;
  accentClassName: string;
  panelClassName: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  benefit: string;
};

export type Profile = {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  specialties: string[];
  availability: string;
  summary: string;
  brands: BrandId[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
  brand: BrandId;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Clinic = {
  slug: Exclude<BrandId, "fcps">;
  name: string;
  headline: string;
  tagline: string;
  intro: string;
  address: string;
  mapQuery: string;
  phones: string[];
  timings: { label: string; value: string }[];
  gallery: { title: string; caption: string }[];
};

export const brands: Brand[] = [
  {
    id: "hadeed",
    name: "The Dental Zone – Hadeed",
    shortName: "Dental Zone",
    category: "Flagship Clinic",
    href: "/clinics/hadeed",
    tagline: "Premium family dentistry in Gulshan-e-Hadeed.",
    description:
      "A polished, trust-led dental experience for consultations, cosmetic care, restorative treatment, and complex surgical planning.",
    accentLabel: "Clinical Luxury",
    accentClassName: "text-teal-700 ring-teal-500/20 bg-teal-500/10",
    panelClassName:
      "from-[#0a2540] via-[#0d5e6e] to-[#123d5c] text-white border-white/15",
  },
  {
    id: "dhabeji",
    name: "Dental Clinic – Dhabeji",
    shortName: "Dhabeji Clinic",
    category: "Community Clinic",
    href: "/clinics/dhabeji",
    tagline: "Accessible modern dentistry for the Dhabeji corridor.",
    description:
      "A calm, efficient branch built for working families and professionals seeking dependable routine care, restorative support, and treatment continuity.",
    accentLabel: "Community Precision",
    accentClassName: "text-cyan-700 ring-cyan-500/20 bg-cyan-500/10",
    panelClassName:
      "from-[#0d3556] via-[#126f7d] to-[#194b6d] text-white border-white/15",
  },
  {
    id: "fcps",
    name: "FCPS Training",
    shortName: "FCPS Training",
    category: "Education Division",
    href: "/fcps-training",
    tagline: "Structured clinical mentorship for ambitious postgraduates.",
    description:
      "Focused training pathways, case-based mentorship, and exam-oriented guidance for dentists pursuing FCPS growth with confidence.",
    accentLabel: "Mentorship Track",
    accentClassName: "text-amber-700 ring-amber-500/20 bg-amber-500/10",
    panelClassName:
      "from-[#101f35] via-[#5f4c1a] to-[#17304d] text-white border-white/15",
  },
];

export const services: Service[] = [
  {
    id: "detail-checkup",
    title: "Detail Checkup & Xray",
    description: "Comprehensive diagnostics with clinical evaluation and imaging support.",
    benefit: "Ideal for first visits, treatment planning, and second opinions.",
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Polishing",
    description: "Professional cleaning to remove buildup and refresh gum health.",
    benefit: "Supports fresher breath, cleaner teeth, and preventive maintenance.",
  },
  {
    id: "surgical-extraction",
    title: "Surgical Extraction",
    description: "Comfort-focused surgical removal for impacted or complex cases.",
    benefit: "Delivered with careful planning and post-procedure guidance.",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional brightening for a cleaner, more radiant smile.",
    benefit: "Aesthetic enhancement suitable for events, confidence, and smile makeovers.",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Tooth-saving endodontic care to relieve pain and preserve structure.",
    benefit: "Helps avoid unnecessary extraction while restoring function.",
  },
  {
    id: "fillings",
    title: "Fillings",
    description: "Restorative care for cavities, fractures, and worn tooth surfaces.",
    benefit: "Designed to protect healthy tooth structure with durable repair.",
  },
  {
    id: "crown-bridges",
    title: "Crown & Bridges",
    description: "Fixed restorations to rebuild bite strength and smile confidence.",
    benefit: "Supports function, aesthetics, and long-term restorative planning.",
  },
  {
    id: "extractions",
    title: "Extractions",
    description: "Safe removal for teeth that can no longer be predictably restored.",
    benefit: "Followed by guidance for healing, replacement, and next-step care.",
  },
];

export const profiles: Profile[] = [
  {
    id: "khubaib-ahmed-shaikh",
    name: "Dr. Khubaib Ahmed Shaikh",
    role: "Lead Consultant, Oral & Maxillofacial Focus",
    qualifications: ["BDS-RDS", "FCPS Oral and Maxillofacial Surgery"],
    specialties: ["Complex extractions", "Surgical planning", "Clinical mentorship"],
    availability: "Daily except Wednesday & Saturday • 7pm to 10pm",
    summary: "FCPS Dow Hospital Karachi. Experienced and highly skilled in advanced dental and surgical decision-making.",
    brands: ["hadeed", "fcps"],
  },
  {
    id: "wajeeha-fayyaz",
    name: "Dr. Wajeeha Fayyaz",
    role: "Dental Surgeon",
    qualifications: ["BDS-RDS"],
    specialties: ["General dentistry", "Preventive care", "Patient education"],
    availability: "Monday to Wednesday • 4pm to 7pm",
    summary: "Ex-House Surgeon Dar ul Sehat Hospital with a calm, patient-friendly clinical style.",
    brands: ["hadeed", "dhabeji"],
  },
  {
    id: "sidra-nisar",
    name: "Dr. Sidra Nisar",
    role: "Restorative Care Dentist",
    qualifications: ["BDS-RDS"],
    specialties: ["Fillings", "Smile maintenance", "Routine consultations"],
    availability: "Monday to Wednesday • 4pm to 7pm",
    summary: "Ex House Surgeon Dar ul Sehat Hospital Karachi with a refined, comfort-first restorative approach.",
    brands: ["hadeed"],
  },
  {
    id: "rana-hira-liaquat",
    name: "Dr. Rana Hira Liaquat",
    role: "Family Dentistry Consultant",
    qualifications: ["BDS-RDS"],
    specialties: ["Family appointments", "Routine treatment", "Comprehensive planning"],
    availability: "Thursday to Saturday • 11am to 3pm | Sunday • 3pm to 7pm",
    summary: "Ex House Surgeon Dar ul Sehat Hospital Karachi, trusted for continuity care and balanced treatment planning.",
    brands: ["hadeed", "dhabeji"],
  },
  {
    id: "sumaiya-anwer",
    name: "Dr. Sumaiya Anwer",
    role: "Dental Surgeon",
    qualifications: ["BDS-RDS"],
    specialties: ["Scaling", "Aesthetic care", "Preventive dentistry"],
    availability: "Thursday to Saturday • 4pm to 7pm",
    summary: "Ex-House Surgeon Bahria Hospital with a precise, polished approach to modern dental care.",
    brands: ["dhabeji"],
  },
  {
    id: "noor-ul-ain",
    name: "Dr. Noor ul Ain",
    role: "Endodontic & Prostho-Focused Dentist",
    qualifications: ["BDS-RDS", "C-ENDO", "C-Prostho"],
    specialties: ["Root canal treatment", "Prosthodontic planning", "Restorative workflows"],
    availability: "Wednesday & Saturday • 7pm to 10pm",
    summary: "Ex-House Surgeon KMDC with focused restorative and endodontic insight for long-term treatment outcomes.",
    brands: ["hadeed", "dhabeji"],
  },
  {
    id: "mentor-clinical-board",
    name: "Clinical Mentorship Board",
    role: "FCPS Faculty Support",
    qualifications: ["Case-based supervision", "Exam-oriented mentoring"],
    specialties: ["Mock discussions", "Clinical reasoning", "Portfolio guidance"],
    availability: "Structured weekly sessions",
    summary: "A guided mentorship ecosystem that helps FCPS trainees prepare with stronger confidence, structure, and accountability.",
    brands: ["fcps"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "The Dental Zone feels premium but still warm. Everything from diagnosis to follow-up felt clear and trustworthy.",
    author: "Patient, Gulshan-e-Hadeed",
    context: "Consultation and restorative care",
    brand: "hadeed",
  },
  {
    id: "t2",
    quote: "Dhabeji branch is organized, practical, and very easy to recommend for family dental visits.",
    author: "Parent, Dhabeji",
    context: "Preventive and family dentistry",
    brand: "dhabeji",
  },
  {
    id: "t3",
    quote: "The FCPS guidance is structured and genuinely useful. It feels like a serious training environment, not random sessions.",
    author: "FCPS Candidate",
    context: "Mentorship and case discussion",
    brand: "fcps",
  },
  {
    id: "t4",
    quote: "Appointments were handled smoothly and the doctor explained every step in a very reassuring way.",
    author: "Patient, Karachi",
    context: "General treatment journey",
    brand: "hadeed",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Who is FCPS Training designed for?",
    answer: "It is designed for dentists who want structured clinical growth, mentorship, exam-oriented support, and a more disciplined learning pathway.",
  },
  {
    question: "Does the training include case-based learning?",
    answer: "Yes. The program emphasizes case review, clinical reasoning, discussion frameworks, and practical mentorship rather than passive lectures only.",
  },
  {
    question: "Can working professionals enroll?",
    answer: "Yes. The UI is designed around flexible scheduling, making it suitable for candidates balancing clinical work and study commitments.",
  },
  {
    question: "How do I choose between branches for appointments?",
    answer: "Use the contact page form to select your preferred branch and inquiry type. The team can then guide you to the most suitable doctor and timing window.",
  },
];

export const clinics: Clinic[] = [
  {
    slug: "hadeed",
    name: "The Dental Zone – Hadeed",
    headline: "Premium dentistry anchored in trust, clarity, and comfort.",
    tagline: "Flagship branch serving Gulshan-e-Hadeed with specialist-led care.",
    intro:
      "Located within Iftikhar Memorial Hospital, this branch is positioned as the ecosystem's flagship clinical experience, blending refined consultation, restorative treatment, and surgical planning in a reassuring environment.",
    address: "Iftikhar Memorial Hospital, Gulshan-e-Hadeed Phase 2, Karachi",
    mapQuery: "Iftikhar Memorial Hospital Gulshan-e-Hadeed Phase 2 Karachi",
    phones: ["+92-336-2130181", "+92-329-2377122"],
    timings: [
      { label: "Evening Specialists", value: "Selected consultants available 7pm to 10pm" },
      { label: "Day Sessions", value: "Thursday to Sunday coverage available by doctor" },
    ],
    gallery: [
      { title: "Consult Room", caption: "Quiet consultation setup for diagnosis and treatment planning." },
      { title: "Treatment Bay", caption: "Modern clinical workflow designed for calm, efficient procedures." },
      { title: "Patient Journey", caption: "Clear communication, comfort, and premium branch presentation." },
    ],
  },
  {
    slug: "dhabeji",
    name: "Dental Clinic – Dhabeji",
    headline: "Dependable branch care with a refined, accessible experience.",
    tagline: "Modern family dentistry for Dhabeji and surrounding communities.",
    intro:
      "This branch is designed for continuity, convenience, and clean patient experience, making everyday dental care feel organized, approachable, and professionally led.",
    address: "Dental Clinic – Dhabeji, Karachi",
    mapQuery: "Dhabeji Karachi dental clinic",
    phones: ["+92-336-2130181", "+92-329-2377122"],
    timings: [
      { label: "Flexible Appointments", value: "Afternoon and evening windows available by consultant" },
      { label: "Family-Friendly Visits", value: "Routine, restorative, and follow-up care across the week" },
    ],
    gallery: [
      { title: "Front Desk Flow", caption: "Simple branch intake and appointment coordination." },
      { title: "Clinical Setup", caption: "Clean and efficient environment for everyday dentistry." },
      { title: "Community Care", caption: "Focused on practical dental outcomes for families and professionals." },
    ],
  },
];

export const trainingModules = [
  "Clinical reasoning and treatment planning",
  "Case presentation structure and discussion flow",
  "Mentor-led exam preparation support",
  "Restorative and surgical case review",
  "Confidence building for viva-style scenarios",
  "Professional growth with accountable study rhythm",
];

export const trustStats = [
  { label: "Connected brands", value: "03" },
  { label: "Core dental services", value: "08" },
  { label: "Doctors & mentors", value: "07" },
  { label: "Appointment pathways", value: "02 Clinics + Training" },
];

export const clinicSlugs = clinics.map((clinic) => clinic.slug);

export const contactChannels = [
  { label: "+92-336-2130181", href: "tel:+923362130181" },
  { label: "+92-329-2377122", href: "tel:+923292377122" },
];
