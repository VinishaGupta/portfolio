import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' }
];

const aboutParagraphs = [
  'I am currently pursuing a Master of Computer Applications (MCA) at Ramdeobaba University with a strong foundation in full-stack development and problem solving. I am working as a Frontend Developer Intern at BeRAM - TBI, where I build responsive interfaces using React, Next.js, and TypeScript, integrate backend APIs, and implement secure payment solutions.',
  'I am passionate about designing intuitive user experiences while developing scalable, efficient web applications. With solid knowledge of Data Structures & Algorithms, OOPS, and SQL, I enjoy turning complex problems into clean, practical solutions.'
];

const experienceBullets = [
  'Built a full-stack MERN-based Admin CRM system with secure JWT authentication and role-based access control.',
  'Developed the frontend using Next.js and Tailwind CSS, building responsive, optimized, and production-ready UI components.',
  'Implemented user authentication including signup, login, password hashing (bcrypt), and protected routes using middleware.',
  'Integrated MongoDB with Mongoose for schema design, data validation, and structured collections.',
  'Developed password reset functionality using SMTP (Brave) with secure token generation and expiration handling.',
  'Integrated payment gateway authentication with order tracking and payment status filtering.',
  'Designed and built a responsive Admin Dashboard using React, TypeScript, Tailwind CSS, and React Router.',
  'Applied secure environment configuration using .env for API keys, JWT secrets, SMTP credentials, and payment gateway keys.',
  'Structured backend using modular architecture (routes, models, middleware, controllers) following best practices.'
];

const fallback = {
  greeting: 'Hi, my name is',
  name: 'Vinisha Gupta.',
  tagline: 'Turning complex ideas into elegant solutions.',
  description:
    "I'm a Full-Stack Developer passionate about UI/UX design and problem-solving through Data Structures & Algorithms. I build scalable web applications, integrate backend systems, and create intuitive, user-friendly experiences.",
  ctaLabel: 'Check out my work'
};

export default function App() {
  const [profile, setProfile] = useState(fallback);

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => (res.ok ? res.json() : fallback))
      .then((data) => setProfile(data))
      .catch(() => setProfile(fallback));
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="logo">B</div>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <button className="resume-btn" type="button">
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="hero" id="home">
        <p className="intro">{profile.greeting}</p>
        <h1>{profile.name}</h1>
        <h2 className="tagline">{profile.tagline}</h2>
        <p className="description">{profile.description}</p>
        <button className="cta" type="button">
          {profile.ctaLabel}
        </button>
      </main>

      <section id="about" className="about-section">
        <h3 className="section-title">
          <span>01.</span> About Me
        </h3>
        <div className="about-content">
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h3 className="section-title">
          <span>02.</span> Experience
        </h3>

        <div className="experience-card">
          <h4>Frontend Developer</h4>
          <p className="experience-date">Dec 2025 - Present</p>
          <ul className="experience-list">
            {experienceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="stub-section" />

      <section id="contact" className="contact-section">
        <p className="contact-kicker">04. What's Next?</p>
        <h3 className="contact-title">Get In Touch</h3>
        <p className="contact-description">
          My inbox is always open. Whether you have a question, collaboration idea, or just want to say hi, I will try my best to get back to you.
        </p>

        <a className="contact-mail" href="mailto:vinishasgupta@gmail.com">
          Say Hello
        </a>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/vinisha-gupta-4a2b6634b/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/VinishaGupta" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
