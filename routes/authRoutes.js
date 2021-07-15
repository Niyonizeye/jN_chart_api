import express from 'express';

import userController from '../controllers/userController';

import checkUserExists from "../middleware/checkexistuser"

const router = express.Router();

router.get('/allusers', userController.getAllUsers);

router.post('/signup', checkUserExists,userController.signup);

router.post('/login', userController.login);

module.exports = router;