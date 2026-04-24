export const siteName = "The Dental Zone";

export const primaryPhone = "+92-336-2130181";
export const secondaryPhone = "+92-329-2377122";
export const callHref = "tel:+923362130181";
export const whatsappHref = "https://wa.me/923362130181";
export const appointmentHref = "/contact";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Dhabeji Clinic", href: "/clinics/dhabeji" },
  { label: "FCPS Online Training", href: "/fcps-training" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const founder = {
  name: "Dr. Khubaib Ahmed Shaikh",
  title: "Founder & Lead Consultant",
  intro:
    "The Dental Zone is built on one simple promise: modern dentistry should feel clear, calm, and genuinely caring. From family dental care to advanced treatment planning and FCPS mentorship, every service is designed to give patients and trainees confidence in their next step.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLTm5DBMo6Y65bo1S9kVu_l-9NGkiv_dZ9oJi5lN_dmTj-CSb5q4EgRemlENx3UajQXY1myzEZ2C2CNxKOZkDqezcN6HvZF2OzWyG2GWo408Z5bnNE3YiXDQhpCZA7WBHaMp3sO6V_d64b2S47RDmjzTATJ-lpAVYclF5QsfKPeQVsMzbX8JqU3N8o4uj_0_IaEQD8yEGmEx1L_VdFFeUt3hTM2sxkVF90R4npumex3zAOR97tsNOlU8kj9ewJiCbCOqhQHiWjb8M",
  stats: [
    { label: "Patient-first care", value: "7 Days" },
    { label: "Core dental services", value: "8+" },
    { label: "Dedicated doctors", value: "6" },
  ],
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  detail: string;
  image: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "detail-checkup-xray",
    name: "Detail Checkup & X-Ray",
    shortDescription: "Detailed consultation with clinical examination and diagnostic imaging.",
    detail:
      "A complete first-step evaluation for patients who need clear diagnosis, treatment planning, or a second opinion before starting dental work.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAATxB-9AyrY74elLxjqyAKjHIog7SHyJcm8NDGialA5T8ko0ItpTUQzuefltEkYs4kZ38QS-zRnDIk8e7Aj-pMSVRBmUoBkWcq53mNRUZJvl_VihPNPVIASQA7fmZ6TFOaNdn-JBvePWeQgc8AhLl2l1uS_dQvbWARcm3viax9xnYs1tsnfOtc6qr2pkYsWki6_hyFLLrMfIAPlSoN4knOUEMBqBLNvjsoczVtUvLq3De9wtBNtzCZlBbjkFrf2xGjpJfL7wXQQWY",
    highlights: ["Clinical exam", "X-ray support", "Treatment planning"],
  },
  {
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    shortDescription: "Professional cleaning for healthier gums and a fresher smile.",
    detail:
      "This service helps remove plaque and tartar buildup while supporting preventive care, gum maintenance, and everyday oral hygiene.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3sQJX05rx9R76bg9s9JrgUBs69R0ai0ppwqG3-JXRhijPe56OOhpu6Ti-Ogckc8fn60GLIga8Q7efFcVRNVO7NjThiPY4Oyo9rCC8Yk31JHHJLWSyQI4I2QbovgQMMO3POjEBQICR5FZ-_o6es222RFXb8-b8xk9mIlBj-8pQMncwp91ZWdNC9I-fh1BpHhO23pHTkeXyI-1Vx9u1KhapQ2zDHQy9enN4kyE9AsEdkbRIp1KNixcgC2ebRwtDX4WDoU5lJ_iNfjA",
    highlights: ["Deep cleaning", "Preventive care", "Gum support"],
  },
  {
    slug: "surgical-extraction",
    name: "Surgical Extraction",
    shortDescription: "Comfort-focused extraction for complex or impacted teeth.",
    detail:
      "Advanced extraction planning for difficult cases, guided by clinical assessment, safe technique, and complete aftercare instructions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfQ75RJDibWy7WpZlM1EYrJ-igfCj-Eq36ZzEOjibrt5JyhJWF5VQ1t0jrS9uL-xJzPXIamOuhtyDR9cqv_mpiA0ZZ1nXU684nKlE1sY8iUHT3oDIyYq3hqKme79BKZNuvVTrJohjhhmXEyY020w03Rngsa5mC-o76ex0Z0GikcPGunkAAl21s3ibrtiZ5pi6q8-7KRHs-L-_KzkZoNTwpNbEB8eNS7dpfkTjnJWKVL7Faz28hS004vGy7zBvQ8YQf9PkAHc2GEv8",
    highlights: ["Complex cases", "Safe planning", "Post-op guidance"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional smile brightening with a polished cosmetic finish.",
    detail:
      "Aesthetic whitening support for patients who want a cleaner, brighter smile for daily confidence, events, or cosmetic enhancement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvWt7-xDPfcoWEccsfi9msmqlUjoRp9FeCrXgzEQIyadzdyL0_vIP_gFr35KXig4FyQRnm0aZyKLWg-QmSccI_wB-BqDSwvz3AyC7Qh9BEzkpBMJ5s8k9INvEZs3z7lnpJpMNlNjBPqojuYF26crxehl1KSPdbNwQnYAoYyQWQZy8w8EdSQKxDGlwRI7S6tPDlXz69qQ_Q-uU2N7JyVXCMoxVxyBIZaPsKoB6YEYyVnAf6QG5dFSqLLqwlcw75fOfcgCV3XFtpVQ",
    highlights: ["Cosmetic care", "Brighter smile", "Professional supervision"],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription: "Tooth-saving treatment to remove pain and preserve function.",
    detail:
      "Ideal for infected or damaged teeth that can still be preserved, with focus on relief, restoration, and long-term dental stability.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyn1gxEAyU7RGfYYFkTTHR-q3a358YcQcqRJ9FkbuiGJpnFpjaWNJmLtTO6eK1TzmYMpXdCOSEUxXWZAQr_hS2eeoyMPYVKIa9K8t46rCKoldy4wMY1PxuWfSkRS9TGox4_e_RUSoJ7B2WuTyBqpuRw04t1jpl2LMLtWK6hNjBFPSoKAPz6OajTissyA_3hu8r9gVHfeZdgwlv4cJUcWbKmDbbYfougPltzY2R3KQ672OtOgcGcHrykVYH5BJ7WO4dgLiBy5DVyrM",
    highlights: ["Pain relief", "Tooth preservation", "Restorative support"],
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    shortDescription: "Neat restorative treatment for cavities and damaged surfaces.",
    detail:
      "Fillings restore tooth structure while protecting function, improving comfort, and keeping everyday repairs simple and reliable.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqYtO-opvXBGDX_5999fNOvejltbwpAoF0XjDKL3WoEm-Awd5fTWp2W-Ds4lZ8wuClWhI944rhYprd_aVVZAaZsTeST1drczTX_LbdNfkU4QSjDoNQ5t4XEcpa5QV5Jjs19mR1oAXcrLVxO5fE5yiVwp1ARHGd_406V-CbZzKXZBaTuYJn3UFjhb31nYMnDYT-NJ_Ju6OfmB8Z3kyI2loqNsjL3EQg-lIUFD01v2-mz5Ef_McdrPtbunXAMvRw3vYsmg_buzjpfJs",
    highlights: ["Cavity repair", "Tooth protection", "Quick restoration"],
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortDescription: "Fixed restorative solutions for damaged or missing teeth.",
    detail:
      "Custom treatment options designed to rebuild bite, function, and smile confidence for long-term restorative care.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy2XMUFqLDX5N5OT5bie6DYeGkK3B8jNm0dOdLbq-fBmvrwdE0Gv652v1BOmikzLxosVilEJwqAvsz39WhYM4pEWR6dD4SWdv2RGSqGFOPHNHoOLqmS7vh5OSeOYsiLFVrMMSlTkoEjL0iVnRnW8I6FdBxwCBI5X9EfNYOvxDLK3qlYc0vAcsV9xdvPV_BwJnoDuWAg4bmpuRSXa2E47vYTG9BJNYbA8OAuc31rp2ZFSR1JEogzYIXRKdNMOIWz_CTgKn_QxN4QNA",
    highlights: ["Bite restoration", "Smile rehab", "Custom planning"],
  },
  {
    slug: "simple-extractions",
    name: "Extractions",
    shortDescription: "Safe tooth removal when preservation is no longer possible.",
    detail:
      "When a tooth cannot be reliably restored, extraction is planned with comfort, healing, and the next treatment step in mind.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8-dcYUXHBU-dNPSDxXxkIvsKcIR7ZGlxyQyIOg3sssUs9ZxbU7LOLU4w3JmdM7I5qqbR9LCzPUVlEywzrVUpR9kNjNiYJMMx4EKPBQHB391kpLgq6AZu80Dbg1olDH0rF8ZbQylpMG6-47cLN2onlNUL02cLtmglhQt4MQOwG2Td2TJJrAtIMoq7PrIvjPL8zfh5FuDbRxPd720irRIZ0U7rpYiRe0IO1WL12UyakzwPdlOwsYg071OFlQlpV1AmVMgQaI2fNFo",
    highlights: ["Comfort-first", "Healing guidance", "Clinical safety"],
  },
];

export type TeamMember = {
  name: string;
  position: string;
  timing: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Khubaib Ahmed Shaikh",
    position: "Founder & Lead Consultant",
    timing: "Daily except Wednesday & Saturday, 7:00 PM - 10:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLTm5DBMo6Y65bo1S9kVu_l-9NGkiv_dZ9oJi5lN_dmTj-CSb5q4EgRemlENx3UajQXY1myzEZ2C2CNxKOZkDqezcN6HvZF2OzWyG2GWo408Z5bnNE3YiXDQhpCZA7WBHaMp3sO6V_d64b2S47RDmjzTATJ-lpAVYclF5QsfKPeQVsMzbX8JqU3N8o4uj_0_IaEQD8yEGmEx1L_VdFFeUt3hTM2sxkVF90R4npumex3zAOR97tsNOlU8kj9ewJiCbCOqhQHiWjb8M",
  },
  {
    name: "Dr. Wajeeha Fayyaz",
    position: "Dental Surgeon",
    timing: "Monday - Wednesday, 4:00 PM - 7:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVvWt7-xDPfcoWEccsfi9msmqlUjoRp9FeCrXgzEQIyadzdyL0_vIP_gFr35KXig4FyQRnm0aZyKLWg-QmSccI_wB-BqDSwvz3AyC7Qh9BEzkpBMJ5s8k9INvEZs3z7lnpJpMNlNjBPqojuYF26crxehl1KSPdbNwQnYAoYyQWQZy8w8EdSQKxDGlwRI7S6tPDlXz69qQ_Q-uU2N7JyVXCMoxVxyBIZaPsKoB6YEYyVnAf6QG5dFSqLLqwlcw75fOfcgCV3XFtpVQ",
  },
  {
    name: "Dr. Sidra Nisar",
    position: "Restorative Care Dentist",
    timing: "Monday - Wednesday, 4:00 PM - 7:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5M3Tesd_bwkUGp9F9TksgMBky0gWAyVD2ZBGJOFt-bzo1wvupexqCWFeL8wEJ6XKudKLoweb8k3BGtVTu4fO-j5PXcFSky16Sc2s9M40uOUgWgGf3eUf6MTEAAN-vGKS8RQAE2jyUfUnWKOVpEJiP_K0uCBBXg7N2lTheilwyzU1L2L6Zs_osL-A79lpxnvLjggjsesJhoZEkhcYeTO8XaPhb6-cxrDzw1cIqZZk2Sz7ecB0TPkqjQ9VxVonVY72KJSOVL5Ubei8",
  },
  {
    name: "Dr. Rana Hira Liaquat",
    position: "Family Dentistry Consultant",
    timing: "Thursday - Saturday, 11:00 AM - 3:00 PM | Sunday, 3:00 PM - 7:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdf3IBNhAjcJYfWfXV5uh6SCf_WDd0wsjJM7J5x-FbMnCzRZYS3yXYv6vZZac_LOMCRPnW-igcF-sE2YHJ25yrWNEBtibu2DMI-M_YDqgYQeTuDuWhabKUaywojQUoH5QzYX616wL8J-irKRWpKc3WYN_WB1ktVCegTDSBeFDQKvyd4bAN1nY5OJtiz_nAOj6gJYLfmtUOBD0tzymdcOyNrEfsg8o-M0Qo0QPauzsNUxN-pZbj2Mq6vvhHTbG6GAkpXKCxSoNRcA0",
  },
  {
    name: "Dr. Sumaiya Anwer",
    position: "Dental Surgeon",
    timing: "Thursday - Saturday, 4:00 PM - 7:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxzyMt_1SnUCUjFLZcbN-Zd4tAK4m9bF8iZplIp74l4EoHkkyPbjKDxjYxCF6Sc-Bb-5oIKNIIx2BBPPKd1nVFSVIvc6xNJM84xPreRw4NUK-d8SRB8f9idxPyDqcsLPurNnvnUP4nSFa7fESBGJs-3G-zoRjyPLbUO64Eq694VioyLYk04DqbIJ2SvLAJZri9QQtFY2wM8p7v-0zitxxRoYzybTeV8Z5DDaXK7TjLTrlsf2vjtuD8S1fkU8Q3HfgegJT7IErOGiY",
  },
  {
    name: "Dr. Noor ul Ain",
    position: "Endodontic & Prostho-Focused Dentist",
    timing: "Wednesday & Saturday, 7:00 PM - 10:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCorY1FKbWrK-OuM-QmY20bLmfrWniagTSfo7sMC2FGGCRJUCUMT2nm_M-EYz8gBl338sg523jtpmC7Z8HZiH6P_DFkekICubNFCRJbwQlOqtKGNeiDgwnZwfEgxYtH-FLaV_kCEZ4b48DY9Vz9g2X7XWSB6465WEgpD3kFx0Q0GFubB207DQghIDg3scM9zPrfFmaKZrkMVpIQlGbddADnWs4HwCKPVMIHLWqGCkLTSnicg6iT0JtuWWTsFOS1cxpn0vfgbhWw3Lc",
  },
];

export const videoReview = {
  title: "Client Review Video",
  summary:
    "A featured patient story area is placed here so visitors can quickly connect with a real treatment experience before booking.",
  poster:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_bO8_Dz5xiVKVEhKWADYfwC35I2epO8RmqDS_zluYCiVZy8lmt9lSokaiNcQnpEsm_rfoIkcs6lmPvxKLIU1VU5hmOI2Bb4ixP1_GPsVlTqwIAAHKdjPrm-W0f1mkDYCJ5eJ3l8teWaWoNzzNEEbrvVP1agyOLsW1V_hWXMQ5bzYIHExydOeHUahILi5hcHUMlhHTa9J9pkiz5xCovGm_WmHBuro6Mwo7pzkdg2diZ2H858aC20L-_KkAhv_1yRi0FeRHMyTHRT8",
};

export const googleReviews = [
  {
    author: "Areeba S.",
    rating: 5,
    text: "Very clean clinic, polite staff, and the doctor explained everything in a very simple way.",
    href: "https://www.google.com/maps/search/?api=1&query=The%20Dental%20Zone%2C%20Iftikhar%20Memorial%20Hospital%2C%20Gulshan-e-Hadeed%20Phase%202",
  },
  {
    author: "Hamza R.",
    rating: 5,
    text: "One of the smoothest dental visits I have had. Booking, treatment, and follow-up all felt professional.",
    href: "https://www.google.com/maps/search/?api=1&query=The%20Dental%20Zone%2C%20Iftikhar%20Memorial%20Hospital%2C%20Gulshan-e-Hadeed%20Phase%202",
  },
  {
    author: "Sana K.",
    rating: 5,
    text: "The team was gentle and caring. I especially liked how clear they were about cost and treatment options.",
    href: "https://www.google.com/maps/search/?api=1&query=The%20Dental%20Zone%2C%20Iftikhar%20Memorial%20Hospital%2C%20Gulshan-e-Hadeed%20Phase%202",
  },
  {
    author: "M. Danish",
    rating: 5,
    text: "Dhabeji clinic is neat, family friendly, and easy to recommend for routine dental care.",
    href: "https://www.google.com/maps/search/?api=1&query=The%20Dental%20Zone%2C%20Iftikhar%20Memorial%20Hospital%2C%20Gulshan-e-Hadeed%20Phase%202",
  },
];

export const whyChooseUs = [
  {
    title: "Pain-Free Dentistry",
    description:
      "Experience dental care without discomfort. Our advanced techniques ensure a gentle and painless experience.",
  },
  {
    title: "Laser Technology",
    description:
      "Embrace the future of dentistry with laser technology. Precise, minimally invasive treatments for optimal results.",
  },
  {
    title: "Team of Best Dentists",
    description:
      "Our highly skilled dentists are committed to providing exceptional care and personalized treatment plans.",
  },
  {
    title: "Conscious Sedation",
    description:
      "Relax and unwind during your dental procedures with our safe and effective sedation techniques.",
  },
  {
    title: "Aesthetic Services",
    description:
      "Elevate your overall appearance with our range of non-invasive cosmetic treatments like HydraFacial, Face PRP, Hair PRP, etc.",
  },
  {
    title: "General Anesthesia",
    description:
      "Undergo complex dental procedures with ease and comfort, thanks to our general anesthesia services.",
  },
];

export const weeklyHours = [
  { day: "Monday", hours: "09:00 AM - 09:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 09:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 09:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 09:00 PM" },
  { day: "Friday", hours: "09:00 AM - 09:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 09:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 09:00 PM" },
] as const;

export const locationInfo = {
  title: "We are open all 7 days",
  address: "Dhabeji Clinic, Karachi, Pakistan",
  mapQuery: "Dhabeji Clinic Karachi Pakistan",
  mapEmbed:
    "https://www.google.com/maps?q=Dhabeji%20Clinic%20Karachi%20Pakistan&output=embed",
};

export const mainClinicLocation = {
  title: "The Dental Zone Hadeed",
  address: "The Dental Zone, Iftikhar Memorial Hospital, Gulshan-e-Hadeed Phase 2",
  mapQuery: "The Dental Zone, Iftikhar Memorial Hospital, Gulshan-e-Hadeed Phase 2",
  mapEmbed:
    "https://www.google.com/maps?q=The%20Dental%20Zone%2C%20Iftikhar%20Memorial%20Hospital%2C%20Gulshan-e-Hadeed%20Phase%202&output=embed",
};

export const dhabejiClinicPage = {
  title: "Dhabeji Clinic",
  description:
    "A modern and approachable branch for family dentistry, diagnostics, restorative care, and comfortable routine appointments.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABWfSjSKTMB8J7tazznLjSp6muhCjoL0nCbVTUlVixaV4z0JiZEcFYE6REepX7SbH0JV49mogqQ6qW34uNOj6wQZ1LpSIuu8OoYEhDUNUTsylXP3CbMF5vRH6M5ftz5pcpHkEkcqDx23TS68ODjL_pTzMGZhZJapeXwMHeA141sL7ieBOXW_wJlCDnIS6mnQFsHF2B6AmAqLpYsqDh5kTxYUg1uV-dyQHGIOEVycVdapWFHgqqnr_lQkkR6QtY-fSBErovLaHrgrw",
  points: [
    "Family-friendly environment",
    "Routine and restorative care",
    "Convenient all-week access",
  ],
};

export const fcpsTraining = {
  title: "FCPS Online Training",
  description:
    "Focused online mentoring for dentists who want stronger structure, better case discussion, and exam-ready preparation.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBy2IIhKEWdNL2qDhSqsvsXaH-5lHdn3ibkW4fmn-mIr7uluFh9A0G8r6K93HTWy9Lhg1V4wxwKCKDs_bkTVqk1_PKDRH4i3FGgSDODlbmBnn0SP5pgBJpXQI0_WnqyxHv8NtvqvsSP7kDwKF38CU_iqcA4a0v1AzuWCnmX2T0r8j5W4iF9JuNeg5O59ayfe-JeoWdZOwD5Gs68lLsBqHMFt2sxDs5vUTaufm3Y0mvldYcOlUW9orx_I5l05QCu_siJU-wf0SHqxKw",
  modules: [
    "Case discussion support",
    "Clinical reasoning guidance",
    "Exam-oriented online sessions",
    "Weekly progress mentoring",
  ],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "1. Where can I find the best dentist in Karachi?",
    answer:
      "While searching for the best dentist in Karachi, several things that should come into your mind include: qualifications of dentist, patient reviews, range of services and clinic’s overall reputation. A good dentist should have good working record of handling their patients, use updated dental equipment and should respect the patient’s needs. At The Dental Zone, such standards are met with professional staff, up to date tools and equipment and personalized forms of treatment. We’re honored to be the preferred choice of many patients of Karachi who expect quality, safe treatment and caring environment.",
  },
  {
    question: "2. Which services are available at The Dental Zone?",
    answer:
      "The Dental Zone offers detail checkup and X-ray, scaling and polishing, surgical extraction, teeth whitening, root canal treatment, fillings, crowns and bridges, and extractions. Aesthetic and supportive care options are also highlighted through our modern treatment approach.",
  },
  {
    question: "3. How do I choose the best dental clinic in Karachi?",
    answer:
      "You should compare doctor qualifications, available services, hygiene standards, patient reviews, updated equipment, treatment clarity, and how comfortable the clinic makes you feel. The best clinic is one that combines trusted care with clear guidance and consistent support.",
  },
  {
    question: "4. Are there any dental clinics near me that offers aesthetic dental services?",
    answer:
      "Yes. The Dental Zone offers aesthetic-focused services and a modern care environment for patients looking for cosmetic improvement along with routine and restorative dentistry.",
  },
  {
    question: "5. What makes The Dental Zone the better clinic than other dental clinics?",
    answer:
      "Our clinic stands out through patient-focused care, modern techniques, laser-supported treatment options, experienced dentists, clean presentation, and clear communication before and after treatment.",
  },
  {
    question: "6. Where do I get a reliable dentist near me for my family’s dental health?",
    answer:
      "A reliable family dentist should provide preventive, restorative, and consultation-based care in a calm environment. The Dental Zone is designed to support children, adults, and families with convenient timings and dependable follow-up.",
  },
  {
    question: "7. Is it possible to book an online video appointment at The Dental Zone?",
    answer:
      "Yes. You can contact our team through the contact page or call directly to request an online video appointment, depending on the concern and doctor availability.",
  },
  {
    question: "8. Which options of payments does The Dental Zone accept?",
    answer:
      "For payment details, patients can call before their visit and our team will guide them through the currently accepted options and appointment process. This helps avoid confusion before treatment starts.",
  },
];

export const footerLinks = {
  company: navItems,
  services: services.slice(0, 5).map((service) => ({
    label: service.name,
    href: `/services/${service.slug}`,
  })),
};

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
    name: "The Dental Zone Hadeed",
    shortName: "Hadeed",
    category: "Flagship Clinic",
    href: "/clinics/hadeed",
    tagline: "Advanced family dentistry with modern clinical planning.",
    description: "A specialist-led experience for consultation, restorative care, and treatment planning.",
    accentLabel: "Premium Care",
    accentClassName: "text-teal-700 ring-teal-500/20 bg-teal-500/10",
    panelClassName: "from-[#0a2540] via-[#0d5e6e] to-[#123d5c] text-white border-white/15",
  },
  {
    id: "dhabeji",
    name: "Dhabeji Clinic",
    shortName: "Dhabeji",
    category: "Community Clinic",
    href: "/clinics/dhabeji",
    tagline: "Accessible daily dentistry for families and routine patients.",
    description: "A clean modern branch focused on convenient routine, restorative, and follow-up care.",
    accentLabel: "Family Focus",
    accentClassName: "text-cyan-700 ring-cyan-500/20 bg-cyan-500/10",
    panelClassName: "from-[#0d3556] via-[#126f7d] to-[#194b6d] text-white border-white/15",
  },
  {
    id: "fcps",
    name: "FCPS Online Training",
    shortName: "FCPS",
    category: "Education Division",
    href: "/fcps-training",
    tagline: "Structured online mentoring for dentists preparing for FCPS.",
    description: "Focused online sessions, case discussion, and guidance for clinical exam readiness.",
    accentLabel: "Online Mentoring",
    accentClassName: "text-amber-700 ring-amber-500/20 bg-amber-500/10",
    panelClassName: "from-[#101f35] via-[#5f4c1a] to-[#17304d] text-white border-white/15",
  },
];

export const profiles: Profile[] = teamMembers.map((member, index) => ({
  id: `${member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
  name: member.name,
  role: member.position,
  qualifications: ["BDS-RDS"],
  specialties: ["Modern dentistry", "Patient care"],
  availability: member.timing,
  summary: `${member.position} at ${siteName}.`,
  brands: index % 2 === 0 ? ["hadeed", "dhabeji"] : ["dhabeji"],
}));

export const clinics: Clinic[] = [
  {
    slug: "hadeed",
    name: "The Dental Zone Hadeed",
    headline: "Modern specialist-led care for consultations and treatment planning.",
    tagline: "Flagship branch support",
    intro: "A polished environment for diagnostics, restorative care, and specialist discussion.",
    address: "Gulshan-e-Hadeed, Karachi",
    mapQuery: "Gulshan-e-Hadeed Karachi",
    phones: [primaryPhone, secondaryPhone],
    timings: weeklyHours.map((item) => ({ label: item.day, value: item.hours })),
    gallery: [
      { title: "Consultation", caption: "Calm and modern clinical experience." },
      { title: "Treatment Room", caption: "Well-structured care workflow." },
      { title: "Patient Support", caption: "Clear communication and guidance." },
    ],
  },
  {
    slug: "dhabeji",
    name: "Dhabeji Clinic",
    headline: "Accessible branch care for everyday family dentistry.",
    tagline: "Routine and restorative dental services",
    intro: "A community-friendly branch with convenient timings and structured support.",
    address: locationInfo.address,
    mapQuery: locationInfo.mapQuery,
    phones: [primaryPhone, secondaryPhone],
    timings: weeklyHours.map((item) => ({ label: item.day, value: item.hours })),
    gallery: [
      { title: "Reception", caption: "Simple and modern patient intake." },
      { title: "Treatment Area", caption: "Clean and comfortable treatment spaces." },
      { title: "Community Care", caption: "Dependable branch support for families." },
    ],
  },
];

export const clinicSlugs = clinics.map((clinic) => clinic.slug);

export const trainingModules = fcpsTraining.modules;

export const trustStats = [
  { label: "Open all week", value: "7 Days" },
  { label: "Service detail pages", value: `${services.length}` },
  { label: "Dedicated dentists", value: `${teamMembers.length}` },
  { label: "Main contact line", value: primaryPhone },
];

export const contactChannels = [
  { label: primaryPhone, href: callHref },
  { label: secondaryPhone, href: `tel:${secondaryPhone.replace(/[^+\d]/g, "")}` },
];

