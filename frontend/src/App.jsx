import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'About', num: '01.' },
  { id: 'experience', label: 'Experience', num: '02.' },
  { id: 'work', label: 'Work', num: '03.' },
  { id: 'contact', label: 'Contact', num: '04.' }
];

const aboutParagraphs = [
  'I am currently pursuing a Master of Computer Applications (MCA) at Ramdeobaba University with a strong foundation in full-stack development and problem solving. I am working as a Frontend Developer Intern at BeRAM - TBI, where I build responsive interfaces using React, Next.js, and TypeScript, integrate backend APIs, and implement secure payment solutions.',
  'I am passionate about designing intuitive user experiences while developing scalable, efficient web applications. With solid knowledge of Data Structures & Algorithms, OOPS, and SQL, I enjoy turning complex problems into clean, practical solutions.'
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
                <a href={`#${item.id}`}>
                  <span>{item.num}</span> {item.label}
                </a>
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

      <section id="experience" className="stub-section" />
      <section id="work" className="stub-section" />
      <section id="contact" className="stub-section" />
    </div>
  );
}
