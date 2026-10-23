const U = "https://www.billygo.com";
const W = `${U}/wp-content/uploads`;

export const site = {
  name: "billyGO Air Conditioning & Plumbing",
  phone: "(833) 787-7188",
  tel: "tel:+18337877188",
  schedule: `${U}/schedule/`,
  members: "https://billygo.schedule.online/login?redirect=%2F",
  financing: `${U}/financing-options-plans/`,
  membership: `${U}/membership/`,
  guarantee: `${U}/1-hour-appointment-guarantee/`,
  emergency: `${U}/24-7-emergency-services/`,
  faqs: `${U}/faqs/`,
  about: `${U}/about-us/`,
  reviews: `${U}/local-service-reviews/`,
  serviceArea: `${U}/service-area/`,
  careers: `${U}/careers/`,
  privacy: `${U}/privacy-policy/`,
  bbb: "https://www.bbb.org/us/tx/grapevine/profile/plumber/billygo-air-conditioning-plumbing-0825-1000148339/",
  email: "support@billygo.com",
  licenses: "TX Plumbing M-38424 · TX HVAC TACLB41879E",
  img: {
    logo: `${W}/2025/04/billygo-logo.svg`,
    logoReverse: `${W}/2025/04/billygo-logo-reverse.png`,
    hero: `${W}/2026/06/billyGO-AC-and-Plumbing-DFW.webp`,
    hvac: `${W}/2025/04/hvac.webp`,
    plumbing: `${W}/2025/04/garbage-disposal.webp`,
    drains: `${W}/2025/04/clogged-drain-repair.webp`,
    drainServices: `${W}/2025/04/drain-services.webp`,
    techAtDoor: `${W}/2025/04/billygo-tech-at-door.webp`,
    techAtAc: `${W}/2025/04/tech-at-ac.webp`,
    techInTruck: `${W}/2025/04/tech-in-truck.webp`,
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/billyGO.DFW" },
    { label: "Instagram", href: "https://www.instagram.com/billygo.hvac.plumbing/" },
    { label: "YouTube", href: "https://www.youtube.com/@billyGOAirConditioningPlumbing" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/28123692" },
  ],
};

export const promises = [
  { title: "One-Hour Windows", text: "On time, guaranteed." },
  { title: "No Salespeople", text: "No pushy sales tactics here." },
  { title: "$0 Trip Fee", text: "You only pay for real work." },
];

export const steps = [
  { title: "Call or book online", text: "See real appointment times online, or call and get booked in under 2 minutes.", tag: "Book online · $0 trip fee" },
  { title: "We arrive in your 1-hour window", text: "A licensed tech arrives on time, guaranteed — or we pay you $1 for every minute we're late, up to $60.", tag: "1-hour appointment window" },
  { title: "Solutions, not a sales pitch", text: "Your tech explains the problem, your options, and the exact cost upfront — before any work begins.", tag: "No salespeople · Upfront pricing" },
  { title: "Problem fixed fast", text: "Once you approve, we get to work. No hidden fees, no hourly rates — just results you can trust.", tag: "Fast. Fair. Fixed." },
];

export type Service = { key: string; title: string; img: string; href: string; alt: string; text: string; links: [string, string][] };

export const services: Service[] = [
  {
    key: "hvac", title: "HVAC", img: site.img.hvac, href: `${U}/service-type/cooling/`,
    alt: "billyGO technician servicing an outdoor HVAC unit in Dallas-Fort Worth",
    text: "DFW summers don't wait, and neither do we. Emergency AC repair, full system installs, heat pumps, mini-splits, furnace service and seasonal tune-ups — plus air ducts, dehumidifiers and indoor air quality.",
    links: [
      ["Cooling", `${U}/service-type/cooling/`], ["Heating", `${U}/service-type/heating/`],
      ["Heat Pumps", `${U}/service-type/heat-pump/`], ["Mini-Splits", `${U}/service-type/mini-split/`],
      ["CLAiR AC", `${U}/clair-hvac/`], ["Air Ducts", `${U}/service-type/air-duct/`],
      ["Air Purifiers", `${U}/hvac-services/indoor-air-purifying/`], ["Thermostats", `${U}/hvac-services/smart-thermostat-installation/`],
    ],
  },
  {
    key: "plumbing", title: "Plumbing", img: site.img.plumbing, href: `${U}/plumbing-services/plumbing-repair/`,
    alt: "billyGO plumber fixing a garbage disposal under a kitchen sink",
    text: "When a pipe bursts or the hot water quits, you need a plumber who shows up fast. Water heaters and tankless installs, repiping, gas and water lines, leak and slab-leak detection, sump pumps and fixtures.",
    links: [
      ["Water Heaters", `${U}/service-type/water-heater/`], ["Tankless", `${U}/service-type/tankless/`],
      ["Plumbing Repair", `${U}/plumbing-services/plumbing-repair/`], ["Leak Detection", `${U}/plumbing-services/leak-detection/`],
      ["Gas Lines", `${U}/service-type/gas-line/`], ["Sump Pumps", `${U}/service-type/sump-pump/`],
      ["Repiping", `${U}/plumbing-services/repiping-installation/`], ["Kitchen & Bath", `${U}/service-type/kitchen-bathroom/`],
    ],
  },
  {
    key: "drains", title: "Drains & Sewer", img: site.img.drains, href: `${U}/drain-services/drain-cleaning-service/`,
    alt: "billyGO technician clearing a clogged drain",
    text: "A slow drain is annoying; a backed-up sewer line is an emergency. Drain cleaning, rooter service, hydro jetting, and camera inspections that find the problem before anyone digs.",
    links: [
      ["Drain Cleaning", `${U}/drain-services/drain-cleaning-service/`], ["Rooter Services", `${U}/drain-services/rooter-services/`],
      ["Hydro Jetting", `${U}/drain-services/hydro-jetting-service/`], ["Camera Inspection", `${U}/drain-services/sewer-camera-inspection-service/`],
      ["Sewer Lines", `${U}/service-type/sewer/`],
    ],
  },
];

export const reviews = [
  { name: "Steve Cates", date: "Oct 16, 2026", text: "Gio and Juan were excellent and did an outstanding job installing a whole new HVAC system. Gio walked me through everything at the end and made sure to answer all my questions. Cleanup was great." },
  { name: "Carole Wentz", date: "Oct 18, 2026", text: "Jordan is so professional, knowledgeable and thorough. It is so rare to find a professional who cares about doing the right thing and delivering great customer service." },
  { name: "Britt", date: "Oct 20, 2026", text: "I always have the best experience with my technicians at BillyGo! Even on a maintenance type appointment I receive thorough feedback and well knowledged techs." },
  { name: "Latrice Mcbroom", date: "Oct 16, 2026", text: "Mark completed the maintenance on my AC and heater and did a great job. He was professional, thorough, and took the time to explain the new products and services available." },
  { name: "Linnaea Vesny", date: "Oct 16, 2026", text: "Robert was very knowledgeable, took his time explaining everything, listened and answered my concerns/questions. Billy Go definitely sent the right technician." },
  { name: "jack Daih", date: "Oct 17, 2026", text: "Great experience from start to finish! The crew was friendly, professional, and knowledgeable. Highly recommend their services to anyone needing reliable plumbing repairs!" },
];

export const compare: [string, string][] = [
  ["$0 trip fee", "$99 is common"],
  ["Honest options, no pressure", "Paid to upsell"],
  ["Repair & rejuvenation to extend equipment life", "Push to replace"],
  ["Texas family-owned, decisions made local", "Out-of-state private equity"],
  ["Membership: 15% off all services and installs", "Limited 5% / upsold"],
];

export const membership: [string, string][] = [
  ["Priority Service & Scheduling", "Skip the line when you need us the most"],
  ["15% OFF Any Repair or Install", "Big savings on every job"],
  ["AC Rejuvenation", "Extend the life of your AC 3-5 years, guaranteed"],
  ["Never Pay A Dispatch Fee", "Always, even on weekends"],
  ["Holidays & After Hours Discounts", "Because emergencies don't wait"],
];

export const faqs: [string, string][] = [
  ["How fast can you come out?", "In most cases, the same day. Every appointment comes with a guaranteed one-hour arrival window — if we're late, we pay you $1 for every minute, up to $60."],
  ["What does it cost to send a technician?", "Nothing, Monday through Saturday, 7am to 7pm. We offer free on-site visits along with upfront pricing, free estimates and no-obligation consultations."],
  ["Do you charge by the hour?", "No. We use flat-rate pricing, charging by the job, so billing is transparent and predictable."],
  ["Are your technicians licensed and insured?", "Yes. billyGO is a fully licensed and insured, Texas family-owned company (TX Plumbing M-38424, TX HVAC TACLB41879E). Every technician is background-checked."],
  ["Do you offer financing?", "Yes — 0% financing for 6, 12, 24, 36, 48 or 60 months, 18 months same as cash, and 120 months with no payments for 90 days."],
  ["Do you offer 24/7 emergency service?", "Yes. Standard hours are Mon–Sat, 7am–7pm, and we offer 24/7 emergency HVAC and plumbing service every day of the year."],
];

export const locations = [
  { city: "Grapevine", addr: "923 Minters Chapel Rd, Grapevine, TX 76051", phone: "(817) 934-1619", href: `${U}/locations/grapevine-tx/` },
  { city: "Flower Mound", addr: "3861 Long Prairie Rd, Suite 202, Flower Mound, TX 75028", phone: "(817) 221-0914", href: `${U}/locations/flower-mound-tx/` },
  { city: "Dallas", addr: "17430 Campbell Rd, Suite 207, Dallas, TX 75252", phone: "(214) 267-9944", href: `${U}/locations/dallas-tx/` },
  { city: "Keller", addr: "200 N Rufe Snow Dr, Suite 124, Keller, TX 76248", phone: "(817) 318-7054", href: "" },
  { city: "Colleyville", addr: "5005 Colleyville Blvd, Suite 202, Colleyville, TX 76034", phone: "(817) 345-6787", href: "" },
];

const areaNames = ["Addison","Argyle","Arlington","Bedford","Carrollton","Colleyville","Coppell","Dallas","Euless","Farmers Branch","Flower Mound","Fort Worth","Frisco","Grapevine","Highland Park","Highland Village","Hurst","Irving","Keller","Lantana","Lewisville","Little Elm","North Richland Hills","Plano","Richardson","Richland Hills","Roanoke","Southlake","The Colony","Trophy Club","Watauga","Westlake"];
export const areas = areaNames.map((n) => ({ name: n, href: `${U}/service-area/${n.toLowerCase().replace(/ /g, "-")}-tx/` }));
