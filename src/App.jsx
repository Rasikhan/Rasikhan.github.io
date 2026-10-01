import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Binary,
  BrainCircuit,
  Cloud,
  Infinity as InfinityIcon,
  CalendarRange,
  GitPullRequest,
  Layers,
  Map as MapIcon,
  MapPin,
  Mic,
  MonitorSmartphone,
  Network,
  Plug,
  Repeat,
  ChevronLeft,
  ChevronRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles
} from "lucide-react";

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons";
const logo = name => `${DEVICON}/${name}/${name}-original.svg`;
const brand = name => `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${name}.svg`;

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      { name: "Angular", logo: logo("angular") },
      { name: "RxJS", logo: logo("rxjs") },
      { name: "TypeScript", logo: logo("typescript") },
      { name: "JavaScript", logo: logo("javascript") },
      { name: "React.js", logo: logo("react") },
      { name: "Ember.js", logo: logo("ember"), invert: true },
      { name: "HTML5", logo: logo("html5") },
      { name: "CSS3", logo: logo("css3") },
      { name: "Leaflet", icon: MapIcon },
      { name: "Responsive Design", icon: MonitorSmartphone },
      { name: "Component Architecture", icon: Layers }
    ]
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Java", logo: logo("java") },
      { name: "Spring Boot", logo: logo("spring") },
      { name: "Hibernate", logo: logo("hibernate"), invert: true },
      { name: "Spring Data JPA", icon: Database },
      { name: "Node.js", logo: logo("nodejs") },
      { name: "Express.js", logo: logo("express"), invert: true },
      { name: "REST API Design", icon: Plug },
      { name: "Microservices", icon: Network }
    ]
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "PostgreSQL", logo: logo("postgresql") },
      { name: "MongoDB", logo: logo("mongodb") }
    ]
  },
  {
    icon: Bot,
    title: "Integrations & AI",
    items: [
      { name: "Agentic AI APIs", icon: Bot },
      { name: "Voice AI Integration", icon: Mic },
      { name: "TomTom Maps APIs", icon: MapPin }
    ]
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    items: [
      { name: "Claude", logo: brand("claude"), invert: true },
      { name: "ChatGPT", logo: brand("openai"), invert: true },
      { name: "GitHub Copilot", logo: brand("githubcopilot"), invert: true },
      { name: "Gemini", logo: brand("googlegemini"), invert: true }
    ]
  },
  {
    icon: BriefcaseBusiness,
    title: "Tools & Process",
    items: [
      { name: "Git", logo: logo("git") },
      { name: "Docker", logo: logo("docker") },
      { name: "Agile / Scrum", icon: Repeat },
      { name: "Sprint Planning", icon: CalendarRange },
      { name: "Code Review", icon: GitPullRequest }
    ]
  }
];

const allSkills = skillGroups.flatMap(g => g.items);

const learning = [
  {
    icon: Binary,
    title: "Data Structures & Algorithms",
    detail: "Problem solving, complexity analysis and core patterns like arrays, trees, graphs and dynamic programming."
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    detail: "Cloud fundamentals and deploying, scaling and running applications on AWS services."
  },
  {
    icon: BrainCircuit,
    title: "Generative AI",
    detail: "LLMs, prompt design, RAG and building AI-powered features into real applications."
  }
];

const projects = [
  {
    title: "Robogebra Suite",
    subtitle: "AI-Powered Mathematics Learning Platform",
    client: "Internal Product · Provility",
    description:
      "End-to-end delivery of a three-application suite: the core Robogebra platform plus the QGen and Point2Space subapplications, with AI tutoring, Voice AI and step-by-step solutions.",
    highlights: [
      "Angular core platform with RxJS state; QGen & Point2Space built in React",
      "Interactive graphing and visualisation components for learning screens",
      "Java services integrated with Python microservices for Voice AI and LaTeX correction",
      "Agentic AI APIs powering automated tutoring workflows"
    ],
    tags: ["Angular", "React", "Java", "Spring Boot", "Hibernate", "Agentic AI"]
  },
  {
    title: "MobiRouter",
    subtitle: "Route Schedule and Dispatch System",
    client: "DDS Wireless · Finland",
    description:
      "Dispatcher-facing route planning and vehicle assignment, optimised by a Java constraint-solving engine that replaced a legacy C++ solver.",
    highlights: [
      "Routes, stops and vehicles on interactive Leaflet maps with TomTom geo data",
      "OptaPlanner APIs optimising for capacity, travel needs, distance and cost",
      "Runtime switch between time-based and cost-based scoring from the UI",
      "Benchmarked against the C++ solver before production rollout"
    ],
    tags: ["Angular", "RxJS", "Java", "OptaPlanner", "Leaflet", "PostgreSQL"]
  },
  {
    title: "Taxi-Cloud",
    subtitle: "Booking and Subscription Platform",
    client: "DDS Wireless · Canada",
    description:
      "Trip booking, passenger profiles and subscription management for paratransit riders, with weekly, monthly and yearly plans.",
    highlights: [
      "Responsive Ember.js SPA with multi-step booking and subscription forms",
      "Pickup and drop-off maps on Leaflet, upgraded to the latest TomTom APIs",
      "Java REST APIs for single and recurring trips over Hibernate/PostgreSQL",
      "Integrated address, configuration and subscription microservices"
    ],
    tags: ["Ember.js", "Java", "Spring Boot", "Hibernate", "TomTom Maps"]
  }
];

const SHORT_NAME = "Rasikhan";
const FULL_NAME = "Abdul Rasikhan M";
const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Backend Developer",
  "Node.js Developer",
  "Web Developer",
  "Frontend Developer",
  "Angular Developer",
  "React Developer",
  "Spring Boot Developer",
  "AI-Powered Developer"
];

const developerCode = `const developer = {
  name: "${FULL_NAME}",
  role: "Full Stack Developer",
  experience: "5+ years",
  frontend: ["Angular", "React", "TypeScript"],
  backend: ["Java", "Spring Boot", "Node.js"],
  database: ["PostgreSQL", "MongoDB"],
  aiTools: ["Claude", "ChatGPT", "Copilot", "Gemini"],
  openToWork: true,
  mindset: "Build. Improve. Deliver."
};`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Letters({ text, className = "", baseDelay = 0, step = 70 }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="letter"
          style={{ animationDelay: `${baseDelay + i * step}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function Intro({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leave = setTimeout(() => setLeaving(true), 3800);
    const done = setTimeout(onDone, 4600);
    return () => { clearTimeout(leave); clearTimeout(done); };
  }, [onDone]);

  const skip = () => { setLeaving(true); setTimeout(onDone, 500); };

  return (
    <div className={`intro ${leaving ? "leaving" : ""}`} onClick={skip}>
      <div className="intro-inner">
        <div className="intro-name" aria-label="Abdul Rasikhan">
          <span className="ini" style={{ animationDelay: "150ms" }}>A</span>
          <span className="expand"><span>bdul&nbsp;</span></span>
          <span className="ini" style={{ animationDelay: "300ms" }}>R</span>
          <span className="expand"><span>asikhan</span></span>
          <span className="shrink">
            <span><span className="ini" style={{ animationDelay: "450ms" }}>K</span></span>
          </span>
        </div>
        <span className="intro-line" />
        <span className="intro-sub">Full Stack Developer</span>
      </div>
    </div>
  );
}

function RoleRotator({ active }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return;
    const word = roles[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [active, text, deleting, index]);

  return (
    <h2 className="role">
      And I’m {/^[aeiou]/i.test(roles[index]) ? "an" : "a"} <span className="role-word">{text}<span className="caret" /></span>
    </h2>
  );
}

function TypedCode() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
    }, { threshold: 0.4 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active || count >= developerCode.length) return;
    const t = setTimeout(() => setCount(c => c + 2), 18);
    return () => clearTimeout(t);
  }, [active, count]);

  return (
    <pre className="typed" ref={ref}>
      <span className="typed-ghost" aria-hidden="true">{developerCode}</span>
      <span className="typed-live">
        {developerCode.slice(0, count)}
        <span className="caret" />
      </span>
    </pre>
  );
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll(".reveal") ?? [];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Photo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="photo-wrap">
      <div className="photo-glow" />
      <div className="photo-ring">
        <div className="photo">
          {failed
            ? <span className="photo-initials">AR</span>
            : <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt={FULL_NAME} onError={() => setFailed(true)} />}
        </div>
      </div>
      <div className="name-badge">
        <span className="status-dot" />
        <div>
          <p className="badge-name">{FULL_NAME}</p>
          <p className="badge-role">Full Stack Developer · 5+ years</p>
        </div>
      </div>
    </div>
  );
}

function SkillIcon({ item, size = 28 }) {
  const [failed, setFailed] = useState(false);
  if (item.logo && !failed) {
    return (
      <img
        src={item.logo}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={item.invert ? "invert" : ""}
        onError={() => setFailed(true)}
      />
    );
  }
  const Icon = item.icon ?? Code2;
  return <Icon size={size - 4} />;
}

function Marquee({ items, reverse }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={i}>
            <SkillIcon item={item} size={22} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillExplorer() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <div className="skill-explorer">
      <div className="skill-tabs" role="tablist">
        {skillGroups.map(({ icon: Icon, title, items }, index) => (
          <button
            key={title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`skill-tab ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <Icon size={18} />
            <span>{title}</span>
            <em>{items.length}</em>
          </button>
        ))}
      </div>

      <div className="skill-grid" role="tabpanel" key={group.title}>
        {group.items.map((item, i) => (
          <div className="skill-tile" key={item.name} style={{ animationDelay: `${i * 60}ms` }}>
            <span className="tile-icon"><SkillIcon item={item} /></span>
            <span className="tile-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const count = projects.length;

  const go = step => setActive(a => (a + step + count) % count);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = setTimeout(() => go(1), 6000);
    return () => clearTimeout(t);
  }, [active, paused]);

  const offsetOf = index => {
    let offset = index - active;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={e => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      onPointerDown={e => { startX.current = e.clientX; }}
      onPointerUp={e => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        startX.current = null;
      }}
    >
      <div className="carousel-stage">
        {projects.map((project, index) => {
          const offset = offsetOf(index);
          const isActive = offset === 0;
          return (
            <article
              key={project.title}
              className={`project-card ${isActive ? "active" : ""}`}
              style={{ "--offset": offset, "--abs": Math.abs(offset) }}
              aria-hidden={!isActive}
              onClick={() => !isActive && setActive(index)}
            >
              <div className="project-main">
                <p className="project-client">{project.client}</p>
                <h4>{project.title}</h4>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <ul className="project-highlights">
                {project.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={() => go(-1)} aria-label="Previous project">
          <ChevronLeft size={20} />
        </button>
        <div className="carousel-dots">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.title}
              className={index === active ? "dot active" : "dot"}
              onClick={() => setActive(index)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
        <button type="button" className="carousel-btn" onClick={() => go(1)} aria-label="Next project">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [introDone, setIntroDone] = useState(prefersReducedMotion);
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className={introDone ? "ready" : "loading"}>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">AR.</a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy enter">
            <span className="eyebrow"><span className="status-dot" /> Open to new opportunities · Chennai, India</span>
            <p className="hello">Hello, It’s Me</p>
            <h1>{introDone && <Letters text={SHORT_NAME} className="hero-name" baseDelay={100} step={60} />}</h1>
            <RoleRotator active={introDone} />
            <p className="hero-text">
              Full Stack Developer with <strong>5+ years of experience</strong> shipping
              production web apps with <strong>Angular &amp; React</strong> front ends
              and <strong>Java &amp; Spring Boot</strong> back ends, delivered end to end.
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
              <a href="https://github.com/Rasikhan" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={22}/>
              </a>
              <a href="https://www.linkedin.com/in/abdul-rasikhan-016289194" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={22}/>
              </a>
            </div>
          </div>

          <div className="hero-card">
            <Photo />
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container">
            <div className="section-heading reveal">
              <p>About me</p>
              <h3>Building products end-to-end</h3>
            </div>

            <div className="about-grid reveal">
              <div>
                <p>
                  I’m a Full Stack Developer at <strong>Provility Software Solutions</strong> in
                  Chennai, with <strong>5+ years</strong> of experience building production
                  single-page applications and the services behind them, for EdTech
                  products and for transportation clients in <strong>Finland and Canada</strong>.
                </p>
                <p>
                  I specialise in <strong>Angular</strong> front ends (component architecture,
                  RxJS reactive state and TypeScript), backed by <strong>Java, Spring Boot</strong> REST
                  APIs, Hibernate/JPA and distributed microservices, with production
                  experience in React and Ember.js as well.
                </p>
                <p>
                  I own features end to end in Agile/Scrum teams: from UI components and
                  client-side state to service design, third-party and AI integrations, and
                  PostgreSQL data modelling. Every day I use AI tools like Claude, ChatGPT,
                  GitHub Copilot and Gemini to deliver faster without cutting corners.
                </p>
                <div className="terminal">
                  <div className="terminal-top"><span></span><span></span><span></span><em>developer.js</em></div>
                  <TypedCode />
                </div>
              </div>

              <div className="about-side">
                <div className="stat-grid">
                  <div className="stat"><strong>5+</strong><span>Years Experience</span></div>
                  <div className="stat"><strong>3</strong><span>Products Shipped</span></div>
                  <div className="stat"><strong>2</strong><span>International Clients</span></div>
                  <div className="stat"><strong>End-to-End</strong><span>Feature Ownership</span></div>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <span className="timeline-icon"><BriefcaseBusiness size={18} /></span>
                    <div>
                      <p className="timeline-date">Jul 2021 – Present</p>
                      <h5>Software Developer</h5>
                      <p>Provility Software Solutions · Chennai, India</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-icon"><GraduationCap size={18} /></span>
                    <div>
                      <p className="timeline-date">2015 – 2019</p>
                      <h5>B.E. Mechanical Engineering</h5>
                      <p>National College of Engineering, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p>Technical skills</p>
              <h3>Technologies I work with</h3>
            </div>
          </div>
        <div className="marquees reveal">
          <Marquee items={allSkills.slice(0, Math.ceil(allSkills.length / 2))} />
          <Marquee items={allSkills.slice(Math.ceil(allSkills.length / 2))} reverse />
        </div>
        <div className="container reveal">
          <SkillExplorer />
        </div>

        <div className="container">
          <div className="learning reveal">
            <div className="learning-head">
              <span className="learning-badge"><InfinityIcon size={18} /> Always learning</span>
              <h4>Currently levelling up</h4>
              <p>Learning never stops. Here’s what I’m actively working on right now.</p>
            </div>
            <div className="learning-grid">
              {learning.map(({ icon: Icon, title, detail }) => (
                <div className="learning-card" key={title}>
                  <div className="learning-top">
                    <span className="learning-icon"><Icon size={24} /></span>
                    <span className="learning-status"><span className="status-dot" /> In progress</span>
                  </div>
                  <h5>{title}</h5>
                  <p>{detail}</p>
                  <div className="learning-bar"><span /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

        <section id="projects" className="section alt">
          <div className="container">
            <div className="section-heading reveal">
              <p>Featured work</p>
              <h3>Projects & engineering highlights</h3>
            </div>

            <div className="reveal">
              <ProjectCarousel />
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-card reveal">
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
          <span>© 2026 {FULL_NAME}</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
