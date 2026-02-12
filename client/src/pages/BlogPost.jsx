import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogAPI } from '../lib/api';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogAPI
      .getBySlug(slug)
      .then((res) => setPost(res.data.data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="max-w-6xl mx-auto px-6 py-20 text-sm text-neutral-600 dark:text-neutral-400">Loading...</div>;
  if (!post)
    return (
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-sm text-neutral-900 dark:text-white font-medium underline underline-offset-2">
          Back to Blog
        </Link>
      </div>
    );

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/blog" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
        ← Blog
      </Link>
      <h1 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        {post.title}
      </h1>
      <time className="mt-1.5 block text-sm text-neutral-500 dark:text-neutral-500">
        {new Date(post.createdAt).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      {post.tags?.length > 0 && (
        <div className="mt-2 flex gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-8 max-w-none">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400 text-[0.9375rem]">{children}</p>,
            h2: ({ children }) => (
              <h2 className="mb-2 mt-8 text-lg font-semibold text-neutral-900 dark:text-white">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-2 mt-6 text-base font-semibold text-neutral-900 dark:text-white">{children}</h3>
            ),
            ul: ({ children }) => <ul className="mb-4 list-disc pl-6 text-neutral-600 dark:text-neutral-400 text-[0.9375rem]">{children}</ul>,
            ol: ({ children }) => (
              <ol className="mb-4 list-decimal pl-6 text-neutral-600 dark:text-neutral-400 text-[0.9375rem]">{children}</ol>
            ),
            code: ({ children }) => (
              <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 font-mono text-sm text-neutral-900 dark:text-white">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-4 text-sm">
                {children}
              </pre>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
