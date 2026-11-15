import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { companyInfo, projects, galleryItems, blogs, faqs } from './seedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORE_PATH = path.join(__dirname, 'leadsStore.json');

function readStore() {
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { enquiries: [], channelPartners: [], plotInterests: [] };
  }
}

function writeStore(store) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf-8');
}

export const repository = {
  getCompanyInfo() {
    return { ...companyInfo, faqs };
  },

  getProjects({ category, status } = {}) {
    return projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (status && p.status !== status) return false;
      return true;
    });
  },

  getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug || p.id === slug) || null;
  },

  getGalleryItems({ projectId, stage } = {}) {
    return galleryItems.filter((item) => {
      if (projectId && projectId !== 'all' && item.projectId !== projectId) return false;
      if (stage && stage !== 'all' && item.stage !== stage) return false;
      return true;
    });
  },

  getBlogs({ category } = {}) {
    return blogs.filter((b) => {
      if (category && category !== 'All' && b.category !== category) return false;
      return true;
    });
  },

  getBlogBySlug(slug) {
    return blogs.find((b) => b.slug === slug || b.id === slug) || null;
  },

  saveEnquiry(record) {
    const store = readStore();
    store.enquiries.push(record);
    writeStore(store);
    return record;
  },

  saveChannelPartner(record) {
    const store = readStore();
    store.channelPartners.push(record);
    writeStore(store);
    return record;
  },

  savePlotInterest(record) {
    const store = readStore();
    store.plotInterests.push(record);
    writeStore(store);
    return record;
  },
};

