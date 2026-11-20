import cors from 'cors';
import express from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DEFAULT_DATA_FILE = path.join(__dirname, 'data', 'submissions.json');
const EMAIL_RE = /^\S+@\S+\.\S+$/;

function readStore(dataFile) {
  try {
    if (!fs.existsSync(dataFile)) {
      return { contacts: [], newsletter: [], channelPartners: [] };
    }
    const parsed = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return {
      contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
      newsletter: Array.isArray(parsed.newsletter) ? parsed.newsletter : [],
      channelPartners: Array.isArray(parsed.channelPartners) ? parsed.channelPartners : [],
    };
  } catch {
    return { contacts: [], newsletter: [], channelPartners: [] };
  }
}

function writeStore(dataFile, store) {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  const tmpFile = `${dataFile}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmpFile, JSON.stringify(store, null, 2) + '\n', 'utf8');
  fs.renameSync(tmpFile, dataFile);
}

export function createServer(options = {}) {
  const dataFile = options.dataFile || DEFAULT_DATA_FILE;
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      brand: 'Praneeta Developers',
      framework: 'React + Node.js/Express',
      pages: 7,
    });
  });

  app.get('/api/site-data', (_req, res) => {
    res.json({
      company: {
        name: 'Praneeta Developers',
        legalName: 'V Praneeta Developers Pvt. Ltd.',
        email: 'info@praneeta.dev',
        supportEmail: 'sales@praneeta.dev',
        phone: '+91 91336 37111',
        altPhone: '+91 91336 37111',
        address: '6-109, Mokila Village, Shankarpally Mandal, Hyderabad – 501203',
        rera: ['P02400009246', 'P02400006593', 'P02400009069'],
      },
      pages: ['/', '/about-us', '/properties', '/gallery', '/become-a-partner', '/blogs', '/contact-us'],
    });
  });

  app.post('/api/contact', (req, res) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const firstName = String(body.firstName || '').trim();
    const lastName = String(body.lastName || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const interest = String(body.interest || '').trim();
    const message = String(body.message || '').trim();
    const consent = body.consent === true;

    if (!firstName || !lastName || !EMAIL_RE.test(email) || !phone || !interest || !message || !consent) {
      return res.status(400).json({
        ok: false,
        error: 'All contact fields, valid email, and consent are required.',
      });
    }

    const entry = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      phone,
      interest,
      message,
      consent: true,
      createdAt: new Date().toISOString(),
    };

    const store = readStore(dataFile);
    store.contacts.push(entry);
    writeStore(dataFile, store);

    return res.status(201).json({
      ok: true,
      id: entry.id,
      createdAt: entry.createdAt,
    });
  });

  app.post('/api/newsletter', (req, res) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const email = String(body.email || '').trim();

    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({
        ok: false,
        error: 'A valid email address is required.',
      });
    }

    const entry = {
      id: crypto.randomUUID(),
      email,
      createdAt: new Date().toISOString(),
    };

    const store = readStore(dataFile);
    store.newsletter.push(entry);
    writeStore(dataFile, store);

    return res.status(201).json({
      ok: true,
      id: entry.id,
      createdAt: entry.createdAt,
    });
  });

  app.post('/api/channel-partners', (req, res) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const fullName = String(body.fullName || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const opportunity = String(body.opportunity || body.partnerType || '').trim();
    const projectDetails = String(body.projectDetails || body.preferredProject || body.notes || '').trim();
    const notes = String(body.notes || '').trim();
    const consent = body.consent === true;

    if (
      !fullName ||
      !phone ||
      phone.replace(/\D/g, '').length < 7 ||
      !EMAIL_RE.test(email) ||
      !opportunity ||
      !projectDetails ||
      !consent
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Full name, valid phone, valid email, collaboration opportunity, land/project details, and consent are required.',
      });
    }

    const entry = {
      id: crypto.randomUUID(),
      fullName,
      phone,
      email,
      opportunity,
      projectDetails,
      notes,
      consent: true,
      createdAt: new Date().toISOString(),
    };

    const store = readStore(dataFile);
    store.channelPartners.push(entry);
    writeStore(dataFile, store);

    return res.status(201).json({
      ok: true,
      id: entry.id,
      createdAt: entry.createdAt,
    });
  });

  const distDir = path.join(PROJECT_ROOT, 'dist');
  const distIndex = path.join(distDir, 'index.html');
  const publicDir = path.join(PROJECT_ROOT, 'public');
  const rootIndex = path.join(PROJECT_ROOT, 'index.html');

  const staticDir = fs.existsSync(distIndex) ? distDir : publicDir;
  const fallbackIndex = fs.existsSync(distIndex) ? distIndex : rootIndex;

  if (fs.existsSync(staticDir)) {
    app.use(express.static(staticDir));
  }

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    if (fs.existsSync(fallbackIndex)) {
      return res.sendFile(fallbackIndex);
    }
    return res.status(404).send('App entry index.html not found.');
  });

  return app;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const port = Number(process.env.PORT) || 5001;
  const app = createServer();
  app.listen(port, () => {
    console.log(`Praneeta Developers server listening on http://localhost:${port}`);
  });
}
