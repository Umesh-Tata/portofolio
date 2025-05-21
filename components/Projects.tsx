
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

interface ProjectsProps {
  id: string;
  projects: Project[];
  icon?: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({ id, projects, icon }) => {
  return (
    <Section
        id={id}
        title="My Recent Work"
        subtitle="Showcase your best work. Add your projects below to highlight your skills and experience."
        titleIcon={icon}
        className="bg-slate-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-neutral mt-8">
          {/* This message is shown if no projects are in App.tsx */}
          Your projects will be displayed here. Add project data in <code>App.tsx</code>.
        </p>
      )}
    </Section>
  );
};

export default Projects;
