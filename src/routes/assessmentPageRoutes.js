const express = require('express');
const router = express.Router();
const AssessmentPageController = require('../controllers/AssessmentPageController');

router.post('/', AssessmentPageController.createAssessmentPage);
router.get('/:trainingId', AssessmentPageController.getAssessmentPageById);
router.put('/:id', AssessmentPageController.updateAssessmentPage);
router.delete('/:id', AssessmentPageController.deleteAssessmentPage);

module.exports = router;
