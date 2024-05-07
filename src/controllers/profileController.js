const bcrypt = require('bcrypt');
const User = require('../models/User');
const Role = require('../models/Role');
const Profie = require('../models/Profile');
const emailService = require('../utils/emailService');
const Profile = require('../models/Profile');

const profileController = {

createProfile: async (req, res) => {
    const { userId, email, passStatus, createdAt, updatedAt, roleId } = req.body;
    try {
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const password = Math.random().toString(36).slice(-8);
      const tempPassword = password;
      console.log(password)
      console.log(tempPassword)
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user
      const newUser = await Profile.create({userId, bio, createdAt, updatedAt });
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = profileController;