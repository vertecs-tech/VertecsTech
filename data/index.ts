import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "Working with up to date technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Delivering quick and cost effective solutions ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a realtime image generation app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SleepVoyage",
    des: "A platform designed to assist travelers in finding accommodations that prioritize sleep quality, featuring curated listings of sleep-friendly hotels with amenities such as quiet rooms, blackout curtains, and comfortable bedding.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://saphi-sleep-voyage.vercel.app/",
  },
  {
    id: 2,
    title: "POPUP Stores",
    des: "A seasonal e-commerce platform featuring a product customizer for print-on-demand items, enabling users to personalize products and fostering a unique shopping experience.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stripe.svg"],
    link: "https://christmas.mycart.me/",
  },
  {
    id: 3,
    title: "VenueX AI",
    des: "A platform focusing on authentication mechanisms and enhancing UI/UX design, facilitating efficient lead generation and management for businesses.",
    img: "/p3.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ai.svg"],
    link: "https://aiagent-phase2.vercel.app/",
  },
  {
    id: 4,
    title: "EventHub",
    des: "A platform designed to assist travelers in finding accommodations that prioritize sleep quality, featuring curated listings of sleep-friendly hotels with amenities such as quiet rooms, blackout curtains, and comfortable bedding.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://event-ticket-mgmt.vercel.app/",
  },
  {
    id: 5,
    title: "Staff Management",
    des: "A comprehensive platform for managing staff schedules, payroll, and performance reviews, designed to streamline HR processes.",
    img: "/p5.jpeg",
    iconLists: ["/react.svg", "/nodejs.svg", "/mongodb.svg"],
    link: "",
  },
  {
    id: 6,
    title: "Car Rental",
    des: "An online car rental service offering a wide range of vehicles with real-time availability and booking features.",
    img: "/p6.jpeg",
    iconLists: ["/vue.svg", "/firebase.svg", "/tailwind.svg"],
    link: "",
  },
  {
    id: 7,
    title: "Business Analytics",
    des: "A powerful analytics platform providing insights and visualizations to help businesses make data-driven decisions.",
    img: "/p7.jpeg",
    iconLists: ["/angular.svg", "/mongodb.svg", "/nodejs.svg"],
    link: "",
  },
  {
    id: 8,
    title: "Eyesite",
    des: "A vision care platform offering online eye exams, prescription renewals, and a wide selection of eyewear.",
    img: "/p8.png",
    iconLists: ["/react.svg", "/redux.svg", "/nodejs.svg"],
    link: "",
  },
  {
    id: 11,
    title: "Roger Pad",
    des: "A blockchain-based launchpad platform facilitating secure token launches and IDOs with smart contract integration.",
    img: "/p9.jpeg",
    iconLists: ["/ethereum.svg", "/solidity.svg", "/react.svg"],
    link: "",
  },
  {
    id: 12,
    title: "Pump Fun",
    des: "Decentralized token generation platform leveraging blockchain technology meme coins generation.",
    img: "/p10.jpeg",
    iconLists: ["/ethereum.svg", "/solidity.svg", "/react.svg", "/nodejs.svg"],
    link: "",
  }
];

export const testimonials = [
  {
    quote:
      "The website development team at the agency transformed our online presence. Their professionalism and expertise are unmatched.",
    name: "Emily Watson",
    title: "CEO, Tech Innovations",
  },
  {
    quote:
      "Their UI/UX design services significantly improved our user engagement. We're thrilled with the results.",
    name: "Michael Bradely",
    title: "Marketing Manager, Creative Corp",
  },
  {
    quote:
      "Thanks to their QA testing, our product quality has never been better. Highly recommend their services.",
    name: "Saphie",
    title: "CEO & Founder, SleepVoyage",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc: "Front-end and back-end solutions for scalable and secure web apps.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    desc: "Robust e-commerce platforms for seamless transactions and engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Designing",
    desc: "Intuitive UI/UX designs that enhance user experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Website Deployment & Maintenance",
    desc: "Proactive website deployment and maintenance for optimal performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Blockchain Development",
    desc: "Blockchain solutions for secure and transparent transactions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 6,
  //   title: "API Integration",
  //   desc: "API integration for seamless data exchange and functionality.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp6.svg",
  // }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
