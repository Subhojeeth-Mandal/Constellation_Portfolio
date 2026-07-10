import { faReact, faJava, faNodeJs, faGitAlt } from "@fortawesome/free-brands-svg-icons";

import { faLeaf, faDatabase} from "@fortawesome/free-solid-svg-icons";
import { GraduationCap,  Code, Server } from 'lucide-react'
import quickeats from '../images/quickeats.png'
import shopsphere from '../images/shopsphere.png'
import medflow from '../images/medflow.png'

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
]

export const ROLES = [
  "Java Full Stack Developer",
  "Web Application Architect",
  "React & Spring Boot Enthusiast",
  "System Architect",
  "Problem Solver"
]

export const skills = [
  {
    name: "React",
    icon: faReact,
    color: "text-blue-400",
    bg: "border-blue-400/30",
  },
  {
    name: "Java",
    icon: faJava,
    color: "text-orange-400",
    bg: "border-orange-400/30",
  },
  {
    name: "Spring",
    icon: faLeaf,
    color: "text-green-400",
    bg: "border-green-400/30",
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    color: "text-emerald-400",
    bg: "border-emerald-400/30",
  },
  {
    name: "SQL",
    icon: faDatabase,
    color: "text-cyan-400",
    bg: "border-cyan-400/30",
  },
  {
    name: "Git",
    icon: faGitAlt,
    color: "text-red-400",
    bg: "border-red-400/30",
  },
];

export interface Project {
  id: number
  title: string
  desc: string
  tech: string[]
  color: string
  image?: string
  platforms: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Shopsphere | E-Commerce',
    desc: 'A responsive full-stack e-commerce platform featuring secure authentication, product management, smart search and filtering, shopping cart, and order processing, delivering a seamless and scalable online shopping experience.',
    tech: ["React.js", "React Router DOM", "Bootstrap 5", "React Bootstrap", "Axios", "JSON Server", "Vite"],
    color: 'from-accent-blue to-accent-purple',
    image: shopsphere,
    platforms: ['desktop', 'mobile'],
    github: 'https://github.com/Subhojeeth-Mandal/ShopSphere',
    live: 'https://shopsphereweb.vercel.app/',
  },
  {
    id: 2,
    title: 'QuickEats | Real-Time Ordering',
    desc: 'Built a scalable Online Food Ordering System with user authentication, restaurant and menu management, shopping cart, order processing, responsive UI, and admin functionalities, delivering a seamless and efficient digital food ordering experience',
    tech: ['React', 'React Router', 'Axios', 'JSON Server', 'Vite'],
    color: 'from-accent-blue to-accent-purple',
    image: quickeats,
    platforms: ['desktop'],
    github: 'https://github.com/Subhojeeth-Mandal/Online_Food_Ordering_System/tree/master',
    live: 'https://quickeatsonlinefoodorderingsystem.vercel.app/',
  },
  {
    id: 3,
    title: 'MedFlow max | Healthcare Dashboard',
    desc: 'Built a comprehensive Hospital Management System designed to digitize hospital workflows by integrating patient and doctor management, appointment booking, medical records, secure authentication, and administrative controls into a responsive, scalable, and user-friendly web application.',
    tech: ['React', 'React Router', 'Axios', 'Java', "Spring Boot", 'MySQL'],
    color: 'from-accent-cyan to-accent-blue',
    image: medflow,
    platforms: ['desktop'],
    github: 'https://github.com/Subhojeeth-Mandal/Hospital_Management_System',
    // githubBackend: 'https://github.com/Subhojeeth-Mandal/Hospital_Management_System_backend',
    live: 'https://medflowmax.vercel.app/',
  },
  {
    id: 4,
    title: 'Astro Chat',
    desc: 'End-to-end encrypted messaging application.',
    tech: ['Spring Boot', 'WebSocket', 'React', 'Redis'],
    color: 'from-accent-pink to-accent-cyan',
    platforms: ['desktop', 'mobile'],
    github: '',
    live: '',
  },
]

export const timelineItems = [
  {
    year: '2019',
    title: 'Started Software Journey through BCA',
    description: 'Began my journey into  software development, web/app design, and IT tools',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Completed MCA in CS',
    description: 'Received my postgraduate degree in Computer Science and Information Technology.',
    icon: GraduationCap,
  },
  {
    year: '2025',
    title: 'Java Full Stack Developer',
    description: 'Promoted to Full Stack Developer, Through course completion and Projects in Jspiders.',
    icon: Code,
  },
  {
    year: '2026',
    title: 'Fresher || Ready to Contribute',
    description: 'Ready to contribute to innovative projects, leveraging my skills in Java, React, and system design.',
    icon: Server,
  },
]