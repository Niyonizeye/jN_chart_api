import models from '../models/index';

import { Op } from 'sequelize';

import Token from '../helper/token';
  
  exports.getAllUsers =async (req, res, next) => {

    try {
      const user = await models.User.findAll();
      res.status(200).json( {'message':'user Fetched Well',user });
    } catch (err) {
      next(err);
    }
  
  }

  exports.signup = async (req, res, next) => {
    try{
      const { firstName, lastName,email,password } = req.body;
      const user = await models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      res.status(201).json({'message':'user craeted  Well',user});
    }
    catch (err) {
        console.log(err)

    }
  }

  exports.login = async(req, res, next) => {
      
    try{
          const { email, password } = req.body;
          const  user = await models.User.findOne({ where: { [Op.and]: [{ email:email},{ password: password }]}});
          if(!user){
              res.status(404).json({
                  Message: 'Email or password is incorrect'
              })
          }
          else{
            // const token = Token.generateAuthToken(user.id, user.email);
            
              return res.status(200).json({
                  // token: token,
                  Message: 'User signed in successfully'
              });
          }
  
      }catch(err){
          console.log(err);
      }
  
  }
 