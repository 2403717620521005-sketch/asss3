const express = require('express');
const app = express();
const PORT = 3000;

const logger = require('./middleware/logger');
const studentRoutes = require('./routes/students');

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/students', studentRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n  Student Management API running on http://localhost:${PORT}\n`);
});
