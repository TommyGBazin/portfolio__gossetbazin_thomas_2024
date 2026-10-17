import Label from './Label';
import projects from '../data/projects';

export default function Projects() {
  // w-0 min-w-full : la liste prend la largeur de la colonne sans l’élargir.
  return (
    <div className="flex flex-col gap-2 mt-6 w-0 min-w-full">
      <Label>projets</Label>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <span className="flex items-baseline gap-2 text-base">
                <span className="group-hover:underline underline-offset-4">{project.name}</span>
                <span className="text-sm text-gray-500">{project.year}</span>
              </span>
              <span className="text-sm text-gray-500">{project.client}</span>
              <span className="flex flex-wrap gap-x-2 text-xs text-gray-500 tracking-widest">
                {project.tags.map((tag, i) => (
                  <span key={tag}>{i > 0 && '· '}{tag}</span>
                ))}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
