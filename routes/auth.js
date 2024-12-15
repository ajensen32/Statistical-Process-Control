// Use ES Module syntax
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Register Endpoint
router.post('/register', registerUser);

// Login Endpoint
router.post('/login', loginUser);

// Export the router
export default router;
