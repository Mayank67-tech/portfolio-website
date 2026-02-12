const { Resend } = require('resend');

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'mayankagarwal92.6bit@gmail.com';

/**
 * Send contact form submission to portfolio owner email.
 * @param {{ name: string, email: string, message: string }} contact
 * @returns {Promise<boolean>} true if sent, false if skipped/failed
 */
async function sendContactEmail(contact) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend API Key is missing. Set RESEND_API_KEY in .env');
    return false;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain or onboarding@resend.dev for testing
      to: RECIPIENT_EMAIL,
      replyTo: contact.email,
      subject: `Portfolio: Message from ${contact.name}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(contact.name)} &lt;${escapeHtml(contact.email)}&gt;</p>
        <hr style="margin:1em 0">
        <p>${escapeHtml(contact.message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend email failed:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Contact email send exception:', err.message);
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
