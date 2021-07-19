import { celebrate, Joi } from 'celebrate';

const signupValidation =  celebrate({

        body: {

        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required()
        
        },
    })
   

export default  signupValidation ;