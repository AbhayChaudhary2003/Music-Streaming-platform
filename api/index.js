// Vercel Serverless Function entry point
// Wraps the Express app for serverless execution

require('dotenv').config();
const app = require('../backend/src/app');
const connectDB = require('../backend/src/db/db');

// Connect to MongoDB (connection is cached across warm invocations)
connectDB();

module.exports = app;
