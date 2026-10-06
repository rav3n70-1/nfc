// Profile configuration — centralized personal data for the NFC card
// Edit this file to customize the card — UI components read from here automatically.

export const profile = {
  name: "Mehedi Hasan Rohan",
  title: "Software Developer",
  organization: "Inovace Technologies",
  tagline: "Engineering scalable software & modern digital experiences.",
  bio: "Software Developer at Inovace Technologies, focused on building performant web applications, intuitive user interfaces, and robust systems.",
  location: "Dhaka, Bangladesh",
  available: true, // green 'Available' pulse indicator
  photo: "/picture.jpeg", // personal photo located in /public/picture.jpeg
  phone: "+880 1749-393453",
  email: "mehedihasanrohan07@gmail.com",
  website: "https://mhrohansportfolio.vercel.app/",
  portfolioUrl: "https://mhrohansportfolio.vercel.app/",
  nfcUrl: "https://rohansnfc5.vercel.app", // final deployment URL encoded in the NFC tag & QR code

  socials: {
    linkedin: "https://linkedin.com/in/mehedihrohan",
    github: "https://github.com/rav3n70-1",
    instagram: "https://instagram.com/__meharo__",
    facebook: "https://facebook.com/rav3n69",
    whatsapp: "+880 1749-393453",
    email: "mehedihasanrohan07@gmail.com",
    phone: "+880 1749-393453",
  },
} as const;

export type Profile = typeof profile;
export type Socials = typeof profile.socials;
