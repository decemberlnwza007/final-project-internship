const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/disable', userController.updateUserStatusDisable);
router.put('/users/enable', userController.updateUserStatusEnable);
router.post('/users/login', userController.login);

module.exports = router;