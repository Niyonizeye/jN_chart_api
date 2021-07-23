import { celebrate, Joi } from 'celebrate';

const MessageValidation =  celebrate({

        body: {

        messageContent: Joi.string().required() 
       
        
        },
    })
   

export default  MessageValidation ;