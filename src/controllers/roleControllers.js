// backend/src/controllers/roleController.js

const Role = require('../models/Role');

const getRole = async (req, res) => {
  try {
    const role = await Role.findAll();
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getRole
};
