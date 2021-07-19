import models from '../../models/index';

import { config } from 'dotenv';

import BcryptService from '../../helper/hashpassword';

import userToken from '../../helper/token';

// config();

exports.login = async(req, res, next) => {
    const { email, password } = req.body;
        
    const  user = await models.User.findOne( { where: {email:email} });
      
    try{  
    
        if (user){

          const newpassword = BcryptService.comparePassword(password,user.password);

          if(!newpassword){

            return res.status(401).json({
              message:"Wrong password or Email"
            })

          };
          const token = userToken.generateToken(user.id,user.email);

          return res.status(200).json({messahge:'Logged in successfully!',
            token,
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          });
        }
        else{

          return res.status(401).json({
            message:"Sorry we can't offer You! with this email"
          })
          
        }
        
      }catch(err){
          console.log(err);
      }
  
  }
