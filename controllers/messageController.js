import models from '../models/index';

import userToken from '../helper/token';

exports.getAllMessages = async (req, res, next) => {

    try {
      
        const message = await models.Message.findAll({ where: { userId: 2 }});
        res.status(200).json( {'message':'all Messages', message });
    } catch (err) {
      next(err);
    }
  }


exports.createMessage = async (req, res, next) => {

    try {
        const { messageContent } = req.body;

        const userAuthId =parseInt(userToken.userIdFromToken(req.header('Authorization')),10);

        const message = await models.Message.create({

            messageContent: messageContent, 
            userId: userAuthId,
            createdAt: new Date(),
            updatedAt: new Date()
          })
          res.status(201).json({'message':'Message created  Well',message: message});
    }
    catch (err) {

        next(err);
    }

}