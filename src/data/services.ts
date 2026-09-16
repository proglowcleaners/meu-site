import regular from "@/assets/service-regular.jpg";
import deep from "@/assets/service-deep.jpg";
import organize from "@/assets/service-organize.jpg";
import residential from "@/assets/service-residential.jpg";
import move from "@/assets/service-move.jpg";
import seasonal from "@/assets/service-seasonal.jpg";

export const business = {
  name: "Pro Glow Cleaners",
  shortName: "Pro Glow",
  owner: "Andresa Rosa",
  phone: "(407) 269-9575",
  phoneHref: "tel:+14072699575",
  phoneEs: "(407) 406-9038",
  phoneEsHref: "tel:+14074069038",
  email: "cleanersproglow@gmail.com",
  area: "the Tampa Bay area, FL",
  hours: "Monday to Friday · 8:00 AM – 5:00 PM",
};

export const cities = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Brandon",
  "Riverview",
  "Wesley Chapel",
  "Carrollwood",
  "Lutz",
  "Land O' Lakes",
  "Dunedin",
  "Tarpon Springs",
  "Largo",
  "Pinellas",
];

export const services = [
  {
    image: regular,
    title: "Standard Cleaning",
    description: "The regular clean that keeps a home in order — kitchen, bathrooms, floors, dusting and surfaces.",
  },
  {
    image: deep,
    title: "Deep Cleaning",
    description: "A room-by-room reset that reaches baseboards, inside appliances and everything skipped day to day.",
  },
  {
    image: organize,
    title: "Recurring Cleaning",
    description: "Weekly, biweekly or monthly visits on a schedule that fits your household.",
  },
  {
    image: residential,
    title: "Airbnb / Turnover",
    description: "Fast turnovers between guests, with linens, restock and a fresh look for the next check-in.",
  },
  {
    image: move,
    title: "Move In / Move Out",
    description: "An empty-home clean top to bottom, inside cabinets and closets, ready for the handover day.",
  },
  {
    image: seasonal,
    title: "Post-Construction Cleaning",
    description: "Fine dust and residue cleaned after building or remodeling so the home is ready to live in. Debris removal is not included.",
  },
];
