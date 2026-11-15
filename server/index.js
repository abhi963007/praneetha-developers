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
      return { contacts: [], newsletter: [] };
    }
    const parsed = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return {
      contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
      newsletter: Array.isArray(parsed.newsletter) ? parsed.newsletter : [],
    };
  } catch {
    return { contacts: [], newsletter: [] };
  }
}

function writeStore(dataFile, store) {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  fs.writeFileSync(dataFile, JSON.stringify(store, null, 2) + '\n', 'utf8');
}

export function createServer(options = {}) {
  const dataFile = options.dataFile || DEFAULT_DATA_FILE;
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      brand: 'Veymont',
      framework: 'React + Node.js/Express',
      pages: 6,
    });
  });

  app.get('/api/site-data', (_req, res) => {
    res.json({
      company: {
        name: 'Veymont',
        email: 'hello@veymont.com',
        supportEmail: 'info@veymont.com',
        phone: '+1 (415) 555-0123',
        altPhone: '(808) 555-0111 3891',
        address: '92 Bowery St, New York, NY 10013',
      },
      pages: ['/', '/about-us', '/properties', '/services', '/insights', '/contact-us'],
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
    console.log(`Veymont server listening on http://localhost:${port}`);
  });
}
