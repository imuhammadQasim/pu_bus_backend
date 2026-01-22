const dotenv = require("dotenv");

dotenv.config()

const CONFIG = {
    // Application
    ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000,

    // Database
    DATABASE: {
        URL: process.env.DATABASE_URL,
    },

    // Security
    SECURITY: {
        RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
        RATE_LIMIT_MAX_REQUESTS:
            parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    },

    // CORS
    CORS: {
        ORIGIN: process.env.CORS_ORIGIN
            ? process.env.CORS_ORIGIN.split(",")
            : ["http://localhost:3000"],
    },

    MAILER_ENV: {
        HOST: process.env.MAIL_HOST,
        PORT: process.env.MAIL_PORT,
        USER: process.env.MAIL_USER,
        PASS: process.env.MAIL_PASS,
    },
};

module.exports = CONFIG;