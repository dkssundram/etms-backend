const express = require('express');
const router = express.Router();
const { updateProgress, getProgress } = require('../controllers/progressController');

// Update progress for a user and training module
router.put('/:userId/progress/:trainingId', updateProgress);
router.get('/:userId/progress/:trainingId', getProgress);

module.exports = router;
