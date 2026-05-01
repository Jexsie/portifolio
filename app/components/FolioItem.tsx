export interface WorkProject {
  id: string;
  title: string;
  category: string;
  image: string;
  image2x: string;
  projectUrl: string;
  modal: {
    galleryImage: string;
    description: string;
    tags: string[];
    linkUrl: string;
  };
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FolioItem({ project }: { project: WorkProject }) {
  return (
    <li className="folio-list__item column" data-animate-el>
      <a className="folio-list__item-link" href={`#modal-${project.id}`}>
        <div className="folio-list__item-pic">
          <img
            src={project.image}
            srcSet={`${project.image} 1x, ${project.image2x} 2x`}
            alt={project.title}
          />
        </div>

        <div className="folio-list__item-text">
          <div className="folio-list__item-cat">{project.category}</div>
          <div className="folio-list__item-title">{project.title}</div>
        </div>
      </a>
      <a
        className="folio-list__proj-link"
        href={project.projectUrl}
        title="project link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArrowIcon />
      </a>
    </li>
  );
}

export function FolioModal({ project }: { project: WorkProject }) {
  return (
    <div id={`modal-${project.id}`} hidden>
      <div className="modal-popup">
        <img src={project.modal.galleryImage} alt={project.title} />

        <div className="modal-popup__desc">
          <h5>{project.title}</h5>
          <p>{project.modal.description}</p>
          <ul className="modal-popup__cat">
            {project.modal.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <a
          href={project.modal.linkUrl}
          className="modal-popup__details"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project link
        </a>
      </div>
    </div>
  );
}
