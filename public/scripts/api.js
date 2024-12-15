export async function apiRequest(endpoint, method, data = {}) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  
    const response = await fetch(endpoint, {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(data) : null,
    });
  
    const result = await response.json();
    return result;
  }