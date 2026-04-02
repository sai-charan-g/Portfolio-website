import Image from "next/image";

export default function ProjectCard({ project }) {
  const hasLiveLink = Boolean(project.live);
  const hasGithubLink = Boolean(project.github);

  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-thumbnail">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={800}
            className="project-thumbnail-image"
          />
        </div>
      ) : null}

      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-badge">{project.tech[0]}</span>
        </div>

        <p>{project.description}</p>

        <ul className="tech-list">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.highlights?.length ? (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        <div className="project-links">
          {hasLiveLink ? (
            <a className="project-link-primary" href={project.live} target="_blank" rel="noreferrer">
              View live project
            </a>
          ) : null}

          {hasGithubLink ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span className="project-link-muted">Private or offline project</span>
          )}
        </div>
      </div>
    </article>
  );
}
