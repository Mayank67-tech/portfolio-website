import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../../lib/api';

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = () => {
    blogAPI
      .list(1, 50)
      .then((res) => setBlogs(res.data.data))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = (id, title) => {
    if (!window.confirm(`Delete "${title}"?`)) return;
    blogAPI
      .delete(id)
      .then(() => fetchBlogs())
      .catch(() => {});
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Blog Posts</h1>
        <Link
          to="/admin/dashboard/blog/new"
          className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          New Post
        </Link>
      </div>
      <p className="mt-1 text-sm text-neutral-500">Create, edit, and delete blog posts.</p>

      {loading ? (
        <p className="mt-8 text-neutral-500">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="mt-8 text-neutral-500">No posts. Create one to get started.</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {blogs.map((post) => (
            <li
              key={post._id}
              className="flex items-center justify-between rounded border border-neutral-200 bg-white p-4"
            >
              <div>
                <p className="font-medium text-neutral-900">{post.title}</p>
                <p className="text-sm text-neutral-500">{post.slug}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/admin/dashboard/blog/edit/${post._id}`}
                  className="rounded border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(post._id, post.title)}
                  className="rounded border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
