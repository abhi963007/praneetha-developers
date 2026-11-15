import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles: Record<Project['status'], string> = {
    ongoing: 'bg-brand-green text-white',
    completed: 'bg-brand-dark text-white',
    'coming-soon': 'bg-brand-gold text-brand-ink',
  };

  const statusLabels: Record<Project['status'], string> = {
    ongoing: project.isFlagship ? 'Flagship' : 'Ongoing',
    completed: 'Delivered',
    'coming-soon': 'Pre-Launch',
  };

  const targetRoute =
    project.status === 'coming-soon' ? '/projects/plots/coming-soon' : `/project/${project.slug}`;

  return (
    <Link to={targetRoute} className="architectural-card group flex h-full flex-col overflow-hidden">
      <div className="awwwards-image-frame aspect-[16/10] bg-brand-cream">
        <img
          src={project.thumbnail}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span
          className={`absolute left-3.5 top-3.5 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            statusStyles[project.status]
          }`}
        >
          {statusLabels[project.status]}
        </span>
        <span className="pointer-events-none absolute bottom-3.5 right-3.5 translate-y-2 rounded-sm bg-brand-ink/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          Explore Residence ↗
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-slate">
            {project.location}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-brand-dark transition-colors group-hover:text-brand-green lg:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-1 text-xs text-brand-slate">{project.subtitle}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 divide-x divide-brand-dark/12 border-t border-brand-dark/12 pt-4 text-xs">
          <div className="pr-3">
            <span className="block text-[10px] uppercase tracking-[0.14em] text-brand-slate/80">
              Price Band
            </span>
            <span className="mt-0.5 block font-semibold text-brand-green">{project.priceRange}</span>
          </div>
          <div className="pl-3">
            <span className="block text-[10px] uppercase tracking-[0.14em] text-brand-slate/80">
              Configuration
            </span>
            <span className="mt-0.5 block truncate font-medium text-brand-dark">
              {project.configuration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
