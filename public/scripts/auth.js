import { apiRequest } from './api.js';
import { showLoggedInUI } from './main.js';

// Register User
export async function register() {
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value.trim();

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  try {
    const result = await apiRequest('/auth/register', 'POST', { username, password });
    alert(result.message || result.error);
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

// Login User
export async function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  try {
    const result = await apiRequest('/auth/login', 'POST', { username, password });

    if (result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('username', username);

      alert('Login successful!');
      showLoggedInUI(username);  // Toggle UI on login
    } else {
      alert(result.error || 'Login failed!');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Logout User
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  alert('Logged out successfully!');
}
