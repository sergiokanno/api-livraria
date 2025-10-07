/* eslint-disable no-unused-vars */
import express from 'express';
import routes from './routes/index.js';
// import unleash from '../services/unleash.js';
// Update the path below if unleash.js exists elsewhere, or create the file if missing.

const app = express();
app.use(express.json());
routes(app);

export default app;
