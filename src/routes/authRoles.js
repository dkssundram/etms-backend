// backend/src/routes/authRoles.js

const express = require('express');
const router = express.Router();
const roleControllers = require('../controllers/roleControllers');

router.get('/', roleControllers.getRole);
// router.get('/fetchAll', roleControllers.getRoles)
// router.post('/', reportController.generateReport);

module.exports = router;
