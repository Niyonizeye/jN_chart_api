import express from 'express';


// import loginController from '../controllers/authController/login';

import signupController from '../controllers/authController/signup';

import checkUserExists from '../middleware/checkexistuser';

import userSignupValidationInput from '../middleware/signupvalidation';

import userController from '../controllers/userController'

const router = express.Router();

// auth routes

router.post('/signup',userSignupValidationInput ,checkUserExists,signupController.signup);

// router.post('/login', loginController.login);

// user routes

router.get('/allusers', userController.getAllUsers);

router.put('/update/:id',userSignupValidationInput ,userController.updateUser);



module.exports = router;