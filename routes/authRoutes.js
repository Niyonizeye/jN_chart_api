import express from 'express';

import userController from '../controllers/userController';

const router = express.Router();

router.get('/allusers', userController.getAllUsers);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;