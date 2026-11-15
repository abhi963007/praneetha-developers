import { repository } from '../data/repository.js';

export const projectService = {
  getCompanyProfile() {
    return repository.getCompanyInfo();
  },

  listProjects({ category, status } = {}) {
    const normalizedCategory = category ? String(category).toLowerCase().trim() : undefined;
    const normalizedStatus = status ? String(status).toLowerCase().trim() : undefined;
    return repository.getProjects({
      category: normalizedCategory,
      status: normalizedStatus,
    });
  },

  getProjectDetails(slug) {
    const project = repository.getProjectBySlug(slug);
    if (!project) return null;
    const projectGallery = repository.getGalleryItems({ projectId: project.id });
    return {
      ...project,
      galleryPreview: projectGallery,
    };
  },
};

