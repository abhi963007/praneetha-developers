import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORE_PATH = path.join(__dirname, 'data', 'leadsStore.json');

async function runTests() {
  const originalStore = fs.readFileSync(STORE_PATH, 'utf-8');
  const app = createApp();
  const server = app.listen(0);
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    // 1. Health check
    const healthRes = await fetch(`${baseUrl}/api/health`);
    assert.equal(healthRes.status, 200);
    const healthJson = await healthRes.json();
    assert.equal(healthJson.status, 'ok');

    // 2. Projects listing & flagship ₹1.5 Cr - ₹2.0 Cr check
    const projRes = await fetch(`${baseUrl}/api/projects`);
    assert.equal(projRes.status, 200);
    const projects = await projRes.json();
    assert.equal(projects.length, 6);
    const flagship = projects.find((p) => p.isFlagship);
    assert.ok(flagship, 'Flagship villa project must exist');
    assert.match(flagship.priceRange, /1\.5/);

    // 3. Multi-level filtering
    const completedVillas = await (await fetch(`${baseUrl}/api/projects?category=villas&status=completed`)).json();
    assert.equal(completedVillas.length, 2);

    const comingSoonPlots = await (await fetch(`${baseUrl}/api/projects?category=plots&status=coming-soon`)).json();
    assert.equal(comingSoonPlots.length, 1);

    // 4. Dual-level gallery check
    const progressGal = await (await fetch(`${baseUrl}/api/gallery?stage=progress`)).json();
    assert.ok(progressGal.items.length >= 3);
    assert.ok(progressGal.items.every((i) => i.stage === 'progress' && i.captureDate));

    // 5. Validation error check on invalid enquiry
    const badEnq = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'A', phone: '123', email: 'bad' }),
    });
    assert.equal(badEnq.status, 400);

    // 6. Valid Enquiry, Channel Partner, and Plot Interest persistence
    const goodEnq = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Rahul Sharma',
        phone: '9876543210',
        email: 'rahul@example.com',
        preferredProject: 'Pranitha Sovereign Villas',
      }),
    });
    assert.equal(goodEnq.status, 201);
    const enqData = await goodEnq.json();
    assert.ok(enqData.record.id.startsWith('ENQ-'));

    const cpRes = await fetch(`${baseUrl}/api/channel-partners`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Vikram Realty Advisors',
        agencyName: 'Deccan Homes Realty',
        phone: '9123456789',
        email: 'vikram@deccanhomes.in',
        reraNumber: 'A02400001234',
        operatingCity: 'Hyderabad West',
      }),
    });
    assert.equal(cpRes.status, 201);
    const cpData = await cpRes.json();
    assert.ok(cpData.record.id.startsWith('CP-'));

    const plotRes = await fetch(`${baseUrl}/api/plot-interest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Sneha Reddy',
        phone: '9988776655',
        email: 'sneha@example.com',
        plotSize: '300 Sq. Yds',
      }),
    });
    assert.equal(plotRes.status, 201);

    console.log('ALL BACKEND SELF-TESTS PASSED (6 projects, dual gallery, validation & persistence).');
  } finally {
    server.close();
    fs.writeFileSync(STORE_PATH, originalStore, 'utf-8');
  }
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});

