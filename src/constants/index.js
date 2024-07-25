import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and 
scalable web applications. I am an Electrical & Electronics Engineering student at Visvesvaraya National 
Institute of Technology. I have honed my skills in front-end technologies like React and Next.js, as 
well as back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I have 
delved into data analysis and Machine Learning during my second year. My goal is to leverage my expertise 
to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am currently a third-year undergraduate student at Visvesvaraya National Institute 
of Technology, Nagpur, pursuing a B.Tech degree in Electrical and Electronics 
Engineering. I am passionate about full-stack development and have expertise 
in technologies such as React.js, MongoDB, Next.js, PostgreSQL, and Python. Additionally, 
I gained valuable experience in data analysis during my second year, including web scraping, 
creating analytics plots, and interpreting statistical data.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Feb 2024",
    role: "Teaching Assistant Intern",
    company: "Coding Ninjas",
    description: `Conducted doubt-clearing sessions on Data Structures & Algorithms for students.  Assisted students in learning Data Structures & Algorithms by recommending the best resources and guiding them 
        throughout their journey.`,
    technologies: ["DSA", "C++"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://kennkanekii.github.io/Electronic-Website-frontend/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link:"https://auth-next-app-eight.vercel.app/login",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link:"https://kennkanekii.github.io/Electronic-Website-frontend/",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link:"https://kennkanekii.github.io/Electronic-Website-frontend/",
  },
];

export const CONTACT = {
  address: "Hostel Block-2, VNIT, Nagpur, Maharashtra, India-440010",
  email: "yash.rpsp@gmail.com",
};
