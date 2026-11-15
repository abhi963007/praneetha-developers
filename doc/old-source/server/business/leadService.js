import crypto from 'node:crypto';
import { repository } from '../data/repository.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validateContactFields({ name, phone, email }) {
  const errors = [];
  if (cleanString(name).length < 2) errors.push('Full Name must be at least 2 characters.');
  if (cleanString(phone).replace(/\D/g, '').length < 10) {
    errors.push('Please enter a valid 10-digit mobile or WhatsApp number.');
  }
  if (!EMAIL_RE.test(cleanString(email))) {
    errors.push('Please enter a valid email address.');
  }
  return errors;
}

export const leadService = {
  submitEnquiry(payload) {
    const name = cleanString(payload?.name);
    const phone = cleanString(payload?.phone);
    const email = cleanString(payload?.email);
    const inquiryType = cleanString(payload?.inquiryType) || 'Buy a Villa';
    const preferredProject = cleanString(payload?.preferredProject) || 'Pranitha Sovereign Villas';
    const visitDate = cleanString(payload?.visitDate);
    const message = cleanString(payload?.message);

    const errors = validateContactFields({ name, phone, email });
    if (errors.length > 0) {
      const err = new Error(errors[0]);
      err.statusCode = 400;
      err.details = errors;
      throw err;
    }

    const record = {
      id: `ENQ-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
      name,
      phone,
      email,
      inquiryType,
      preferredProject,
      visitDate,
      message,
      createdAt: new Date().toISOString(),
    };

    return repository.saveEnquiry(record);
  },

  registerChannelPartner(payload) {
    const fullName = cleanString(payload?.fullName);
    const agencyName = cleanString(payload?.agencyName);
    const phone = cleanString(payload?.phone);
    const email = cleanString(payload?.email);
    const reraNumber = cleanString(payload?.reraNumber);
    const operatingCity = cleanString(payload?.operatingCity) || 'Hyderabad';

    const errors = validateContactFields({ name: fullName, phone, email });
    if (errors.length > 0) {
      const err = new Error(errors[0]);
      err.statusCode = 400;
      err.details = errors;
      throw err;
    }

    const record = {
      id: `CP-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
      fullName,
      agencyName: agencyName || 'Independent Advisor',
      phone,
      email,
      reraNumber: reraNumber || 'Pending / Not Provided',
      operatingCity,
      status: 'Registered — Pending RM Onboarding Call',
      createdAt: new Date().toISOString(),
    };

    return repository.saveChannelPartner(record);
  },

  registerPlotInterest(payload) {
    const name = cleanString(payload?.name);
    const phone = cleanString(payload?.phone);
    const email = cleanString(payload?.email);
    const plotSize = cleanString(payload?.plotSize) || '200 – 300 Sq. Yds';

    const errors = validateContactFields({ name, phone, email });
    if (errors.length > 0) {
      const err = new Error(errors[0]);
      err.statusCode = 400;
      err.details = errors;
      throw err;
    }

    const record = {
      id: `PLT-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
      name,
      phone,
      email,
      plotSize,
      project: 'Pranitha Singapur Town Phase II',
      createdAt: new Date().toISOString(),
    };

    return repository.savePlotInterest(record);
  },
};

