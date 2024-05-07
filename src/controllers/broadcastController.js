const BroadcastMessage = require('../models/BroadcastMessage');

const broadcastController = {
  broadcastAll: async (req, res) => {
    const { message } = req.body;
    try {
      const broadcastMessage = await BroadcastMessage.create({ message });
      res.status(201).json(broadcastMessage);
    } catch (error) {
      console.error('Error broadcasting message:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  getAllBroadcasts: async (req, res) => {
    try {
      const broadcastMessages = await BroadcastMessage.findAll();
      res.status(200).json(broadcastMessages);
    } catch (error) {
      console.error('Error fetching broadcast messages:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = broadcastController;
