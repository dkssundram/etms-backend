
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Role = require('../models/Role');
const Profie = require('../models/Profile');
const emailService = require('../utils/emailService');

const userController = {
  createUser: async (req, res) => {
    const { name, email, passStatus, createdAt, updatedAt, roleId } = req.body;


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
      const newUser = await User.create({name, email, password: hashedPassword, passStatus, createdAt, updatedAt, roleId });

      // Send email with login details
      // await emailService.sendEmail(email, 'Account Created', `Your account has been created. Please login using this email address and your password.`);

      const websiteLink = 'http://localhost:3000/'; // Replace with your website link
      await emailService.sendEmail(email, 'Account Created', `Your account has been created. Please login using this email address and your password. Username: ${email}, Password: ${tempPassword}. Login here: ${websiteLink}.\n\nNote: Sending passwords via email is not secure. Please ensure you change your password after logging in.`);


      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  editUser: async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    
    const { name, role } = req.body;
    console.log(name)
    // Find the user by id
    const user = await User.findOne({ where: { id } });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Update user's name and role
    user.name = name;
    user.role = role;

    // Send response
    res.status(200).json({ message: 'User updated successfully', user });
},

  deleteUser: async (req, res) => {
    const userId = req.params.userId;

    try {
        const deletedRows = await User.destroy({ where: { id: userId } });
        if (deletedRows > 0) {
            return `User with ID ${userId} deleted successfully`;
        } else {
            return `User with ID ${userId} not found`;
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
  },

   fetchAllUsers: async(req, res) => {
    try {
      const users = await User.findAll(); // Assuming you are using Sequelize for database operations
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },


   fetchTrainerNames: async (req, res)=> {
    try {
      const trainerRole = await Role.findOne({ where: { name: 'instructor' } });
      if (!trainerRole) {
        return res.status(404).json({ error: 'Trainer role not found' });
      }

      const trainers = await User.findAll({
        where: { roleId: trainerRole.id },
        attributes: ['id', 'name']
      });

      res.status(200).json(trainers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch trainers' });
    }
  },

  fetchUserbyId: async (req, res) => {
    try {
        const userId = req.query.userId;
        const user = await Profie.findOne({ where: { userId } });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Assuming you have a User model defined with Sequelize
  // app.put('/api/user/update/:id', 
  updateUserbyId: async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await Profie.findOne(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Update the user with the request body
        await user.update(req.body);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  },

  

  // changePassword: async (req, res) => {
  //   const { email, currentPassword, newPassword } = req.body;

  //   try {
  //     // Find the user
  //     const user = await User.findOne({ where: { email } });

  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }

  //     // Check if the current password is correct
  //     const validPassword = await bcrypt.compare(currentPassword, user.password);

  //     if (!validPassword) {
  //       return res.status(400).json({ message: 'Invalid current password' });
  //     }

  //     // Hash the new password
  //     const hashedPassword = await bcrypt.hash(newPassword, 10);

  //     // Update the user's password
  //     await User.update({ password: hashedPassword }, { where: { email } });

  //     res.status(200).json({ message: 'Password changed successfully' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // }


  // Import User model and bcrypt

 changePassword : async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;
  console.log(email);
  try {
    // Find the user
    const user = await User.findOne({ where: { email } });
    console.log(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the current password is correct
    const validPassword = await bcrypt.compare(currentPassword, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid current password' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await User.update({ password: hashedPassword, passStatus: 'true' }, { where: { email } });

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
};

module.exports = userController;