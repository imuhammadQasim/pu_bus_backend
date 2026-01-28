const express = require("express");
const app = express();
const config = require("./config/env");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");

// Request Logging
app.use(morgan("dev"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(
  cors({
    origin: config.CORS.ORIGIN,
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: config.SECURITY.RATE_LIMIT_WINDOW_MS,
  max: config.SECURITY.RATE_LIMIT_MAX_REQUESTS,
  message: "Too many requests from this IP, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PU Bus Routing API is live!",
    version: "1.0.0",
  });
});

app.use("/api", routes);

// Global Error Handler
app.use(require("./middlewares/error.middleware"));

module.exports = app;
