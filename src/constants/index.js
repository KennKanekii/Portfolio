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
    title: "User Authentication App",
    image: project2,
    description:
      " It utilizes Nodemailer for sending emails and generates unique tokens using JSON Web Tokens for secure authentication.",
    technologies: ["HTML", "CSS", "Nextjs", "Mongodb", "Json WebTokens"],
    link:"https://auth-next-app-eight.vercel.app/login",
  },
  {
    title: "Customer Analysis in Mall",
    image: project3,
    description:
      "K-mean Clustering Implementation, conducted an analysis on real-time mall data to enhance targeted marketing, improve customer experience, and boost customer retention.",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Scikit-Learn", "NumPy"],
    link:"https://github.com/KennKanekii/ML-project",
  },
  {
    title: " Doctor Fees Prediction ",
    image: project4,
    description:
      "Conducted analysis on doctor reviews dataset and used KNN, Support vector and random forest machine learning algorithms. Analysis and web scraping using the python and its libraries",
    technologies: ["Python", "Seaborn", "Matplotlib", "NumPy", "Pandas", "Scikit-Learn"],
    link:"https://github.com/KennKanekii/Fee_Prediction",
  },
];

export const CONTACT = {
  address: "Hostel Block-2, VNIT, Nagpur, Maharashtra, India-440010",
  email: "yash.rpsp@gmail.com",
};
