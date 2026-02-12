require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");

/* ================= DB CONNECT ================= */
connectDB();

const app = express();

/* ================= SECURITY ================= */
app.use(helmet());

/* ================= CORS CONFIG (PRODUCTION SAFE) ================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-website-two-theta-14.vercel.app",
  "https://portfolio-website-git-main-mayank67-techs-projects.vercel.app",
  "https://portfolio-website-lumr.vercel.app",   // ✅ ADD THIS
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS"));
      }
    },
    credentials: true,
  })
);

// handle preflight requests
app.options("*", cors());

/* ================= BODY PARSING ================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);

/* ================= HEALTH CHECK ================= */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

/* ================= ERROR HANDLING ================= */
app.use(notFound);
app.use(errorHandler);

/* ================= SERVER START ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
