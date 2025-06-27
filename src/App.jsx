import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';


function App() {
  return (
    <Router basename="/tiffany-website">
      <div className="min-h-screen bg-white text-gray-900 font-mono ">
        <h1 className="text-xl font-bold text-center bg-gray-100 pt-4 pb-4">Tianhui (Tiffany) Han</h1>
        {/* <nav className="bg-gray-200 p-4 shadow-md flex justify-center items-center ">
          <div className="space-x-32 items-center text-center font-mono ">
            <Link to="/" className="hover:underline hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:underline hover:text-blue-600">About</Link>
            <Link to="/projects" className="hover:underline hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="hover:underline hover:text-blue-600">Contact</Link>
            <a href="/Tiffany_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
          </div>
        </nav> */}

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

function Home() {
  const scrollToProjects = () => {
    document.getElementById('project_section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToPublications = () => {
    document.getElementById('publications_section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="flex items-center gap-8">
        {/* Left side - Image */}
        <div className="flex-shrink-0">
          <img
            // src="/pictures/profile.png"
            src="/tiffany-website/pictures/profile.png/>"
            alt="Tiffany Han"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          <p className="mb-6">Hi! I'm a recent Computer Science graduate from Carnegie Mellon University.
            I'm continuing at CMU to pursue a Master's in Robotics. Currently, I'm working with Professor Zeynep Temel
            on physics simulation and learning of soft, foldable robots.
          </p>
          <div className="space-x-4 mb-6">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={scrollToProjects}>View Projects</button>
            <button className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500" onClick={scrollToPublications}>View Publications</button>
            <button onClick={() => window.open('/Tiffany_Resume.pdf')} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500">Download Resume</button>
          </div>

          {/* Social Media Links Row */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tianhui467/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hea467"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Email with hover tooltip */}
            <div className="relative group">
              <a
                href="mailto:tianhui2@andrew.cmu.edu"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                tianhui2@andrew.cmu.edu
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your components */}
      <div className="mt-12">
        <TechExp />
      </div>
      <div className="mt-12">
        <Projects />
      </div>
      <div className="mt-12">
        <Publications />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
        I'm starting my Master's in Robotics at CMU. My interests lie at the intersection of simulation, AI, and robotics.
        I also enjoy teaching and creative design work. This site is a growing showcase of the things I’m passionate about.
      </p>
    </div>
  );
}

function TechExp() {
  const TechExps = [
    {
      title: 'Robotics Undergraduate Research Fellowship',
      info: "Carnegie Mellon University (2024 - 2025)",
      description: `Created soft, foldable mechanisms in physics simulator MuJoCo and trained RL agents to perform goal-conditioned tasks. 
      Built user-friendly Graphical Interface to facilitate user input conversion to 3D physics 
      simulations incorporating Graham scan and Delaunay triangulation.`,
      tech: ['MuJoCo', 'PyTorch', 'RL', 'PPO', 'SAC']
    },
    {
      title: 'Software Engineering Intern',
      info: "Google China Division (2025)",
      description: `Delivered production grade code by executing full-stack web application development which automates data
                    collection via a web scraping pipeline and extracted data points into custom SQL database.`,
      tech: ['Python', 'SQL', 'React', 'Flask']
    },
    {
      title: 'Teaching Assistant',
      info: "Carnegie Mellon University (2022-2023)",
      description: `Coordinated with professor and led two weekly recitations of 20+ students in a 200+ students course, assisted in problem
                    writing, and graded coursework.`,
      tech: ['C', 'Communication', 'Teaching']
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Technical Experiences</h2>
      <div className="space-y-6">
        {TechExps.map((exp, idx) => (
          <div key={idx} className="border p-4 rounded shadow-sm group">
            <h3 className="text-xl font-bold transition-colors duration-200">{exp.title}</h3>
            <p className="text-sm text-gray-600">{exp.info}</p>
            <p className="mt-2 mb-2">{exp.description}</p>
            <p className="text-sm text-gray-600">Tech: {exp.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const sampleProjects = [
    {
      title: 'Mobile Robot (Mobot) Race',
      info: "March - April 2025",
      link: "https://www.cs.cmu.edu/mobot/index.html",
      description: `Formulated and built an autonomous mobile robot which plans and execute
       given course map in real-time. Second place at CMU's annual mobile robot competition.`,
      tech: ['Robotics', 'Rasberry Pi', 'CV', 'Controls']
    },
    {
      title: 'Raft Consensus Algorithm - Distributed Systems Project',
      info: "October 2024",
      description: `Accomplished fault-tolerant distributed consensus in Go, ensuring log consistency across replicas. Performed leader
          election, log replication, and commit mechanisms, handling network failures with RPCs and concurrency primitives.`,
      tech: ['Go', 'Distributed Systems']
    },
    {
      title: 'Multi-Objective Path Planning',
      info: "December 2023 - May 2024",
      link: "https://github.com/hea467/Algo-Tour-Planning",
      description: `Constructed a greedy BFS-based path planning algorithm to optimize robot navigation in a 200+ node environment at
      CMU's Gates Center. Performed genetic algorithms (crossover & mutation) for performance comparison, honing
      efficiency and adaptability.`,
      tech: ['Python', 'AI', 'Genetic Algorithms']
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4" id="project_section">Projects</h2>
      <div className="space-y-6">
        {sampleProjects.map((project, idx) => (
          <div key={idx} className="border p-4 rounded shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer group">
            <h3 className="text-xl font-bold group-hover:text-blue-800 transition-colors duration-200"
              onClick={() => window.open(project.link, '_blank')}>{project.title}</h3>
            <p className="text-sm text-gray-600">{project.info}</p>
            <p className="mt-2 mb-2">{project.description}</p>
            <p className="text-sm text-gray-600">Tech: {project.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Publications() {
  const samplePublications = [
    {
      title: 'Realizing convex codes with axis-parallel boxes',
      description: 'Involve, a Journal of Mathematics',
      link: "https://msp.org/involve/2024/17-4/p05.xhtml"
    },
    {
      title: 'Dynamic Modeling and Interactive Design of Origami Mechanisms',
      description: 'ICRA Multi-Stable and Origami-based Soft Robots Workshop',
      link: "/Tianhui_Han_ICRA_Workshop.pdf"
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4" id="publications_section">Publications</h2>
      <div className="space-y-6">
        {samplePublications.map((pub, idx) => (
          <div
            key={idx}
            className="border p-4 rounded shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer group"
            onClick={() => window.open(pub.link, '_blank')}>
            <h3 className="text-xl font-bold group-hover:text-blue-800 transition-colors duration-200">{pub.title}</h3>
            <p className="text-sm text-gray-600">{pub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thanks for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="block w-full p-2 border rounded" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="block w-full p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="block w-full p-2 border rounded" rows="4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
}

export default App;
