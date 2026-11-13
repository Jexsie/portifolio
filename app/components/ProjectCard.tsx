import type { Project } from "../data/site";
import { ArrowUpRight } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project">
      {project.image ? (
        <img
          className="project__media"
          src={project.image}
          alt={project.imageAlt ?? project.title}
        />
      ) : (
        <div className="project__media" aria-hidden="true">
          {project.title}
        </div>
      )}
      <div className="project__body">
        <p className="mono-label">{project.meta}</p>
        <h4 className="project__title">{project.title}</h4>
        <p className="copy">{project.description}</p>
        {project.award && <p className="badge">{project.award}</p>}
        {project.tags.length > 0 && (
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {project.link && (
          <a
            href={project.link}
            className="link-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.replace(/^https?:\/\//, "")}
            <ArrowUpRight />
          </a>
        )}
      </div>
    </article>
  );
}
