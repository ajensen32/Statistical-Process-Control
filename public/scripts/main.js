import { login, register, logout } from './auth.js';
import { sendMeasurement } from './measurements.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("App Initialized");

  // Attach Event Listeners
  document.getElementById('login-button').addEventListener('click', async () => {
    await login();
  });

  document.getElementById('register-button').addEventListener('click', register);
  document.getElementById('logout-button').addEventListener('click', () => {
    logout();
    showLoggedOutUI();  // Toggle UI on logout
  });

  document.getElementById('submit-measurement').addEventListener('click', sendMeasurement);

  // Ensure Initial State
  showLoggedOutUI();
});

export function showLoggedInUI(username) {
  console.log('Logged in as:', username);

  // Show Logout and Measurement Section
  document.getElementById('user-info').classList.add('active');
  document.getElementById('username-display').innerText = username;

  // Hide Register & Login Sections
  document.getElementById('register-section').classList.remove('active');
  document.getElementById('login-section').classList.remove('active');
}

export function showLoggedOutUI() {
  console.log('Logged out');

  // Show Register & Login Sections
  document.getElementById('register-section').classList.add('active');
  document.getElementById('login-section').classList.add('active');

  // Hide Logout and Measurement Section
  document.getElementById('user-info').classList.remove('active');
}
