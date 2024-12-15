// controllers/measurementController.js
import Measurement from '../models/Measurement.js';

// Add a New Measurement (Protected)
export const addMeasurement = async (req, res) => {
  const { value } = req.body;

  if (!value && value !== 0) {
    return res.status(400).json({ error: 'Measurement value is required' });
  }

  try {
    const newMeasurement = await Measurement.create({
      value,
      userId: req.user.id, // Extracted from the JWT token
    });

    res.status(201).json({
      message: 'Measurement recorded successfully',
      measurement: newMeasurement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
