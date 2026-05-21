const express = require('express');
const app = express();
const PORT = 3000;

const logger = require('./middleware/logger');
const studentRoutes = require('./routes/students');


app.use(express.json());
app.use(logger);


app.use('/students', studentRoutes);


app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});


app.listen(PORT, () => {
  console.log(`\n  Student Management API running on http://localhost:${PORT}\n`);
});
