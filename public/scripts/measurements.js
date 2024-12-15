import { apiRequest } from './api.js';

export async function sendMeasurement() {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('You must be logged in to take a measurement.');
    return;
  }

  const value = document.getElementById('code').value.trim();

  if (!value || isNaN(value)) {
    alert('Please enter a valid measurement.');
    return;
  }

  try {
    const result = await apiRequest('/measurements', 'POST', { value });

    if (result.measurement) {
      alert(`Measurement Recorded: ${result.measurement.value}`);
      console.log('Recorded Measurement:', result.measurement);
    } else {
      alert(result.error || 'Failed to record measurement.');
    }
  } catch (error) {
    console.error('Error recording measurement:', error);
  }
}
