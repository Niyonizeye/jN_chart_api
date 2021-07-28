import models from '../models/index';

import userToken from '../helper/token';

import path from 'path';

import http from 'http';

const server = http.createServer();

import { Server } from 'socket.io';

const io = new Server(server);

exports.getAllMessages = async (req, res, next) => {

    try {

        const userAuthId =parseInt(userToken.userIdFromToken(req.header('Authorization')),10);
      
        const message = await models.Message.findAll({ where: { writterId: userAuthId }});
        // res.sendFile(path.join(__dirname+'./../index.html'));
        res.status(200).json( {'message':'all Messages', message });
    } catch (err) {
      next(err);
    }
  }

exports.deleteMessage = async (req, res, next) =>{

    const userAuthId =parseInt(userToken.userIdFromToken(req.header('Authorization')),10);

    const messageId = req.params.messageId;

    try {
      const message= await models.Message.findByPk(messageId);
  
      if (!message) {
        const error = new Error('Could not find message.');
        error.statusCode = 404;
        throw error;
      }

      // console.log(message);

      await models.Message.destroy({where: {
        id: messageId 
     }});

      return res.status(200).json({ 'message':'Message Deleted'});

  } catch(err){

    next(err);

  }

}


exports.createMessage = async (req, res, next) => {

    try {
        const { messageContent } = req.body;

        const userAuthId =parseInt(userToken.userIdFromToken(req.header('Authorization')),10);
        
        const receiverId = req.params.receiverId;
        
        const message = await models.Message.create({

            messageContent: messageContent, 
            writterId: userAuthId,
            receiverId: receiverId, 
            createdAt: new Date(),
            updatedAt: new Date()
          })
          // io.emit('message', { action: 'create' });

          // res.writeHead(301,{Location: 'http://w3docs.com/'});

          // res.end();
          
          res.status(201).json({'message':'Message created  Well',message: message});
    }
    catch (err) {

        next(err);
    }

}