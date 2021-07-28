import express from 'express';

import messageController from '../controllers/messageController';

import messageValidationInput from '../middleware/messageValidation';

import isauth from '../middleware/is-auth';


const router = express.Router();

// message routes

router.get('/inbox',isauth,messageController.getAllMessages);

router.post('/sendmessage/:receiverId',isauth,messageValidationInput,messageController.createMessage);

router.delete('/deletemessage/:messageId',isauth,messageController.deleteMessage);

// router.post('/sendmessage/:receiverId',messageValidationInput,messageController.createMessage);





module.exports = router;