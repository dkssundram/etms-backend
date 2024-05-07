// backend/src/routes/assessmentRoutes.js

const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');

router.get('/', assessmentController.getAssessmentScore);
router.post('/', assessmentController.createAssessmentScore);
router.put('/:id', assessmentController.updateAssessmentById);
router.get('/:userId', assessmentController.getAssessmentScoresByUserId);
router.delete('/:id', assessmentController.deleteAssessmentById);

module.exports = router;
