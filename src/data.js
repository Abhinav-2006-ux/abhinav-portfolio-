import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const personalDetails = {
  name: "Abhinav",
  title: "B.Tech CSE Student",
  tagline: "Motivated technology student with a strong interest in programming and web development.",
  location: "Delhi, India",
  email: "abhinav19abhinav@gmail.com",
  about: `I am a second-year student at IILM Gurugram pursuing B.Tech in CSE. I am a motivated and enthusiastic technology student with a strong interest in programming and emerging technologies. I have a foundational understanding of programming languages such as C and Java, along with an interest in web development, GitHub, and computer technologies. 
  
I am a quick learner, adaptable, and eager to develop my technical and problem-solving skills through practical experience. I am looking for opportunities where I can contribute to a team, gain industry experience, and continuously grow both professionally and personally.`,
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com", icon: FaGithub },
    { name: "WhatsApp", url: "https://wa.me/8307611258", icon: FaWhatsapp },
    { name: "Instagram", url: "https://instagram.com/http__abhinavvv", icon: FaInstagram },
  ],
  stats: [
    { label: "Years Experience", value: 5 },
    { label: "Projects Completed", value: 30 },
    { label: "Happy Clients", value: 15 },
  ]
};

export const skillsData = [
  { category: "Frontend", name: "HTML", level: 90 },
  { category: "Programming", name: "C", level: 85 },
  { category: "Programming", name: "Java", level: 80 },
  { category: "Programming", name: "Python", level: 75 },
];

export const experienceData = [
  {
    type: "experience", // 'experience' or 'education'
    title: "Senior Frontend Developer",
    organization: "Tech Innovators Inc.",
    date: "2021 - Present",
    bullets: [
      "Led the development of the core product dashboard using React and Tailwind CSS.",
      "Improved application performance by 30% through code splitting and lazy loading.",
      "Mentored junior developers and conducted code reviews."
    ]
  },
  {
    type: "experience",
    title: "Web Developer",
    organization: "Creative Digital Agency",
    date: "2018 - 2021",
    bullets: [
      "Built responsive websites for diverse clients.",
      "Implemented accessibility best practices achieving WCAG AA compliance.",
      "Integrated RESTful APIs and third-party services."
    ]
  },
  {
    type: "education",
    title: "B.S. in Computer Science",
    organization: "University of Technology",
    date: "2014 - 2018",
    bullets: [
      "Graduated with Honors.",
      "Relevant coursework: Data Structures, Web Development, UI/UX Design."
    ]
  }
];

export const projectsData = [
  {
    title: "E-Commerce Platform",
    problem: "The client needed a fast, scalable storefront to handle high traffic.",
    impact: "Increased sales by 40% in the first quarter after launch.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management SaaS",
    problem: "Teams struggled with scattered workflows and poor communication.",
    impact: "Acquired 10k+ active users within 6 months.",
    techStack: ["React", "Firebase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    demoLink: "#",
    githubLink: "#"
  }
];

export const testimonialsData = [
  {
    quote: "An absolute pleasure to work with. Delivered our project ahead of schedule and exceeded all expectations.",
    name: "Jane Doe",
    title: "CEO at StartupX"
  },
  {
    quote: "Their technical skills and eye for design are unmatched. Highly recommended for any complex web project.",
    name: "John Smith",
    title: "Product Manager at BigCorp"
  }
];
