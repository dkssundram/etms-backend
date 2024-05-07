// backend/src/routes/authRoutes.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/forgot-password', authService.forgotPassword);
router.post('/reset-password', authService.resetPassword);

router.get('/login', async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
  
    try {
      const decoded = jwt.verify(token, 'xapi');
      const user = await User.findOne({ where: { id: decoded.id, email: decoded.email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({ message: 'Unauthorized' });
    }
  });

module.exports = router;
