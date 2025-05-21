
import React from 'react';
import { TimelineEvent } from '../types';
import TimelineItem from './TimelineItem';
import Section from './Section';

interface ExperienceProps {
  id: string;
  experiences: TimelineEvent[];
  icon?: React.ReactNode;
}

const Experience: React.FC<ExperienceProps> = ({ id, experiences, icon }) => {
  return (
    <Section
      id={id}
      title="Work Experience"
      subtitle="Detail your professional journey, outlining key roles, responsibilities, and achievements."
      titleIcon={icon}
      className="bg-slate-50"
    >
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
            <TimelineItem item={exp} isLast={index === experiences.length - 1} />
          </div>
        ))}
      </div>
      {experiences.length === 0 && (
        <p className="text-center text-neutral mt-8">
          {/* This message is shown if no experiences are in App.tsx */}
          Your work experience will be displayed here. Add experience data in <code>App.tsx</code>.
        </p>
      )}
    </Section>
  );
};

export default Experience;
