const express = require('express');
const router = express.Router();
const broadcastController = require('../controllers/broadcastController');

// Route to broadcast a message to all users
router.post('/', broadcastController.broadcastAll);
router.get('/', broadcastController.getAllBroadcasts);

module.exports = router;
