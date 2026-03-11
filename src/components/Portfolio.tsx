import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Brain, Terminal, Award, Users, MapPin, Phone, Cpu, Database, Globe, Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
          >
            SS.
          </motion.span>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const TechAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-64 h-64 border-2 border-dashed border-indigo-500/20 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-48 h-48 border-2 border-dashed border-violet-500/30 rounded-full"
      />
      <div className="relative z-10 grid grid-cols-2 gap-4">
        {[Cpu, Database, Globe, Brain].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.2, color: "#818cf8" }}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-500 shadow-2xl"
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-4 -right-4 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl backdrop-blur-sm"
      >
        <Sparkles className="w-5 h-5 text-indigo-400" />
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm <span className="text-indigo-400">Shashank Singh</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg">
              B.Tech IT Student at VIT. AI/ML Enthusiast and Full-Stack Developer passionate about building intelligent systems and scalable web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:shashankssingh945@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-900/20 hover:bg-indigo-700 transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Shashank_Singh_Resume.pdf"
                download="Shashank_Singh_Resume.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-zinc-800 text-zinc-300 rounded-full font-medium hover:border-indigo-400 hover:text-indigo-400 transition-all"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </motion.a>
            </div>
            <div className="mt-8 flex space-x-6 text-zinc-500">
              <a href="https://github.com/SHAN0945" target="_blank" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/shashank-singh-995a4727b" target="_blank" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <TechAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      title: "Web & Backend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" }
      ]
    },
    {
      title: "AI / ML & Data",
      skills: [
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Gemini API", icon: "https://www.gstatic.com/lamda/images/favicon_v2_16x16.png" },
        { name: "Streamlit", icon: "https://static.streamlit.io/images/brand/streamlit-mark-color.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-10">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col items-center justify-center text-center transition-all group"
                  >
                    <div className="w-10 h-10 mb-3 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`w-8 h-8 object-contain transition-transform group-hover:scale-110 ${skill.name === 'Next.js' ? 'invert' : ''}`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-zinc-400 font-medium text-xs">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const experiences = [
    {
      company: "Sooru.AI",
      role: "Software Development Intern",
      period: "Jun 2025 – Oct 2025",
      points: [
        "Developed 3D visualizations using React and Three.js, achieving a 15% reduction in load times.",
        "Optimized frontend architecture by refactoring 20+ components into a reusable library.",
        "Reduced initial JavaScript payload by 28% through code-splitting and efficient asset bundling."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-zinc-800"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-zinc-950"></div>
              <div className="mb-1 flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{exp.period}</span>
              </div>
              <p className="text-zinc-500 font-medium mb-4 italic">{exp.role}</p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-zinc-400 flex items-start">
                    <span className="mr-2 text-indigo-500">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "NanoScan: AI-Powered PCB Defect Detection",
      tech: "Next.js, FastAPI, PyTorch, XGBoost, TypeScript, MongoDB",
      description: "Architected a hybrid CNN-Ensemble model (EfficientNetB0 + XGBoost) with 99.2% accuracy for automated industrial quality control.",
      links: { github: "#", live: "#" }
    },
    {
      title: "SafeTrail: AI-Powered Travel Safety Platform",
      tech: "Next.js, React, Tailwind CSS, Scikit-learn, Python",
      description: "Built a real-time navigation system using DBSCAN clustering to process historical safety data and identify high-risk hotspots.",
      links: { github: "#" }
    },
    {
      title: "TweepStock: Stock prediction with twitter sentiment analysis",
      tech: "Python, Scikit-learn, Pandas, Tweepy, XGBoost, NumPy",
      description: "Built a machine learning pipeline using XGBoost and NLP (VADER/NLTK) to predict stock trends by correlating Twitter sentiment with historical market data.",
      links: { github: "#" }
    },
    {
      title: "Nutritrack",
      tech: "MongoDB, Express, AngularJS, NodeJS, JavaScript",
      description: "Full stack web application that helps users track their food and water intake, calories, book appointments, and set diet goals.",
      links: { github: "#" }
    },
    {
      title: "Gaussian Blurring Analysis",
      tech: "Python, OpenCV, Multiprocessing modules",
      description: "Demonstrated how parallelization significantly improves computational efficiency and performance for image processing tasks.",
      links: { github: "#" }
    },
    {
      title: "Tailored Cover Letter Generator",
      tech: "Streamlit, Gemini API, PyPDF2",
      description: "Built a tool to generate customized cover letters using advanced AI APIs and PDF parsing.",
      links: { github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-zinc-900 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${project.title}/600/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-500 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.links.github} className="text-zinc-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.links.live && (
                    <a href={project.links.live} className="text-zinc-500 hover:text-indigo-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Leadership = () => {
  const roles = [
    {
      title: "Chairperson",
      org: "IEEE TEMS VIT",
      period: "Dec 2025 – Present",
      points: [
        "Directing a chapter of 100+ members, managing project timelines and budget allocation.",
        "Increased student engagement by 20% through a peer-to-peer mentorship framework.",
        "Facilitated technical requirement gatherings between design and development teams."
      ]
    },
    {
      title: "AI/ML & Design Mentor",
      org: "IEEE TEMS VIT",
      period: "Jan 2025 – Dec 2025",
      points: [
        "Taught weekly workshops on Figma and ML fundamentals to 50+ students.",
        "Resulted in 3 teams placing in the top 10 of campus hackathons.",
        "Performed code reviews and technical audits for 15+ student projects."
      ]
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Leadership & Extra-Curriculars</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-900/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{role.title}</h3>
                    <p className="text-indigo-400 font-medium">{role.org}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mb-6 font-medium">{role.period}</p>
                <ul className="space-y-3">
                  {role.points.map((point, i) => (
                    <li key={i} className="text-zinc-400 flex items-start">
                      <Award className="w-4 h-4 mr-2 text-indigo-500 shrink-0 mt-1" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-950 rounded-3xl border border-zinc-800"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Email</p>
            <p className="text-lg break-all">shashankssingh945@gmail.com</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-950 rounded-3xl border border-zinc-800"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-indigo-400" />
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Phone</p>
            <p className="text-lg">+91 7208773105</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-950 rounded-3xl border border-zinc-800"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-indigo-400" />
            </div>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Location</p>
            <p className="text-lg">VIT Vellore, India</p>
          </motion.div>
        </div>
        <div className="mt-16 flex justify-center space-x-8">
          <a href="https://github.com/SHAN0945" target="_blank" className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-indigo-500 transition-all">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/shashank-singh-995a4727b" target="_blank" className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-indigo-500 transition-all">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-800 text-center text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Shashank Singh. Built with React & Tailwind.</p>
    </footer>
  );
};
