
import React from 'react';
import Section from './Section';
import { EnvelopeIcon, LinkedInIcon, GitHubIcon } from '../constants';

interface ContactProps {
  id: string;
  icon?: React.ReactNode;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

const Contact: React.FC<ContactProps> = ({ id, icon, email, linkedinUrl, githubUrl }) => {
  return (
    <Section
      id={id}
      title="Get In Touch"
      subtitle="Provide ways for visitors to connect with you. Include your email and links to professional profiles."
      titleIcon={icon}
      className="bg-slate-50"
    >
      <div className="max-w-lg mx-auto text-center">
        <p className="text-lg text-neutral mb-8">
          {/* You can customize this message */}
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition-colors duration-300 text-lg font-medium"
          >
            <EnvelopeIcon className="w-5 h-5 mr-2" /> Email Me
          </a>
          <div className="flex space-x-4">
            {linkedinUrl && linkedinUrl !== "https://linkedin.com/in/yourprofile" && ( // Check if URL is not default placeholder
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-neutral hover:text-primary transition-colors duration-300 p-3 bg-white rounded-full shadow-md hover:shadow-lg"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            )}
            {githubUrl && githubUrl !== "https://github.com/yourusername" && ( // Check if URL is not default placeholder
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-neutral hover:text-primary transition-colors duration-300 p-3 bg-white rounded-full shadow-md hover:shadow-lg"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-8">
          {/* Add a note about response times or preferred contact methods if you like. */}
          {/* e.g., "I'll do my best to respond within 24-48 hours." */}
        </p>
      </div>
    </Section>
  );
};

export default Contact;
