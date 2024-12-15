// routes/measurements.js
import express from 'express';
import { addMeasurement } from '../controllers/measurementController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /measurements - Protected Route
router.post('/', protect, addMeasurement);

export default router;
