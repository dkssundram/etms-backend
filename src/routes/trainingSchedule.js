const express = require('express');
const router = express.Router();
const trainingScheduleController = require('../controllers/trainingScheduleController');

// POST request to create a new training schedule
router.post('/', trainingScheduleController.createTrainingSchedule);
router.get('/', trainingScheduleController.fetchTrainingSchedule)

router.get('/roleId/:roleId',trainingScheduleController.getAllTrainingSchedulesbyroleId)
// GET request to retrieve all scheduled trainings
// router.get('/', trainingScheduleController.getAllScheduledTrainings);


module.exports = router;
