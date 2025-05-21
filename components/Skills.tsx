
import React from 'react';
import { Skill } from '../types';
import Section from './Section';

interface SkillsProps {
  id: string;
  skills: Skill[];
  icon?: React.ReactNode;
}

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    {skill.icon && React.isValidElement(skill.icon) && (
      <div className="mb-3 text-primary">
        {React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10' })}
      </div>
    )}
    <h4 className="text-md font-semibold text-neutral mb-2">{skill.name}</h4>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full"
        style={{ width: `${skill.level}%` }}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
      ></div>
    </div>
    <p className="text-xs text-slate-500 mt-1">{skill.level}% Proficient</p>
  </div>
);

const Skills: React.FC<SkillsProps> = ({ id, skills, icon }) => {
  return (
    <Section
      id={id}
      title="Technical Skills"
      subtitle="List your technical skills and their proficiency. This helps visitors understand your expertise."
      titleIcon={icon}
      className="bg-white"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
             <SkillItem skill={skill} />
          </div>
        ))}
      </div>
       {skills.length === 0 && (
        <p className="text-center text-neutral mt-8">
          {/* This message is shown if no skills are in App.tsx */}
          Your skills will be displayed here. Add skill data in <code>App.tsx</code>.
        </p>
      )}
    </Section>
  );
};

export default Skills;
