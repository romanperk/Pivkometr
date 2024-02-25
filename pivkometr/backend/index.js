// index.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
