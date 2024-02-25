// routes/profile.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Auth error: Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Auth error: Invalid token' });
  }
};

router.get('/profile', verifyToken, (req, res) => {
  // Fetch user data from database using req.user.email
  // Return user profile data
});

module.exports = router;
