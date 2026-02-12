import { useState } from 'react';
import { contactAPI } from '../lib/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const payload = {
      name: String(form.name).trim(),
      email: String(form.email).trim().toLowerCase(),
      message: String(form.message).trim(),
    };
    try {
      await contactAPI.submit(payload);
      setStatus({ type: 'success', message: "Message sent. I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const isNetworkError = !err.response;
      const message = isNetworkError
        ? "Could not reach server. Ensure the backend is running and the API URL is correct."
        : (err.response?.data?.message || err.response?.data?.error || 'Something went wrong. Please try again.');
      setStatus({ type: 'error', message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-neutral-950" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h1 id="contact-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white text-center">
          Let&apos;s build something impactful.
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-center max-w-md">
          Open to internships and backend opportunities.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xl space-y-5">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="form-input form-textarea"
              placeholder="Your message..."
            />
          </div>
          {status && (
            <div
              role="alert"
              className={`rounded-lg px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
