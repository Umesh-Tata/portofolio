
import React from 'react';
import { TimelineEvent } from '../types';
import TimelineItem from './TimelineItem';
import Section from './Section';

interface EducationProps {
  id: string;
  educations: TimelineEvent[];
  icon?: React.ReactNode;
}

const Education: React.FC<EducationProps> = ({ id, educations, icon }) => {
  return (
    <Section
      id={id}
      title="Education"
      subtitle="Share your academic background, degrees, and relevant qualifications."
      titleIcon={icon}
      className="bg-white"
    >
      <div className="relative">
        {educations.map((edu, index) => (
          <div key={edu.id} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
            <TimelineItem item={edu} isLast={index === educations.length - 1} />
          </div>
        ))}
      </div>
      {educations.length === 0 && (
        <p className="text-center text-neutral mt-8">
          {/* This message is shown if no education entries are in App.tsx */}
          Your education history will be displayed here. Add education data in <code>App.tsx</code>.
        </p>
      )}
    </Section>
  );
};

export default Education;
