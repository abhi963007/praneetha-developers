import { repository } from '../data/repository.js';

export const blogService = {
  listBlogs({ category } = {}) {
    const all = repository.getBlogs();
    const categories = ['All', ...new Set(all.map((b) => b.category))];
    const items = repository.getBlogs({ category });
    return { categories, items };
  },

  getBlogBySlug(slug) {
    return repository.getBlogBySlug(slug);
  },
};

