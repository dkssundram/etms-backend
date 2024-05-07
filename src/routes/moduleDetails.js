// routes/moduleDetail.js
const express = require('express');
const router = express.Router();
const moduleDetailController = require('../controllers/moduleDetailController');

router.get('/', moduleDetailController.getAllModuleDetails);
router.get('/training/:trainingId', moduleDetailController.getModuleDetailByTrainingId);
router.put('/training/:trainingId', moduleDetailController.updateModuleDetailByTrainingId);
router.post('/', moduleDetailController.createModuleDetail);
router.put('/:id', moduleDetailController.updateModuleDetail);
router.delete('/:id', moduleDetailController.deleteModuleDetail);

module.exports = router;
