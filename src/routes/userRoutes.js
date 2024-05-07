// backend/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.post('/changePassword', userController.changePassword);
router.get('/fetchAll', userController.fetchAllUsers);
router.get('/fetchTrainers', userController.fetchTrainerNames);
router.delete('/delete/:userId', userController.deleteUser);
router.put('/edit/:id',userController.editUser);
router.get('/userbyid', userController.fetchUserbyId)
router.put('/update/:id', userController.updateUserbyId)




module.exports = router;
