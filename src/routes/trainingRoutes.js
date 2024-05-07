// backend/src/routes/trainingRoutes.js

const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');
const { getAllTrainings, getTrainingById } = require('../controllers/trainingController');


router.get('/', getAllTrainings);
router.get('/:id', trainingController.getTrainingById);
router.post('/', trainingController.createTraining);
router.put('/:id', trainingController.updateTrainingById);
router.delete('/:id', trainingController.deleteTrainingById);

module.exports = router;
