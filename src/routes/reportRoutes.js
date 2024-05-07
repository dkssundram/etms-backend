// backend/src/routes/reportRoutes.js

const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/:id', reportController.getReportById);
router.post('/', reportController.generateReport);

module.exports = router;
