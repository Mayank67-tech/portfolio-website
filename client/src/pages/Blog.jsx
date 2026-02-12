import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../lib/api';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    blogAPI
      .list(page, 10)
      .then((res) => {
        setBlogs(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <section className="py-20 md:py-24 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Blog</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Technical notes and updates.</p>

        {loading ? (
          <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">Loading...</p>
        ) : blogs.length === 0 ? (
          <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">No posts yet.</p>
        ) : (
          <>
            <ul className="mt-10 space-y-0">
              {blogs.map((post) => (
                <li key={post._id}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block border-b border-neutral-200 dark:border-neutral-800 py-5 transition-colors hover:bg-white/80 dark:hover:bg-neutral-900/50 -mx-2 px-2 rounded-lg"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <time className="mt-1.5 block text-xs text-neutral-500 dark:text-neutral-500">
                      {new Date(post.createdAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
            {pagination && pagination.pages > 1 && (
              <div className="mt-6 flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-sm font-medium bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {page} / {pagination.pages}
                </span>
                <button
                  type="button"
                  disabled={page >= pagination.pages}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-sm font-medium bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
