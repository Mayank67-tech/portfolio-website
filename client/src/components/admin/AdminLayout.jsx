import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <aside className="w-56 border-r border-neutral-200 bg-white">
        <div className="sticky top-0 flex h-screen flex-col p-4">
          <p className="text-sm font-medium text-neutral-900">Admin</p>
          <p className="text-xs text-neutral-500">{admin?.email}</p>
          <nav className="mt-8 flex flex-col gap-1">
            <Link
              to="/admin/dashboard"
              className="rounded px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
            >
              Messages
            </Link>
            <Link
              to="/admin/dashboard/blog"
              className="rounded px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
            >
              Blog
            </Link>
          </nav>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-auto rounded px-3 py-2 text-left text-sm text-neutral-600 hover:bg-neutral-100"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
