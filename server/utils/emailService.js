const nodemailer = require('nodemailer');

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'mayankagarwal92.6bit@gmail.com';

function getTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

/**
 * Send contact form submission to portfolio owner email.
 * @param {{ name: string, email: string, message: string }} contact
 * @returns {Promise<boolean>} true if sent, false if skipped/failed
 */
async function sendContactEmail(contact) {
  const transport = getTransport();
  if (!transport) {
    console.warn('Email not configured: set GMAIL_USER and GMAIL_APP_PASSWORD in .env');
    return false;
  }
  try {
    await transport.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: contact.email,
      subject: `Portfolio: Message from ${contact.name}`,
      text: [
        `From: ${contact.name} <${contact.email}>`,
        '',
        contact.message,
      ].join('\n'),
      html: [
        `<p><strong>From:</strong> ${escapeHtml(contact.name)} &lt;${escapeHtml(contact.email)}&gt;</p>`,
        '<hr style="margin:1em 0">',
        `<p>${escapeHtml(contact.message).replace(/\n/g, '<br>')}</p>`,
      ].join(''),
    });
    return true;
  } catch (err) {
    console.error('Contact email send failed:', err.message);
    return false;
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = { sendContactEmail };
