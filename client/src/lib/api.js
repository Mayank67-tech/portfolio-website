import axios from 'axios';

// Dev: use '/api' so Vite proxy forwards to backend. Production: set VITE_API_URL to full API base (e.g. https://your-api.onrender.com/api)
const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('adminToken');
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(err);
  }
);

export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  me: () => api.get('/auth/me'),
};

export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  list: (page = 1, limit = 10) => api.get('/contact', { params: { page, limit } }),
  delete: (id) => api.delete(`/contact/${id}`),
};

export const blogAPI = {
  list: (page = 1, limit = 10) => api.get('/blog', { params: { page, limit } }),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  getById: (id) => api.get(`/blog/by-id/${id}`),
  create: (data) => api.post('/blog', data),
  update: (id, data) => api.put(`/blog/${id}`, data),
  delete: (id) => api.delete(`/blog/${id}`),
};

export default api;
