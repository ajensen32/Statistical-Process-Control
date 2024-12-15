<h1>SPC Measurement System - Project Submission</h1>

<h2>Overview</h2>
<p>
  This project implements the backend logic for the SPC Measurement System. The backend allows users to register, log in, log out, and submit measurements, while ensuring secure and seamless communication between the frontend and backend.
</p>

<h2>Technologies Used</h2>
<ul>
  <li>Backend: Node.js, Express.js</li>
  <li>Database: MongoDB (Mongoose ODM)</li>
  <li>Authentication: JWT (JSON Web Token)</li>
  <li>Frontend Integration: Fetch API, JavaScript</li>
</ul>

<h2>Backend Features Implemented</h2>
<ul>
  <li><strong>User Authentication:</strong>
    <ul>
      <li>Registration with hashed passwords using bcrypt.js.</li>
      <li>Login with JWT-based authentication and token generation.</li>
      <li>Secure logout by clearing JWT tokens on the client side.</li>
    </ul>
  </li>

  <li><strong>Measurement Submission:</strong>
    <ul>
      <li>Authorized users can submit measurements after logging in.</li>
      <li>Each measurement is securely linked to the logged-in user.</li>
      <li>Measurements are stored in MongoDB with timestamps.</li>
    </ul>
  </li>

  <li><strong>Backend Security:</strong>
    <ul>
      <li>JWT-based authentication for protected routes.</li>
      <li>Password hashing using bcrypt.js.</li>
      <li>Secure data transmission using REST API principles.</li>
    </ul>
  </li>
</ul>

<h2>How the Frontend Communicates with the Backend</h2>
<ul>
  <li>Using the Fetch API in the frontend, requests are sent to the backend API endpoints:</li>
  <ul>
    <li><code>POST /auth/register</code> - Registers a new user.</li>
    <li><code>POST /auth/login</code> - Logs in a user and generates a JWT token.</li>
    <li><code>POST /measurements</code> - Submits a measurement (requires JWT token).</li>
  </ul>
  <li>The JWT token is stored securely in the browser's localStorage after login.</li>
  <li>Protected endpoints require the token in the `Authorization` header for secure access.</li>
</ul>

<h2>How to Run the Project</h2>
<ol>
  <li><strong>Clone the Repository:</strong>
    <pre><code>git clone https://github.com/your-repository-link.git</code></pre>
  </li>

  <li><strong>Navigate to the Project Directory:</strong>
    <pre><code>cd spc-measurement-system</code></pre>
  </li>

  <li><strong>Install Dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>

  <li><strong>Create a `.env` File:</strong>
    <ul>
      <li>Add the following environment variables:</li>
      <pre><code>
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
      </code></pre>
    </ul>
  </li>

  <li><strong>Start the Backend Server:</strong>
    <pre><code>npm start</code></pre>
  </li>

  <li><strong>Visit the Application:</strong>
    <ul>
      <li>Open the following URL in your browser:</li>
      <pre><code>http://localhost:5000</code></pre>
    </ul>
  </li>
</ol>

<h2>Expected Functionality</h2>
<ul>
  <li>Users can register and log in using the provided forms.</li>
  <li>Logged-in users can submit measurements securely.</li>
  <li>Unauthorized users attempting to submit measurements will be blocked.</li>
</ul>


