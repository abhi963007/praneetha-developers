import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projectService } from './business/projectService.js';
import { galleryService } from './business/galleryService.js';
import { blogService } from './business/blogService.js';
import { leadService } from './business/leadService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'pranitha-developers-api', timestamp: new Date().toISOString() });
  });

  app.get('/api/company', (_req, res) => {
    res.json(projectService.getCompanyProfile());
  });

  app.get('/api/projects', (req, res) => {
    const { category, status } = req.query;
    res.json(projectService.listProjects({ category, status }));
  });

  app.get('/api/projects/:slug', (req, res) => {
    const project = projectService.getProjectDetails(req.params.slug);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    return res.json(project);
  });

  app.get('/api/gallery', (req, res) => {
    const { projectId, stage } = req.query;
    res.json(galleryService.listGallery({ projectId, stage }));
  });

  app.get('/api/blogs', (req, res) => {
    const { category } = req.query;
    res.json(blogService.listBlogs({ category }));
  });

  app.get('/api/blogs/:slug', (req, res) => {
    const post = blogService.getBlogBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    return res.json(post);
  });

  app.post('/api/enquiries', (req, res) => {
    try {
      const saved = leadService.submitEnquiry(req.body);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Our villa advisor will connect with you shortly.',
        record: saved,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        success: false,
        error: err.message || 'Unable to submit enquiry',
      });
    }
  });

  app.post('/api/channel-partners', (req, res) => {
    try {
      const saved = leadService.registerChannelPartner(req.body);
      return res.status(201).json({
        success: true,
        message: `Welcome onboard! Your Channel Partner ID is ${saved.id}. Our partner desk will reach out within 24 hours.`,
        record: saved,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        success: false,
        error: err.message || 'Unable to register channel partner',
      });
    }
  });

  app.post('/api/plot-interest', (req, res) => {
    try {
      const saved = leadService.registerPlotInterest(req.body);
      return res.status(201).json({
        success: true,
        message: `Priority pre-launch access registered (${saved.id}). You will receive our first-release plot tariff.`,
        record: saved,
      });
    } catch (err) {
      return res.status(err.statusCode || 400).json({
        success: false,
        error: err.message || 'Unable to register interest',
      });
    }
  });

  if (fs.existsSync(DIST_DIR)) {
    app.use(express.static(DIST_DIR));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) return next();
      return res.sendFile(path.join(DIST_DIR, 'index.html'));
    });
  }

  return app;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === __filename;
if (isMain) {
  const PORT = process.env.PORT || 5000;
  const app = createApp();
  app.listen(PORT, () => {
    console.log(`Pranitha Developers server running at http://localhost:${PORT}`);
  });
}

