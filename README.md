<h1>SPC Measurement System</h1>
<h2>Deployement link: https://statistical-process-control.onrender.com/</h2>

<h2>Project Description</h2>
<p>The Statistical Process Control (SPC) Measurement System is a comprehensive web-based application designed to monitor and control manufacturing processes through statistical methods. This project includes both backend and frontend components to provide a robust solution for user authentication, measurement recording, and data visualization.</p>

<h2>Installation Instructions</h2>
<ol>
<li><strong>Clone the Repository</strong>:
  <pre><code>git clone https://github.com/your-repository-link.git</code></pre>
</li>
<li><strong>Navigate to the Project Directory</strong>:
  <pre><code>cd Statistical-Process-Control</code></pre>
</li>
<li><strong>Install Dependencies</strong>:
  <pre><code>npm install</code></pre>
</li>
<li><strong>Create a <code>.env</code> File</strong>:
  <pre><code>
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
  </code></pre>
</li>
<li><strong>Start the Backend Server</strong>:
  <pre><code>npm start</code></pre>
</li>
<li><strong>Visit the Application</strong>:
  Open the following URL in your browser:
  <pre><code>http://localhost:5000</code></pre>
</li>
</ol>

<h2>Usage</h2>
<ul>
<li><strong>User Registration</strong>: Users can register with a unique username and password.</li>
<li><strong>User Login</strong>: Users can log in and receive a JWT token for session management.</li>
<li><strong>Measurement Submission</strong>: Authenticated users can submit measurements.</li>
<li><strong>Data Visualization</strong>: Measurements are visually represented on the frontend, providing real-time feedback.</li>
</ul>

<h2>Features</h2>
<ul>
<li><strong>Registration</strong>: Users can register with a unique username and password. Passwords are securely hashed using bcrypt.</li>
<li><strong>Login</strong>: Users can log in with their credentials. Upon successful login, a JWT token is generated for session management.</li>
<li><strong>Protected Routes</strong>: Certain routes are protected and require a valid JWT token to access.</li>
<li><strong>Submit Measurements</strong>: Authenticated users can submit measurements, which are stored in a MongoDB database.</li>
<li><strong>User Association</strong>: Each measurement is linked to the user who submitted it, ensuring data integrity and traceability.</li>
<li><strong>Dynamic UI</strong>: The frontend provides a dynamic interface for users to submit measurements and view real-time feedback.</li>
<li><strong>Visual Feedback</strong>: Measurements are visually represented using dynamic elements like bars and points, providing immediate feedback to users.</li>
</ul>

<h2>Architecture Overview</h2>
<pre>
Statistical-Process-Control/
├── .env
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── measurementController.js
├── LICENSE
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Measurement.js
│   └── User.js
├── package.json
├── public/
│   ├── components/
│   │   └── header.html
│   ├── images/
│   ├── index.html
│   ├── scripts/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── main.js
│   │   ├── measurements.js
│   │   ├── script.js
│   │   └── ui.js
│   ├── styles/
│   │   └── styles.css
│   └── tsconfig.json
├── README.md
├── routes/
│   ├── auth.js
│   └── measurements.js
└── server.mjs
</pre>

<h2>Technologies Used</h2>

<h3>Backend</h3>
<ul>
<li><strong>Node.js</strong>: JavaScript runtime for building the server-side application.</li>
<li><strong>Express.js</strong>: Web framework for handling HTTP requests and routing.</li>
<li><strong>MongoDB</strong>: NoSQL database for storing user and measurement data.</li>
<li><strong>Mongoose</strong>: ODM for MongoDB, providing a schema-based solution to model data.</li>
<li><strong>JWT</strong>: JSON Web Tokens for secure user authentication.</li>
<li><strong>bcrypt</strong>: Library for hashing passwords.</li>
</ul>

<h3>Frontend</h3>
<ul>
<li><strong>HTML/CSS</strong>: Markup and styling for the web interface.</li>
<li><strong>JavaScript</strong>: Client-side scripting for dynamic interactions.</li>
<li><strong>Fetch API</strong>: For making asynchronous HTTP requests to the backend.</li>
</ul>

<h2>API Documentation</h2>
<p>API endpoints are provided for user registration, login, and measurement submission. Below is a brief overview of the available endpoints:</p>
<ul>
<li><strong>POST /api/auth/register</strong>: Register a new user.</li>
<li><strong>POST /api/auth/login</strong>: Log in an existing user.</li>
<li><strong>POST /api/measurements</strong>: Submit a new measurement (requires authentication).</li>
</ul>

<h2>Testing</h2>
<p>Unit tests are written using Mocha and Chai for the backend. To run the tests, use the following command:</p>
<pre><code>npm test</code></pre>


<h2>Contact</h2>
<p>If you have any questions, feel free to reach out at jensenalex3022@gmail.com.</p>

