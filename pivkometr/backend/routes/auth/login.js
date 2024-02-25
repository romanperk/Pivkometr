// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists in database
  // Compare hashed password
  // Generate JWT token

  const token = jwt.sign({ email }, 'secretkey', { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
