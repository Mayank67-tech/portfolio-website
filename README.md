# Mayank Kumar Agarwal — Portfolio

Production-grade MERN stack portfolio: MongoDB Atlas, Express.js, React (Vite), Node.js. FAANG-style minimal design, admin dashboard, blog CRUD, JWT auth, contact form.

---

## Tech Stack

| Layer    | Stack                          |
| -------- | ------------------------------ |
| Backend  | Node.js, Express.js, MongoDB (Mongoose) |
| Auth     | JWT, bcryptjs                  |
| Security | Helmet, CORS, env-based config |
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion (minimal), Axios |
| API      | REST, Axios                    |

---

## Project Structure

```
Portfolio-Website/
├── client/                 # React (Vite) frontend
│   ├── src/
│   │   ├── components/     # Layout, Navbar, Footer, Admin layout, ProtectedRoute
│   │   ├── context/        # AuthContext
│   │   ├── data/           # portfolio.js (static content)
│   │   ├── lib/            # api.js (Axios instance + API helpers)
│   │   ├── pages/          # Home, About, Projects, Blog, Contact
│   │   └── pages/admin/    # AdminLogin, AdminDashboard, AdminBlog, BlogForm
│   └── public/
├── server/                 # Express backend
│   ├── config/            # db.js (MongoDB connection)
│   ├── controllers/       # auth, contact, blog
│   ├── middleware/        # authMiddleware, errorMiddleware
│   ├── models/            # Admin, Contact, Blog
│   ├── routes/            # auth, contact, blog
│   ├── scripts/           # seedAdmin.js
│   └── server.js
└── README.md
```

---

## Installation

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone and install

```bash
git clone <repo-url>
cd Portfolio-Website
```

### 2. Backend setup

```bash
cd server
cp .env.example .env
# Edit .env and set:
#   MONGO_URI=your_mongodb_atlas_connection_string
#   JWT_SECRET=your_secure_random_secret
#   PORT=5000
#   CLIENT_URL=http://localhost:5173
#   GMAIL_USER=your@gmail.com
#   GMAIL_APP_PASSWORD=your_16_char_app_password  (create at https://myaccount.google.com/apppasswords)
#   RECIPIENT_EMAIL=mayankagarwal92.6bit@gmail.com  (where contact form messages are sent)

npm install
npm run seed    # Creates admin: admin@portfolio.com / Admin@123
npm run dev     # Runs on http://localhost:5000
```

**Contact form → email:** When someone submits the contact form, a copy is saved in MongoDB and an email is sent to `RECIPIENT_EMAIL` (default: mayankagarwal92.6bit@gmail.com). Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` in `.env`; create an [App Password](https://myaccount.google.com/apppasswords) for the Gmail account. If email is not configured, submissions are still saved in the DB and the form works.

### 3. Frontend setup

```bash
cd ../client
cp .env.example .env
# For local dev, VITE_API_URL can stay http://localhost:5000/api or use proxy (default in vite.config)

npm install
npm run dev     # Runs on http://localhost:5173
```

### 4. Resume

Place your resume PDF at `client/public/resume.pdf` so the “Download Resume” button works. If you don’t, the link will 404 until you add the file.

---

## Environment Variables

### Server (`server/.env`)

| Variable     | Description                          |
| ------------ | ------------------------------------ |
| `PORT`       | Server port (default 5000)           |
| `MONGO_URI`  | MongoDB Atlas connection string      |
| `JWT_SECRET` | Secret for signing JWT tokens        |
| `JWT_EXPIRE` | Token expiry (e.g. `7d`)             |
| `CLIENT_URL` | Frontend origin for CORS             |

### Client (`client/.env`)

| Variable        | Description                    |
| --------------- | ------------------------------ |
| `VITE_API_URL`  | Backend API base (e.g. `/api` for same-origin or full URL) |

---

## API Overview

| Method | Endpoint              | Auth   | Description           |
| ------ | --------------------- | ------ | --------------------- |
| POST   | `/api/auth/login`      | No     | Admin login           |
| GET    | `/api/auth/me`         | Yes    | Current admin         |
| POST   | `/api/contact`         | No     | Submit contact form   |
| GET    | `/api/contact`         | Admin  | List messages (paginated) |
| DELETE | `/api/contact/:id`     | Admin  | Delete message        |
| GET    | `/api/blog`            | No     | List posts (paginated) |
| GET    | `/api/blog/:slug`      | No     | Get post by slug      |
| GET    | `/api/blog/by-id/:id`  | Admin  | Get post by ID        |
| POST   | `/api/blog`            | Admin  | Create post           |
| PUT    | `/api/blog/:id`        | Admin  | Update post           |
| DELETE | `/api/blog/:id`        | Admin  | Delete post           |

---

## Deployment

### Backend → Render

1. Create a **Web Service** on [Render](https://render.com).
2. Connect the repo; set **Root Directory** to `server`.
3. Build: leave empty or `npm install`.
4. Start: `npm start` (runs `node server.js`).
5. Add environment variables in Render dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRE` (optional)
   - `CLIENT_URL` = your Vercel frontend URL (e.g. `https://your-app.vercel.app`)
6. Deploy. Note the backend URL (e.g. `https://your-app.onrender.com`).

### Frontend → Vercel

1. Install Vercel CLI: `npm i -g vercel` (or use GitHub integration).
2. In project root or from `client`:
   ```bash
   cd client
   vercel
   ```
3. Set **Root Directory** to `client` if deploying from repo root.
4. Add environment variable:
   - `VITE_API_URL` = `https://your-app.onrender.com/api`
5. Deploy. Vercel will use `npm run build` and serve the built app.

### Post-deploy

- Set backend `CLIENT_URL` to the final Vercel URL (with `https://`).
- Run seed once against production DB if needed (e.g. from local with `MONGO_URI` pointing to Atlas used in prod):
  ```bash
  cd server && npm run seed
  ```
- Change the default admin password after first login (via a new admin or manual DB update until you add a “change password” feature).

---

## Default Admin (after seed)

- **Email:** `admin@portfolio.com`
- **Password:** `Admin@123`

Change this in production (update in DB or add a change-password flow).

---

## License

Private / Portfolio use.
