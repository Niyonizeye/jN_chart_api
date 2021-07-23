import express from 'express';

import messageController from '../controllers/messageController';

import messageValidationInput from '../middleware/messageValidation';

import isauth from '../middleware/is-auth';


const router = express.Router();

// message routes

router.get('/allmessage',messageController.getAllMessages);

router.post('/sendmessage',isauth,messageValidationInput,messageController.createMessage);





module.exports = router;