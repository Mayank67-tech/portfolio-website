import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { blogAPI } from '../../lib/api';

export default function BlogForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '', excerpt: '', tags: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit && id) {
      blogAPI
        .getById(id)
        .then((res) => {
          const post = res.data.data;
          setForm({
            title: post.title,
            content: post.content,
            excerpt: post.excerpt || '',
            tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
          });
        })
        .catch(() => setError('Failed to load post'));
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = {
      ...form,
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    };
    try {
      if (isEdit) {
        await blogAPI.update(id, payload);
      } else {
        await blogAPI.create(payload);
      }
      navigate('/admin/dashboard/blog');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to="/admin/dashboard/blog" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← Blog
      </Link>
      <h1 className="mt-4 text-2xl font-semibold text-neutral-900">
        {isEdit ? 'Edit Post' : 'New Post'}
      </h1>
      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">Title</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="mt-1 w-full rounded border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">Excerpt (optional)</label>
          <input
            type="text"
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            className="mt-1 w-full rounded border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">Tags (comma-separated)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
            placeholder="node, api, backend"
            className="mt-1 w-full rounded border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700">Content (Markdown)</label>
          <textarea
            required
            rows={12}
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            className="mt-1 w-full rounded border border-neutral-300 bg-white px-4 py-2.5 font-mono text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-50"
          >
            {loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
          </button>
          <Link
            to="/admin/dashboard/blog"
            className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
