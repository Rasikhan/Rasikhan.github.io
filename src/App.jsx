import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles
} from "lucide-react";

const skills = [
  "JavaScript",
  "React.js",
  "Angular",
  "Java",
  "REST APIs",
  "PostgreSQL",
  "Microservices",
  "HTML",
  "CSS",
  "Git",
  "LLM API Integration"
];

const projects = [
  {
    title: "Education Technology Platform",
    description:
      "Built production-ready web features for an education platform, including reusable UI components, backend API integrations, and database-driven functionality.",
    tags: ["Angular", "Java", "PostgreSQL", "REST API"]
  },
  {
    title: "AI Lesson Solution Integration",
    description:
      "Integrated LLM APIs for lesson solutions and handled JSON parsing, MathTeX/LaTeX formatting, and response normalization for reliable rendering.",
    tags: ["JavaScript", "LLM API", "JSON", "LaTeX"]
  },
  {
    title: "API Performance Improvements",
    description:
      "Improved backend API responsiveness using response caching and database indexing for frequently accessed application data.",
    tags: ["Java", "Caching", "SQL", "Performance"]
  }
];

function App() {
  return (
    <div>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">AR.</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16}/> Available for Full Stack opportunities</span>
            <p className="hello">Hello, I’m</p>
            <h1>Abdul Rasikhan M</h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-text">
              I build reliable, scalable web applications from polished front-end
              experiences to robust Java REST APIs and database-backed services.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects <ArrowRight size={18}/>
              </a>
              <a className="btn secondary" href="mailto:rasikhanark@gmail.com">
                <Mail size={18}/> Contact Me
              </a>
            </div>

            <div className="socials">
              <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={22}/>
              </a>
              <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={22}/>
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal">
              <div className="terminal-top"><span></span><span></span><span></span></div>
              <pre>{`const developer = {
  name: "Abdul Rasikhan M",
  role: "Full Stack Developer",
  experience: "5 years",
  frontend: ["Angular", "React"],
  backend: ["Java", "REST APIs"],
  database: "PostgreSQL",
  mindset: "Build. Improve. Deliver."
};`}</pre>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container">
            <div className="section-heading">
              <p>About me</p>
              <h3>Building products end-to-end</h3>
            </div>

            <div className="about-grid">
              <div>
                <p>
                  I’m a Full Stack Developer with around 5 years of experience
                  developing production web applications across education technology
                  and transportation technology domains.
                </p>
                <p>
                  I work across the full development lifecycle—from reusable UI
                  components and client-side state management to backend service
                  design, API integration, database modelling, performance
                  improvements, and AI-powered features.
                </p>
              </div>

              <div className="stat-grid">
                <div className="stat"><strong>5+</strong><span>Years Experience</span></div>
                <div className="stat"><strong>5K+</strong><span>Users Supported</span></div>
                <div className="stat"><strong>20</strong><span>Team Environment</span></div>
                <div className="stat"><strong>End-to-End</strong><span>Feature Delivery</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <p>Technical skills</p>
            <h3>Technologies I work with</h3>
          </div>

          <div className="skill-cards">
            <div className="skill-card">
              <Code2 />
              <h4>Frontend</h4>
              <p>React.js, Angular, JavaScript, HTML and CSS for responsive user experiences.</p>
            </div>
            <div className="skill-card">
              <Server />
              <h4>Backend</h4>
              <p>Java REST APIs, service integrations, caching and microservice-based systems.</p>
            </div>
            <div className="skill-card">
              <Database />
              <h4>Data</h4>
              <p>PostgreSQL data modelling, SQL queries, indexing and backend performance work.</p>
            </div>
            <div className="skill-card">
              <BriefcaseBusiness />
              <h4>Delivery</h4>
              <p>Agile/Scrum collaboration and complete feature ownership from requirement to release.</p>
            </div>
          </div>

          <div className="chips">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="section alt">
          <div className="container">
            <div className="section-heading">
              <p>Featured work</p>
              <h3>Projects & engineering highlights</h3>
            </div>

            <div className="projects">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <span className="project-no">0{index + 1}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-card">
            <p>Let’s work together</p>
            <h3>Looking for a Full Stack Developer?</h3>
            <p className="contact-copy">
              I’m interested in opportunities where I can build scalable products,
              solve practical engineering problems, and grow with a strong development team.
            </p>
            <a className="btn primary" href="mailto:rasikhanark@gmail.com">
              <Mail size={18}/> rasikhanark@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Abdul Rasikhan M</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
