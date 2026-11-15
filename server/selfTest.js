import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createServer } from './index.js';

const tempFile = path.join(os.tmpdir(), `veymont-selftest-${process.pid}-${Date.now()}.json`);
const app = createServer({ dataFile: tempFile });

const server = await new Promise((resolve) => {
  const instance = app.listen(0, '127.0.0.1', () => resolve(instance));
});

try {
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const healthRes = await fetch(`${baseUrl}/api/health`);
  assert.equal(healthRes.status, 200);
  const health = await healthRes.json();
  assert.equal(health.status, 'ok');
  assert.equal(health.brand, 'Veymont');
  assert.equal(health.pages, 6);

  const siteRes = await fetch(`${baseUrl}/api/site-data`);
  assert.equal(siteRes.status, 200);
  const siteData = await siteRes.json();
  assert.equal(siteData.company.email, 'hello@veymont.com');
  assert.equal(siteData.pages.length, 6);

  const badContactRes = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName: 'A', consent: false }),
  });
  assert.equal(badContactRes.status, 400);

  const goodContactRes = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'Arjun',
      lastName: 'Nair',
      email: 'arjun@example.com',
      phone: '+1 415 555 0199',
      interest: 'Buying a Property',
      message: 'Looking for a coastal villa.',
      consent: true,
    }),
  });
  assert.equal(goodContactRes.status, 201);
  const contactJson = await goodContactRes.json();
  assert.equal(contactJson.ok, true);
  assert.ok(contactJson.id);

  const badNewsRes = await fetch(`${baseUrl}/api/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'not-an-email' }),
  });
  assert.equal(badNewsRes.status, 400);

  const goodNewsRes = await fetch(`${baseUrl}/api/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'reader@example.com' }),
  });
  assert.equal(goodNewsRes.status, 201);
  const newsJson = await goodNewsRes.json();
  assert.equal(newsJson.ok, true);
  assert.ok(newsJson.id);

  const persisted = JSON.parse(fs.readFileSync(tempFile, 'utf8'));
  assert.equal(persisted.contacts.length, 1);
  assert.equal(persisted.contacts[0].email, 'arjun@example.com');
  assert.equal(persisted.newsletter.length, 1);
  assert.equal(persisted.newsletter[0].email, 'reader@example.com');

  const spaRes = await fetch(`${baseUrl}/about-us`);
  assert.equal(spaRes.status, 200);
  const spaHtml = await spaRes.text();
  assert.ok(spaHtml.includes('<div id="root"'), 'SPA fallback should serve root app HTML');

  console.log('All Veymont API and SPA self-tests passed (7/7 checks).');
} finally {
  await new Promise((resolve) => server.close(resolve));
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }
}
