// // Show Logged-In UI
// export function showLoggedInUI(username) {
//     // Display user info
//     document.getElementById('user-info').style.display = 'block';
//     document.getElementById('username-display').innerText = username;
  
//     // Hide login and register sections
//     document.getElementById('register-section').style.display = 'none';
//     document.getElementById('login-section').style.display = 'none';
//   }
  
//   // Reset to Show All Sections
//   export function showLoggedOutUI() {
//     // Show all sections
//     document.getElementById('register-section').style.display = 'block';
//     document.getElementById('login-section').style.display = 'block';
//     document.getElementById('user-info').style.display = 'block'; // Ensure it's visible
//     document.getElementById('username-display').innerText = 'Guest';
//   }