
import React from 'react';
import Section from './Section';
import { EnvelopeIcon as HeroEnvelopeIcon } from '@heroicons/react/24/outline'; // Renamed to avoid conflict

// A simple PhoneIcon component if not using heroicons or for custom styling
const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);


interface AboutProps {
  id: string;
  icon?: React.ReactNode;
  summary: string;
  profileImageUrl: string;
  phone?: string;
  email?: string;
}

const About: React.FC<AboutProps> = ({ id, icon, summary, profileImageUrl, phone, email }) => {
  return (
    <Section id={id} title="About Me" titleIcon={icon} className="bg-white">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 animate-slide-in-left">
          <img
            src={profileImageUrl} // Use a placeholder or instruct user to replace
            alt="Your Name - Professional" // Dynamically set alt text or use placeholder
            className="rounded-lg shadow-xl mx-auto w-full max-w-xs md:max-w-sm"
          />
        </div>
        <div className="md:col-span-2 space-y-4 text-lg text-neutral animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <p className="whitespace-pre-line">
            {summary /* This will come from App.tsx and should be a placeholder/instruction */}
          </p>
           <div className="mt-6 space-y-3">
            {email && (
              <div className="flex items-center text-neutral hover:text-primary transition-colors">
                <HeroEnvelopeIcon className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                <a href={`mailto:${email}`} className="break-all">{email}</a>
              </div>
            )}
            {phone && (
              <div className="flex items-center text-neutral hover:text-primary transition-colors">
                <PhoneIcon className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                <span>{phone}</span>
              </div>
            )}
          </div>
          <p>
            {/* Add a brief personal statement here. You can talk about your work philosophy, what drives you, or your approach to projects. */}
            {/* Example: "I am passionate about creating elegant and efficient solutions to complex problems. I thrive in collaborative environments and am always eager to learn new technologies to enhance my skillset and deliver impactful results." */}
            You can describe your passion for development, your approach to teamwork, or your commitment to continuous learning here.
            Consider what makes you unique as a professional.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
