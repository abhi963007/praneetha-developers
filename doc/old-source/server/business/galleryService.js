import { repository } from '../data/repository.js';

export const galleryService = {
  listGallery({ projectId, stage } = {}) {
    const projects = repository.getProjects();
    const items = repository.getGalleryItems({
      projectId: projectId ? String(projectId).trim() : undefined,
      stage: stage ? String(stage).trim() : undefined,
    });
    return {
      projects: projects.map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        status: p.status,
      })),
      items,
    };
  },
};

