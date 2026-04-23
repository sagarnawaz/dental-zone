import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ClinicHeroSlider, {
  type ClinicHeroHighlight,
  type ClinicHeroMetric,
  type ClinicHeroSlide,
} from "@/components/sections/ClinicHeroSlider";
import DoctorSwiper from "@/components/sections/DoctorSwiper";
import { clinicSlugs } from "@/data/site";

type ClinicPageProps = {
  params: Promise<{ slug: string }>;
};

type ClinicSlug = "dhabeji" | "hadeed";

type IconProps = {
  className?: string;
};

type IconComponent = React.ComponentType<IconProps>;

type InfoCardItem = {
  title: string;
  lines: string[];
  icon: IconComponent;
  featured?: boolean;
};

type ContactItem = {
  label: string;
  value: string;
  icon: IconComponent;
};

type DhabejiDoctor = {
  name: string;
  role: string;
  image: string;
  accentClassName: string;
};

type ServiceMedia = {
  image: string;
  alt: string;
  objectPosition?: string;
};

type HadeedServiceCard = {
  id: string;
  title: string;
  description: string;
  benefit: string;
} & ServiceMedia;

type DoctorProfile = {
  id: string;
  name: string;
  qualification: string;
  about: string;
  timing: string;
  image: string;
};

const supportedClinicSlugs = clinicSlugs.filter(
  (slug): slug is ClinicSlug => slug === "dhabeji" || slug === "hadeed",
);

const fieldBaseClassName =
  "border border-white/80 bg-white text-sm text-[#003857] outline-none transition focus:border-[#1b4f72]/30 focus:ring-4 focus:ring-[#1b4f72]/10";
const inputClassName = `${fieldBaseClassName} rounded-full px-5 py-3`;
const textareaClassName = `${fieldBaseClassName} min-h-32 w-full rounded-[1.4rem] px-5 py-4`;

const dhabejiPage = {
  name: "Dental Clinic - Dhabeji",
  description:
    "Where clinical excellence meets the tranquility of curated care, with advanced imaging, laser dentistry, and a family-first branch experience.",
  intro:
    "Where clinical excellence meets the tranquility of curated care. Our Dhabeji facility is equipped with state-of-the-art panoramic imaging and laser dental technology.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDfQ75RJDibWy7WpZlM1EYrJ-igfCj-Eq36ZzEOjibrt5JyhJWF5VQ1t0jrS9uL-xJzPXIamOuhtyDR9cqv_mpiA0ZZ1nXU684nKlE1sY8iUHT3oDIyYq3hqKme79BKZNuvVTrJohjhhmXEyY020w03Rngsa5mC-o76ex0Z0GikcPGunkAAl21s3ibrtiZ5pi6q8-7KRHs-L-_KzkZoNTwpNbEB8eNS7dpfkTjnJWKVL7Faz28hS004vGy7zBvQ8YQf9PkAHc2GEv8",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBLHiRDABfWiYPHwbR6nHM0U9zsBAlb6FAFlZf4DkuIwVeIVHWPVvOicMXYDqnWL0z8FBASOktnvbhV2gJnCMVRt2pndy6FErnLlXGqA0-pGtiJP5Qp_PZ_qDpDiDPpjzCOL9yT574ejoCk4z6VgRE52BGdYvLrKSQUXaG3VcMLkSGt0dyOUMYYzf6VFcwAM7nQkqa1RtaKVV7XTznZvx-5Tojdk-dFA2soX5RfsFCW_gJVB7iuEwLX8uhrLZLlH3w5CgpUmwwK4Y",
  infoCards: [
    {
      title: "Location",
      lines: ["Plot 42, Main Industrial Zone, Dhabeji,", "Karachi South"],
      icon: LocationIcon,
    },
    {
      title: "Contact",
      lines: ["+92 (21) 3456-7890", "dhabeji@thedentalzone.hc"],
      icon: PhoneIcon,
      featured: true,
    },
    {
      title: "Timings",
      lines: ["Mon - Sat: 09:00 AM - 08:00 PM", "Sun: Closed"],
      icon: ClockIcon,
    },
  ] satisfies InfoCardItem[],
  doctors: [
    {
      name: "Dr. Sarah Ahmed",
      role: "Senior Orthodontist",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAXatnAsiDugPE9T8r3NjNsM4GnJgZq6y3XQOYTzmM5u-6pQ3vKIMCu0xpcaCUHVS2T7FTW4JXeTcJctdPpHrBB2ljSx7gVcDPagA5nI2OdGI6S8Fucw8vnu2If-wo_9PfVGveMaixcO6Ppq89t0cSINzTmCAs2dajdWAEk2FFIaNPrDqxe4reC0rN7cNi4iz-xEd8T_pOJVNL-pSafAahCG6jtMY6m6QqOv1IOJCHet74jQdenevLjiLu5qYwtzqGtuXMiqRphAa0",
      accentClassName: "bg-[#0a7f79]",
    },
    {
      name: "Dr. Zaid Khan",
      role: "Oral & Maxillofacial Surgeon",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8-dcYUXHBU-dNPSDxXxkIvsKcIR7ZGlxyQyIOg3sssUs9ZxbU7LOLU4w3JmdM7I5qqbR9LCzPUVlEywzrVUpR9kNjNiYJMMx4EKPBQHB391kpLgq6AZu80Dbg1olDH0rF8ZbQylpMG6-47cLN2onlNUL02cLtmglhQt4MQOwG2Td2TJJrAtIMoq7PrIvjPL8zfh5FuDbRxPd720irRIZ0U7rpYiRe0IO1WL12UyakzwPdlOwsYg071OFlQlpV1AmVMgQaI2fNFo",
      accentClassName: "bg-[#1b4f72]",
    },
  ] satisfies DhabejiDoctor[],
  services: [
    {
      title: "Endodontics",
      description:
        "Painless root canal treatments using microscopic precision and high-grade biocompatible materials.",
      icon: PulseIcon,
    },
    {
      title: "Crowns & Veneers",
      description:
        "Custom-fabricated porcelain solutions that restore function and aesthetic brilliance to your smile.",
      icon: DiamondIcon,
    },
    {
      title: "Orthodontics",
      description:
        "Modern alignment therapy including clear aligners and ceramic bracing for children and adults.",
      icon: AlignmentIcon,
    },
  ] satisfies Array<{ title: string; description: string; icon: IconComponent }>,
  contactItems: [
    {
      label: "Email inquiry",
      value: "appointments@thedentalzone.com",
      icon: MailIcon,
    },
    {
      label: "Emergency line",
      value: "+92 213 9988 77",
      icon: SupportIcon,
    },
  ] satisfies ContactItem[],
};

const hadeedPage = {
  name: "The Dental Zone - Hadeed",
  description:
    "Flagship branch care that blends specialist-led treatment, restorative planning, and a polished patient experience in Gulshan-e-Hadeed.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAcVKgR4jxMWjA3NNQts_jgKcjEl7mIv5xWts5mREBKg0D6t5tAqG2Tt5F_4XOIxY2nUe_msIHBeoeWznl1FnhljYi4Gp-YhcQ7W_m5BPfKZp31hMxDmNFihsMsFHLiKW1VoTR9ABngSPwJsf9Kauc0S7wILIVjlpRIbU6FOE7Q6CzqFjv2808FcNPWSvE2IupnnLqbNUozqsRVuxfwd6JkxMPg6fU1sIfU58dG34jzJSPcF_P1SL0h3tMPGFFMk5yIkSNTQDx_2XE",
  roomImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCuMxs5sRQ_ezsc6tjGWfzGvSofiqwjB4aRS4kkP08W7hynm-syo7YemW0Z9lV8hfIbd8EDXtBq7tATV1Gb01snNtaDxudL9jfrw0gJ5DUynzEBmg0cxdIsNF8h0izCHPbpizBwmLRK3Ym6koNC2um-uhCvpD_exyBM0FZ0wtPO4Z0Rzxd8V5_whOp4iQ6iADwVyT0tJPW-_X1H9UoE3hOP8L1gcUzgKqX74rOZ0FLPx3JQcnWvQafZ5J-T0-8hIMNUIECvPnQi5Y",
};

const doctorPortraits = {
  khubaibAhmedShaikh:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLTm5DBMo6Y65bo1S9kVu_l-9NGkiv_dZ9oJi5lN_dmTj-CSb5q4EgRemlENx3UajQXY1myzEZ2C2CNxKOZkDqezcN6HvZF2OzWyG2GWo408Z5bnNE3YiXDQhpCZA7WBHaMp3sO6V_d64b2S47RDmjzTATJ-lpAVYclF5QsfKPeQVsMzbX8JqU3N8o4uj_0_IaEQD8yEGmEx1L_VdFFeUt3hTM2sxkVF90R4npumex3zAOR97tsNOlU8kj9ewJiCbCOqhQHiWjb8M",
  wajeehaFayyaz:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvWt7-xDPfcoWEccsfi9msmqlUjoRp9FeCrXgzEQIyadzdyL0_vIP_gFr35KXig4FyQRnm0aZyKLWg-QmSccI_wB-BqDSwvz3AyC7Qh9BEzkpBMJ5s8k9INvEZs3z7lnpJpMNlNjBPqojuYF26crxehl1KSPdbNwQnYAoYyQWQZy8w8EdSQKxDGlwRI7S6tPDlXz69qQ_Q-uU2N7JyVXCMoxVxyBIZaPsKoB6YEYyVnAf6QG5dFSqLLqwlcw75fOfcgCV3XFtpVQ",
  sidraNisar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5M3Tesd_bwkUGp9F9TksgMBky0gWAyVD2ZBGJOFt-bzo1wvupexqCWFeL8wEJ6XKudKLoweb8k3BGtVTu4fO-j5PXcFSky16Sc2s9M40uOUgWgGf3eUf6MTEAAN-vGKS8RQAE2jyUfUnWKOVpEJiP_K0uCBBXg7N2lTheilwyzU1L2L6Zs_osL-A79lpxnvLjggjsesJhoZEkhcYeTO8XaPhb6-cxrDzw1cIqZZk2Sz7ecB0TPkqjQ9VxVonVY72KJSOVL5Ubei8",
  ranaHiraLiaquat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCdf3IBNhAjcJYfWfXV5uh6SCf_WDd0wsjJM7J5x-FbMnCzRZYS3yXYv6vZZac_LOMCRPnW-igcF-sE2YHJ25yrWNEBtibu2DMI-M_YDqgYQeTuDuWhabKUaywojQUoH5QzYX616wL8J-irKRWpKc3WYN_WB1ktVCegTDSBeFDQKvyd4bAN1nY5OJtiz_nAOj6gJYLfmtUOBD0tzymdcOyNrEfsg8o-M0Qo0QPauzsNUxN-pZbj2Mq6vvhHTbG6GAkpXKCxSoNRcA0",
} as const;

const hadeedDoctors: DoctorProfile[] = [
  {
    id: "khubaib-ahmed-shaikh",
    name: "Dr. Khubaib Ahmed Shaikh",
    qualification: "BDS-RDS, FCPS Oral and Maxillofacial Surgery",
    about: "FCPS Dow Hospital Karachi. Experienced and highly skilled.",
    timing: "Daily except Wednesday and Saturday, 7:00 PM to 10:00 PM",
    image: doctorPortraits.khubaibAhmedShaikh,
  },
  {
    id: "wajeeha-fayyaz",
    name: "Dr. Wajeeha Fayyaz",
    qualification: "BDS-RDS",
    about: "Ex-House Surgeon Dar Ul Sehat Hospital. Experienced and highly skilled.",
    timing: "Monday, Tuesday, Wednesday - 4:00 PM to 7:00 PM",
    image: doctorPortraits.wajeehaFayyaz,
  },
  {
    id: "sidra-nisar",
    name: "Dr. Sidra Nisar",
    qualification: "BDS-RDS",
    about: "Ex-House Surgeon Dar ul Sehat Hospital Karachi. Experienced and highly skilled.",
    timing: "Monday to Wednesday - 4:00 PM to 7:00 PM",
    image: doctorPortraits.sidraNisar,
  },
  {
    id: "rana-hira-liaquat",
    name: "Dr. Rana Hira Liaquat",
    qualification: "BDS-RDS",
    about: "Ex-House Surgeon Dar ul Sehat Hospital Karachi. Experienced and highly skilled.",
    timing: "Thursday to Saturday - 11:00 AM to 3:00 PM; Sunday - 3:00 PM to 7:00 PM",
    image: doctorPortraits.ranaHiraLiaquat,
  },
  {
    id: "sumaiya-anwer",
    name: "Dr. Sumaiya Anwer",
    qualification: "BDS-RDS",
    about: "Ex-House Surgeon Bahria Hospital. Experienced and highly skilled.",
    timing: "Thursday to Saturday - 4:00 PM to 7:00 PM",
    image: doctorPortraits.wajeehaFayyaz,
  },
  {
    id: "noor-ul-ain",
    name: "Dr. Noor ul Ain",
    qualification: "BDS-RDS, C-ENDO, C-Prostho",
    about: "Ex-House Surgeon KMDC. Experienced and highly skilled.",
    timing: "Wednesday & Saturday - 7:00 PM to 10:00 PM",
    image: doctorPortraits.sidraNisar,
  },
];

const hadeedServiceMedia = {
  detailCheckup: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAATxB-9AyrY74elLxjqyAKjHIog7SHyJcm8NDGialA5T8ko0ItpTUQzuefltEkYs4kZ38QS-zRnDIk8e7Aj-pMSVRBmUoBkWcq53mNRUZJvl_VihPNPVIASQA7fmZ6TFOaNdn-JBvePWeQgc8AhLl2l1uS_dQvbWARcm3viax9xnYs1tsnfOtc6qr2pkYsWki6_hyFLLrMfIAPlSoN4knOUEMBqBLNvjsoczVtUvLq3De9wtBNtzCZlBbjkFrf2xGjpJfL7wXQQWY",
    alt: "Dental consultation and diagnostics setup for detailed checkups and x-ray planning",
  },
  scalingPolishing: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3sQJX05rx9R76bg9s9JrgUBs69R0ai0ppwqG3-JXRhijPe56OOhpu6Ti-Ogckc8fn60GLIga8Q7efFcVRNVO7NjThiPY4Oyo9rCC8Yk31JHHJLWSyQI4I2QbovgQMMO3POjEBQICR5FZ-_o6es222RFXb8-b8xk9mIlBj-8pQMncwp91ZWdNC9I-fh1BpHhO23pHTkeXyI-1Vx9u1KhapQ2zDHQy9enN4kyE9AsEdkbRIp1KNixcgC2ebRwtDX4WDoU5lJ_iNfjA",
    alt: "Modern dental treatment room prepared for cleaning, scaling, and polishing care",
  },
  surgicalExtraction: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLTm5DBMo6Y65bo1S9kVu_l-9NGkiv_dZ9oJi5lN_dmTj-CSb5q4EgRemlENx3UajQXY1myzEZ2C2CNxKOZkDqezcN6HvZF2OzWyG2GWo408Z5bnNE3YiXDQhpCZA7WBHaMp3sO6V_d64b2S47RDmjzTATJ-lpAVYclF5QsfKPeQVsMzbX8JqU3N8o4uj_0_IaEQD8yEGmEx1L_VdFFeUt3hTM2sxkVF90R4npumex3zAOR97tsNOlU8kj9ewJiCbCOqhQHiWjb8M",
    alt: "Specialist oral surgery consultant for complex surgical extraction planning",
    objectPosition: "center top",
  },
  teethWhitening: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvWt7-xDPfcoWEccsfi9msmqlUjoRp9FeCrXgzEQIyadzdyL0_vIP_gFr35KXig4FyQRnm0aZyKLWg-QmSccI_wB-BqDSwvz3AyC7Qh9BEzkpBMJ5s8k9INvEZs3z7lnpJpMNlNjBPqojuYF26crxehl1KSPdbNwQnYAoYyQWQZy8w8EdSQKxDGlwRI7S6tPDlXz69qQ_Q-uU2N7JyVXCMoxVxyBIZaPsKoB6YEYyVnAf6QG5dFSqLLqwlcw75fOfcgCV3XFtpVQ",
    alt: "Aesthetic dental care consultation supporting brighter smile and whitening treatments",
    objectPosition: "center top",
  },
  rootCanal: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfQ75RJDibWy7WpZlM1EYrJ-igfCj-Eq36ZzEOjibrt5JyhJWF5VQ1t0jrS9uL-xJzPXIamOuhtyDR9cqv_mpiA0ZZ1nXU684nKlE1sY8iUHT3oDIyYq3hqKme79BKZNuvVTrJohjhhmXEyY020w03Rngsa5mC-o76ex0Z0GikcPGunkAAl21s3ibrtiZ5pi6q8-7KRHs-L-_KzkZoNTwpNbEB8eNS7dpfkTjnJWKVL7Faz28hS004vGy7zBvQ8YQf9PkAHc2GEv8",
    alt: "Clinical dental environment prepared for precise root canal treatment",
  },
  fillings: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqYtO-opvXBGDX_5999fNOvejltbwpAoF0XjDKL3WoEm-Awd5fTWp2W-Ds4lZ8wuClWhI944rhYprd_aVVZAaZsTeST1drczTX_LbdNfkU4QSjDoNQ5t4XEcpa5QV5Jjs19mR1oAXcrLVxO5fE5yiVwp1ARHGd_406V-CbZzKXZBaTuYJn3UFjhb31nYMnDYT-NJ_Ju6OfmB8Z3kyI2loqNsjL3EQg-lIUFD01v2-mz5Ef_McdrPtbunXAMvRw3vYsmg_buzjpfJs",
    alt: "Dental treatment bay supporting restorative procedures such as fillings",
  },
  crownBridges: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy2XMUFqLDX5N5OT5bie6DYeGkK3B8jNm0dOdLbq-fBmvrwdE0Gv652v1BOmikzLxosVilEJwqAvsz39WhYM4pEWR6dD4SWdv2RGSqGFOPHNHoOLqmS7vh5OSeOYsiLFVrMMSlTkoEjL0iVnRnW8I6FdBxwCBI5X9EfNYOvxDLK3qlYc0vAcsV9xdvPV_BwJnoDuWAg4bmpuRSXa2E47vYTG9BJNYbA8OAuc31rp2ZFSR1JEogzYIXRKdNMOIWz_CTgKn_QxN4QNA",
    alt: "Premium restorative dentistry setting for crowns and bridges treatment planning",
  },
  extractions: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8-dcYUXHBU-dNPSDxXxkIvsKcIR7ZGlxyQyIOg3sssUs9ZxbU7LOLU4w3JmdM7I5qqbR9LCzPUVlEywzrVUpR9kNjNiYJMMx4EKPBQHB391kpLgq6AZu80Dbg1olDH0rF8ZbQylpMG6-47cLN2onlNUL02cLtmglhQt4MQOwG2Td2TJJrAtIMoq7PrIvjPL8zfh5FuDbRxPd720irRIZ0U7rpYiRe0IO1WL12UyakzwPdlOwsYg071OFlQlpV1AmVMgQaI2fNFo",
    alt: "Oral surgery specialist supporting safe tooth extraction procedures",
    objectPosition: "center top",
  },
} as const satisfies Record<string, ServiceMedia>;

type HadeedServiceMediaKey = keyof typeof hadeedServiceMedia;

const hadeedServiceCards: HadeedServiceCard[] = [
  createHadeedServiceCard("detailCheckup", {
    id: "signature-consultation",
    title: "Signature Consultation",
    description:
      "Detailed diagnostics, chairside evaluation, and step-by-step treatment mapping for patients seeking clarity before starting care.",
    benefit:
      "Ideal for full-mouth planning, second opinions, and patients comparing restorative options.",
  }),
  createHadeedServiceCard("scalingPolishing", {
    id: "hygiene-maintenance",
    title: "Hygiene & Gum Maintenance",
    description:
      "Professional scaling and polishing tailored for long-term gum health, fresher breath, and a cleaner everyday smile.",
    benefit:
      "Supports prevention-focused visits and maintenance for families who want consistent branch care.",
  }),
  createHadeedServiceCard("surgicalExtraction", {
    id: "surgical-planning",
    title: "Consultant Surgical Planning",
    description:
      "Specialist-led assessment for complex extractions, impacted teeth, and cases that need careful sequencing and recovery guidance.",
    benefit:
      "Best for patients who want expert review before committing to oral surgery treatment.",
  }),
  createHadeedServiceCard("teethWhitening", {
    id: "smile-brightening",
    title: "Smile Brightening",
    description:
      "In-branch whitening support designed for cleaner presentation, confidence, and event-ready smile refreshes.",
    benefit:
      "A good fit for patients seeking a polished cosmetic uplift with professional supervision.",
  }),
  createHadeedServiceCard("rootCanal", {
    id: "endodontic-care",
    title: "Root Canal Care",
    description:
      "Tooth-saving endodontic treatment focused on relieving pain, protecting structure, and preserving natural function.",
    benefit:
      "Recommended when patients want to avoid extraction and keep long-term restorative options open.",
  }),
  createHadeedServiceCard("fillings", {
    id: "aesthetic-fillings",
    title: "Aesthetic Fillings",
    description:
      "Refined restorative dentistry for cavities, worn surfaces, and small fractures with a neat, comfort-first approach.",
    benefit:
      "Helps restore function while keeping everyday dental repairs discreet and natural looking.",
  }),
  createHadeedServiceCard("crownBridges", {
    id: "restorative-rehabilitation",
    title: "Crowns & Bridges",
    description:
      "Fixed restorative solutions for weakened, missing, or heavily damaged teeth planned with aesthetics and bite stability in mind.",
    benefit:
      "Useful for patients rebuilding confidence, chewing comfort, and long-term smile support.",
  }),
  createHadeedServiceCard("extractions", {
    id: "expert-extractions",
    title: "Expert Extractions",
    description:
      "Comfort-focused tooth removal supported by clinical judgment, clear explanation, and aftercare planning.",
    benefit:
      "For teeth that cannot be predictably restored and require a safer next-step treatment path.",
  }),
];

const dhabejiHeroHighlights: ClinicHeroHighlight[] = [
  {
    title: "Advanced Tech",
    description: "Panoramic imaging, guided diagnostics, and laser-ready workflows for cleaner treatment decisions.",
  },
  {
    title: "Family-First Flow",
    description: "A calmer branch experience shaped for children, adults, follow-ups, and everyday dentistry.",
  },
  {
    title: "Fast Coordination",
    description: "Consultations, treatment planning, and support requests handled from one connected branch touchpoint.",
  },
];

const dhabejiHeroMetrics: ClinicHeroMetric[] = [
  { label: "Clinic Hours", value: "Mon - Sat | 9:00 AM - 8:00 PM" },
  { label: "Key Strength", value: "Laser care, aligners, veneers" },
  { label: "Experience", value: "Comfort-first branch dentistry" },
];

const dhabejiHeroSlides: ClinicHeroSlide[] = [
  {
    id: "dhabeji-branch",
    image: dhabejiPage.heroImage,
    alt: "Dhabeji clinic interior with modern treatment setup",
    eyebrow: "Branch Interior",
    title: "A refined clinical environment for everyday care",
    description:
      "Bright operatories and a polished branch atmosphere support routine appointments, diagnostics, and restorative visits.",
  },
  {
    id: "dhabeji-diagnostics",
    image: hadeedServiceMedia.rootCanal.image,
    alt: "Clinical environment supporting diagnostics and dental treatment planning",
    eyebrow: "Diagnostics",
    title: "Technology-backed treatment planning",
    description:
      "Care starts with clearer imaging, calmer consultations, and step-by-step planning that patients can actually follow.",
  },
  {
    id: "dhabeji-specialist",
    image: dhabejiPage.doctors[1].image,
    alt: "Specialist-led care at the Dhabeji branch",
    eyebrow: "Specialist Access",
    title: "Experienced practitioners on branch duty",
    description:
      "Specialists and skilled dentists help patients move from first assessment to confident next-step treatment.",
    objectPosition: "center top",
  },
];

const hadeedHeroHighlights: ClinicHeroHighlight[] = [
  {
    title: "Digital Imaging",
    description: "Sharper diagnostics give the branch a stronger foundation for consultations and restorative mapping.",
  },
  {
    title: "Consultant Review",
    description: "Specialist-led surgical and restorative planning keeps complex care clearer and more predictable.",
  },
  {
    title: "Premium Patient Flow",
    description: "A calmer, more polished visit experience from first conversation through follow-up guidance.",
  },
];

const hadeedHeroMetrics: ClinicHeroMetric[] = [
  { label: "Appointment Window", value: "Mon - Sat | 11:00 AM - 10:00 PM" },
  { label: "Branch Location", value: "Gulshan-e-Hadeed, Karachi" },
  { label: "Treatment Focus", value: "Diagnostics to smile enhancement" },
];

const hadeedHeroSlides: ClinicHeroSlide[] = [
  {
    id: "hadeed-exterior",
    image: hadeedPage.heroImage,
    alt: "The Dental Zone Hadeed branch exterior",
    eyebrow: "Flagship Branch",
    title: "A premium branch built around trust and clarity",
    description:
      "The flagship Hadeed experience blends modern presentation, specialist access, and a strong first impression for new patients.",
  },
  {
    id: "hadeed-room",
    image: hadeedPage.roomImage,
    alt: "Modern Hadeed treatment room",
    eyebrow: "Treatment Space",
    title: "Calm interiors that support smoother appointments",
    description:
      "Purposeful treatment rooms help consultations, diagnostics, and procedure visits feel more structured and reassuring.",
  },
  {
    id: "hadeed-restorative",
    image: hadeedServiceMedia.crownBridges.image,
    alt: "Restorative dentistry environment representing advanced care at Hadeed",
    eyebrow: "Restorative Planning",
    title: "Specialist-led care for complex restorative journeys",
    description:
      "From smile rehabilitation to advanced treatment planning, the branch is designed for cases that need clarity and confidence.",
  },
];

const clinicPageConfigs: Record<
  ClinicSlug,
  {
    name: string;
    description: string;
    Component: React.ComponentType;
  }
> = {
  dhabeji: {
    name: dhabejiPage.name,
    description: dhabejiPage.description,
    Component: DhabejiClinicPage,
  },
  hadeed: {
    name: hadeedPage.name,
    description: hadeedPage.description,
    Component: HadeedClinicPage,
  },
};

export function generateStaticParams() {
  return supportedClinicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ClinicPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isClinicSlug(slug)) {
    return {};
  }

  const clinicPage = clinicPageConfigs[slug];

  return {
    title: `${clinicPage.name} | The Dental Zone`,
    description: clinicPage.description,
  };
}

export default async function ClinicPage({ params }: ClinicPageProps) {
  const { slug } = await params;

  if (!isClinicSlug(slug)) {
    notFound();
  }

  const PageComponent = clinicPageConfigs[slug].Component;

  return <PageComponent />;
}

function DhabejiClinicPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <ClinicHeroSlider
        badge="Branch Specialty"
        title="Dental Clinic"
        accent="Dhabeji"
        description={dhabejiPage.intro}
        slides={dhabejiHeroSlides}
        highlights={dhabejiHeroHighlights}
        metrics={dhabejiHeroMetrics}
        primaryAction={{ href: "/contact", label: "Book a Visit" }}
        secondaryAction={{ href: "/clinics", label: "Explore Clinics" }}
      />

      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {dhabejiPage.infoCards.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#eef2f6] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <h2 className="font-heading text-4xl font-extrabold tracking-[-0.05em] text-[#003857]">
              Clinical Services
            </h2>
            <p className="mt-2 text-sm text-[#6b7480]">
              Specialized dental care powered by precision medicine.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {dhabejiPage.services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[1.8rem] bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:bg-[#003857]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1b4f72] text-white transition duration-300 group-hover:bg-white/16">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold tracking-[-0.03em] text-[#003857] transition duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#6b7480] transition duration-300 group-hover:text-white/78">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-extrabold leading-[0.98] tracking-[-0.06em] text-[#003857] sm:text-5xl">
              Expert
              <br />
              Practitioners
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#66707b]">
              Meet the specialist team leading the Dhabeji branch. Each doctor brings years of
              international training and compassionate expertise.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#003857] transition duration-300 hover:gap-3"
            >
              Book a Visit
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {dhabejiPage.doctors.map((doctor, index) => (
              <article key={doctor.name} className={index === 1 ? "md:translate-y-10" : ""}>
                <div className="group relative">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(min-width: 768px) 26vw, 100vw"
                      className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  <div
                    className={`absolute left-[-0.4rem] top-8 h-14 w-1 rounded-full ${doctor.accentClassName}`}
                  />
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#003857]">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-[#6b7480]">{doctor.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#eef2f6] shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:rounded-[2rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem] sm:min-h-[24rem]">
            <Image
              src={dhabejiPage.mapImage}
              alt="Map view showing the Dhabeji clinic location"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,56,87,0.12))]" />
            <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#003857] text-white shadow-[0_18px_50px_rgba(0,56,87,0.28)]">
              <LocationIcon className="h-7 w-7" />
            </div>
          </div>

          <div className="p-6 sm:p-12 lg:p-16">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-[#003857] sm:text-3xl">
              Schedule a Visit
            </h2>

            <div className="mt-8 space-y-6">
              {dhabejiPage.contactItems.map((item) => (
                <ContactRow key={item.label} {...item} />
              ))}
            </div>

            <form className="mt-10 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="fullName"
                  aria-label="Full Name"
                  placeholder="Full Name"
                  className={inputClassName}
                />
                <input
                  name="email"
                  type="email"
                  aria-label="Email"
                  placeholder="Email"
                  className={inputClassName}
                />
              </div>
              <textarea
                name="concern"
                rows={4}
                aria-label="Dental concern"
                placeholder="Tell us about your dental concern"
                className={textareaClassName}
              />
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#003857] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(0,56,87,0.22)] transition duration-300 hover:bg-[#0c476b]"
              >
                Submit Request
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function HadeedClinicPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <ClinicHeroSlider
        badge="Flagship Branch"
        title="The Dental Zone"
        accent="Hadeed"
        description="Premium dentistry anchored in trust, clarity, and comfort for Gulshan-e-Hadeed, with specialist-led treatment, restorative planning, and a polished patient journey."
        slides={hadeedHeroSlides}
        highlights={hadeedHeroHighlights}
        metrics={hadeedHeroMetrics}
        primaryAction={{ href: "/contact", label: "Book Appointment" }}
        secondaryAction={{ href: "/contact", label: "Request Treatment Plan" }}
      />

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <article className="rounded-[1.5rem] p-0 sm:rounded-[2rem] sm:p-10">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#006a61]">
              Services
            </p>
            <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-[-0.04em] text-[#003857] sm:text-4xl">
              Specialist care across diagnostics, restorative treatment, and smile enhancement.
            </h2>
            <div className="mt-8 grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
              {hadeedServiceCards.map((service) => (
                <article
                  key={service.id}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-[#dbe3e7] shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 23vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={
                        service.objectPosition
                          ? { objectPosition: service.objectPosition }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,56,87,0.04),rgba(0,56,87,0.62))]" />
                    <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/88 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#003857]">
                      Hadeed Care
                    </div>
                  </div>

                  <div className="flex h-full min-w-0 flex-col p-4 sm:p-5">
                    <h3 className="break-words text-base font-bold tracking-[-0.03em] text-[#003857] sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-3 break-words text-sm leading-6 text-[#67727e] sm:leading-7">{service.description}</p>
                    <p className="mt-auto pt-4 rounded-[1.1rem] bg-[#eef4f7] px-4 py-3 text-sm leading-6 text-[#003857]/80">
                      {service.benefit}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#eef4f7] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-4xl">
                Meet the Hadeed Team
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#61707c]">
                Consultants and dentists supporting daily branch care, restorative planning, and
                specialist referrals.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DoctorSwiper doctors={hadeedDoctors} />
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 sm:px-6 sm:pt-24 lg:px-10">
        <div className="mx-auto rounded-[1.5rem] bg-[#003857] px-6 py-8 text-white shadow-[0_24px_80px_rgba(0,56,87,0.2)] sm:rounded-[2rem] sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-white/60">
              Book a Consultation
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
              Ready for specialist-led dental care?
            </h2>
            <p className="mt-4 text-base leading-8 text-[#cce5ff]">
              Start with a consultation, treatment plan, or second opinion at our flagship Hadeed
              branch.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#003857]"
            >
              Book appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-bold text-white"
            >
              Request treatment plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, lines, icon: Icon, featured = false }: InfoCardItem) {
  return (
    <article
      className={`rounded-[1.8rem] p-8 shadow-[0_14px_40px_rgba(15,23,42,0.04)] ${
        featured ? "bg-[#1b4f72] text-white" : "bg-white text-[#003857]"
      }`}
    >
      <div
        className={`grid h-11 w-11 place-items-center rounded-full ${
          featured ? "bg-white/12 text-white" : "bg-[#eef4f8] text-[#003857]"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`mt-8 text-lg font-bold ${featured ? "text-white" : "text-[#003857]"}`}>
        {title}
      </h3>
      <div
        className={`mt-3 space-y-1 text-sm leading-7 ${
          featured ? "text-white/84" : "text-[#69737d]"
        }`}
      >
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function ContactRow({ label, value, icon: Icon }: ContactItem) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#003857] shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.24em] text-[#7b8590]">
          {label}
        </p>
        <p className="mt-1 text-lg font-medium tracking-[-0.02em] text-[#003857]">{value}</p>
      </div>
    </div>
  );
}

function createHadeedServiceCard(
  mediaKey: HadeedServiceMediaKey,
  card: Omit<HadeedServiceCard, keyof ServiceMedia>,
): HadeedServiceCard {
  return {
    ...card,
    ...hadeedServiceMedia[mediaKey],
  };
}

function isClinicSlug(slug: string): slug is ClinicSlug {
  return supportedClinicSlugs.includes(slug as ClinicSlug);
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20c3.2-3.5 5-6.1 5-8.8A5 5 0 0 0 7 11.2C7 13.9 8.8 16.5 12 20Z"
        fill="currentColor"
      />
      <circle cx="12" cy="11" r="1.8" fill="white" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.6 5.4c.6-.6 1.6-.6 2.2 0l1.5 1.5c.5.5.6 1.3.2 1.9l-1.1 1.6a13.4 13.4 0 0 0 3.2 3.2l1.6-1.1c.6-.4 1.4-.3 1.9.2l1.5 1.5c.6.6.6 1.6 0 2.2l-.8.8c-.9.9-2.2 1.3-3.4 1-2.6-.7-5.1-2.3-7.3-4.5S4.4 10.3 3.7 7.7c-.3-1.2.1-2.5 1-3.4l.8-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.8v4.7l3 1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 7.5h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="m5 9 7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 11a6 6 0 1 1 12 0v3.5a2.5 2.5 0 0 1-2.5 2.5H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="4" y="11" width="3.5" height="6" rx="1.75" fill="currentColor" />
      <rect x="16.5" y="11" width="3.5" height="6" rx="1.75" fill="currentColor" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PulseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12h3.2l1.7-3.4 2.2 7 2.2-5.2H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
    </svg>
  );
}

function DiamondIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 6h8l3 4-7 8-7-8 3-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m9 6 3 12 3-12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function AlignmentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 7h12M6 12h12M6 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
