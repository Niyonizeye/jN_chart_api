import models from '../../models/index';

import { config } from 'dotenv';

import BcryptService from '../../helper/hashpassword';

import userToken from '../../helper/token';

config();

  exports.signup = async (req, res, next) => {
    try{
      const { firstName, lastName,email } = req.body;

      const hashedPassword =  BcryptService.hashPassword(req.body.password);

      const user = await models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      })

    //   console.log(user.id);

      const token = userToken.generateToken(user.id,user.email);


      res.status(201).json({'message':'user created  Well',token: token,user:user });
    }
    catch (err) {
        console.log(err)

    }
  }