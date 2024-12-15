import mongoose from 'mongoose';

const MeasurementSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: [true, 'Measurement value is required'],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Measurement', MeasurementSchema);