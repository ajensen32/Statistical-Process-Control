import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import open from 'open';
import authRoutes from './routes/auth.js';
import measurementRoutes from './routes/measurements.js';


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// Routes


app.use('/auth', authRoutes);
app.use('/measurements', measurementRoutes);

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  open(`http://localhost:${PORT}`);
});
