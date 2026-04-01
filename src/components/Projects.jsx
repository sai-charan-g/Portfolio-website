"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Selected work that shows how I build.</h2>
            <p className="section-copy">
              A mix of full-stack products and AI/ML experiments, with the first two featured up
              front and more available on demand.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {projects.length > 2 ? (
          <div className="projects-actions">
            <button
              className="button button-secondary projects-toggle"
              type="button"
              onClick={() => setShowAllProjects((value) => !value)}
            >
              {showAllProjects ? "Show fewer projects" : "Explore more projects"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
