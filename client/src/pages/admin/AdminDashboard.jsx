import { useState, useEffect } from 'react';
import { contactAPI } from '../../lib/api';

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const fetchContacts = () => {
    contactAPI
      .list(page, 10)
      .then((res) => {
        setContacts(res.data.data);
        setPagination(res.data.pagination);
      })
      .catch(() => setContacts([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const handleDelete = (id) => {
    if (!window.confirm('Delete this message?')) return;
    contactAPI
      .delete(id)
      .then(() => fetchContacts())
      .catch(() => {});
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900">Contact Messages</h1>
      <p className="mt-1 text-sm text-neutral-500">View and manage messages from the contact form.</p>

      {loading ? (
        <p className="mt-8 text-neutral-500">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="mt-8 text-neutral-500">No messages.</p>
      ) : (
        <>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border border-neutral-200">
              <thead>
                <tr className="bg-neutral-50 text-left text-sm">
                  <th className="border-b border-neutral-200 p-3 font-medium">Name</th>
                  <th className="border-b border-neutral-200 p-3 font-medium">Email</th>
                  <th className="border-b border-neutral-200 p-3 font-medium">Message</th>
                  <th className="border-b border-neutral-200 p-3 font-medium">Date</th>
                  <th className="border-b border-neutral-200 p-3 font-medium" />
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id} className="border-b border-neutral-100">
                    <td className="p-3 text-neutral-900">{c.name}</td>
                    <td className="p-3 text-neutral-600">{c.email}</td>
                    <td className="max-w-xs p-3 text-sm text-neutral-600 truncate">{c.message}</td>
                    <td className="p-3 text-sm text-neutral-500">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <button
                        type="button"
                        onClick={() => handleDelete(c._id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pagination && pagination.pages > 1 && (
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm disabled:opacity-50"
              >
                Previous
              </button>
              <span className="flex items-center px-3 text-sm text-neutral-500">
                {page} / {pagination.pages}
              </span>
              <button
                type="button"
                disabled={page >= pagination.pages}
                onClick={() => setPage((p) => p + 1)}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
