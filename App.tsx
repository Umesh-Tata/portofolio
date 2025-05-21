
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project, Skill, TimelineEvent, NavItem } from './types';
import {
  CodeBracketIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ArrowUpIcon
} from './constants';

// Portfolio Data - Replace with your information
const personalInfo = {
  name: "Your Name", // Replace with your full name
  tagline: "Your Professional Tagline | e.g., Web Developer, UI/UX Designer", // Replace with your tagline
  email: "your.email@example.com", // Replace with your email address
  phone: "(123) 456-7890", // Optional: Replace with your phone number
  linkedin: "https://linkedin.com/in/yourprofile", // Optional: Replace with your LinkedIn profile URL
  github: "https://github.com/yourusername", // Optional: Replace with your GitHub profile URL
  profileImageHero: "https://via.placeholder.com/150/0284c7/ffffff?text=YN", // Replace with URL or path to your hero image (e.g. /profile-hero.png)
  profileImageAbout: "https://via.placeholder.com/400/E0E7FF/334155?text=Your+Photo", // Replace with URL or path to your about section image
  summary: "Write a compelling summary about yourself. Highlight your key skills, experience, and career aspirations. \n\nFor example: A passionate and results-driven [Your Role] with [X] years of experience in [Your Key Skills/Industries]. Proven ability to [Your Key Achievements]. Eager to contribute to innovative projects and continuous learning in the tech industry." // Replace with your professional summary
};

const navItemsData: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const projectsData: Project[] = [
  // Add your projects here. Uncomment and modify the example below, or add new ones.
  /*
  {
    id: 'project-1', // Unique ID for each project
    title: 'My Awesome Project',
    description: "• Detailed description of your project.\n• Highlight key features, technologies used, and your role.\n• Mention any challenges overcome or specific achievements.",
    imageUrl: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Project+Image+1', // Replace with your project image URL
    tags: ['React', 'Node.js', 'API Integration'], // Relevant technologies or skills
    liveUrl: '#', // Optional: Link to live demo (e.g., 'https://myprojectdemo.com')
    repoUrl: '#', // Optional: Link to GitHub repository (e.g., 'https://github.com/yourusername/myproject')
    year: '2024' // Year of completion or "Ongoing"
  },
  */
  {
    id: 'project-example-1',
    title: 'Example Project Alpha',
    description: "• This is an example project description. Replace this with details about your own work.\n• Focus on the problem you solved, the technologies used, and the impact of your work. Bullet points are great for readability.",
    imageUrl: 'https://via.placeholder.com/600x400/cccccc/888888?text=Project+Image',
    tags: ['Tech1', 'FrameworkX', 'Design'],
    liveUrl: '#',
    repoUrl: '#',
    year: '202X'
  },
  {
    id: 'project-example-2',
    title: 'Example Project Beta',
    description: "• Describe another one of your cool projects here.\n• What makes this project unique? What did you learn?",
    imageUrl: 'https://via.placeholder.com/600x400/a0a0a0/666666?text=Another+Project',
    tags: ['CloudService', 'API', 'Mobile-Friendly'],
    // liveUrl: '#', // This project might not have a live URL
    repoUrl: '#',
    year: 'Recent'
  }
];

const skillsData: Skill[] = [
  // Add your skills here. Icon components are from './constants.tsx' or you can create your own.
  // Example: { id: 'skill-js', name: 'JavaScript', level: 85, icon: <CodeBracketIcon className="w-5 h-5 mr-2 text-yellow-500" /> },
  { id: 'skill-example-lang', name: 'Example Language (e.g., Python)', level: 85, icon: <CodeBracketIcon className="w-5 h-5 mr-2 text-blue-500" /> },
  { id: 'skill-example-framework', name: 'Example Framework (e.g., React)', level: 90, icon: <CodeBracketIcon className="w-5 h-5 mr-2 text-sky-500" /> },
  { id: 'skill-example-db', name: 'Example Database (e.g., MySQL)', level: 80, icon: <CodeBracketIcon className="w-5 h-5 mr-2 text-cyan-500" /> },
  { id: 'skill-example-tool', name: 'Example Tool (e.g., Docker)', level: 75, icon: <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-slate-500" /> },
  { id: 'skill-example-cloud', name: 'Example Cloud (e.g., AWS)', level: 70, icon: <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-orange-500" /> },
  { id: 'skill-example-methodology', name: 'Example Methodology (e.g., Agile)', level: 90, icon: <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-green-500" /> },
  // Add more skills as needed
];


const experienceData: TimelineEvent[] = [
  // Add your work experience here. Most recent first is common.
  /*
  {
    id: 'exp-1', // Unique ID
    title: 'Your Job Title',
    institution: 'Company Name',
    period: 'Month YYYY - Month YYYY (or Present)',
    description: [
      'Key responsibility or achievement 1.',
      'Key responsibility or achievement 2. Use quantifiable results if possible.',
      'Another key point about your role.',
    ],
    logoUrl: 'https://via.placeholder.com/40x40/0284c7/ffffff?text=C' // Optional: Company logo URL (e.g., '/company-logo.png')
  },
  */
  {
    id: 'exp-example-1',
    title: 'Senior Example Role',
    institution: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Led development of example feature X, resulting in Y% improvement.',
      'Collaborated with cross-functional teams on Z initiative.',
      'Mentored junior developers in [specific area/technology].',
    ],
    logoUrl: 'https://via.placeholder.com/40x40/cccccc/888888?text=TS'
  },
  {
    id: 'exp-example-2',
    title: 'Junior Example Role',
    institution: 'Web Wizards LLC',
    period: 'Jun 2020 - Dec 2021',
    description: [
      'Assisted in the development of several client websites.',
      'Gained experience with [Technology A] and [Technology B].',
      'Contributed to maintaining and updating existing codebases.',
    ],
    logoUrl: 'https://via.placeholder.com/40x40/a0a0a0/666666?text=WW'
  },
];

const educationData: TimelineEvent[] = [
  // Add your education details here.
  /*
  {
    id: 'edu-1', // Unique ID
    title: 'Your Degree (e.g., Bachelor of Science in Computer Science)',
    institution: 'University Name',
    period: 'Graduated: Month YYYY (or Expected: Month YYYY)',
    description: 'Relevant coursework, honors, thesis, or GPA (optional). e.g., "Specialized in Artificial Intelligence. GPA: 3.8/4.0."',
    logoUrl: 'https://via.placeholder.com/40x40/818cf8/ffffff?text=U' // Optional: University logo URL (e.g., '/university-logo.png')
  },
  */
  {
    id: 'edu-example-1',
    title: 'Master of Science in Fictional Studies',
    institution: 'Unseen University',
    period: 'Graduated: Dec 2020',
    description: 'Focused on advanced theoretical concepts and practical applications in fictional engineering. Thesis: "The Aerodynamics of Magic Carpets".',
    logoUrl: 'https://via.placeholder.com/40x40/a0a0a0/666666?text=U'
  },
  {
    id: 'edu-example-2',
    title: 'Bachelor of Arts in Narrative Construction',
    institution: 'Storytelling College',
    period: 'Graduated: May 2018',
    description: 'Minor in Digital Media. Captain of the Debate Team.',
    // logoUrl: 'https://via.placeholder.com/40x40/b0b0b0/555555?text=SC' // Logo is optional
  },
];

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-base-100 text-base-content antialiased">
      <Navbar navItems={navItemsData} />
      <main className="pt-[5.5rem]"> {/* Add padding-top to offset fixed navbar */}
        <Hero
            id="hero"
            name={personalInfo.name}
            tagline={personalInfo.tagline}
            profileImageUrl={personalInfo.profileImageHero}
        />
        <About
            id="about"
            icon={<UserCircleIcon className="w-8 h-8 inline-block mr-2" />}
            summary={personalInfo.summary}
            profileImageUrl={personalInfo.profileImageAbout}
            phone={personalInfo.phone}
            email={personalInfo.email}
        />
        <Projects
            id="projects"
            projects={projectsData}
            icon={<CodeBracketIcon className="w-8 h-8 inline-block mr-2" />}
        />
        <Skills
            id="skills"
            skills={skillsData}
            icon={<WrenchScrewdriverIcon className="w-8 h-8 inline-block mr-2" />}
        />
        <Experience
            id="experience"
            experiences={experienceData}
            icon={<BriefcaseIcon className="w-8 h-8 inline-block mr-2" />}
        />
        <Education
            id="education"
            educations={educationData}
            icon={<AcademicCapIcon className="w-8 h-8 inline-block mr-2" />}
        />
        <Contact
            id="contact"
            icon={<EnvelopeIcon className="w-8 h-8 inline-block mr-2" />}
            email={personalInfo.email}
            linkedinUrl={personalInfo.linkedin}
            githubUrl={personalInfo.github}
        />
      </main>
      <Footer
        name={personalInfo.name}
        email={personalInfo.email}
        linkedinUrl={personalInfo.linkedin}
        githubUrl={personalInfo.github}
      />
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-sky-700 transition-colors duration-300 z-50 animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
