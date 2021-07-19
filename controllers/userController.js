import models from '../models/index';

  exports.getAllUsers =async (req, res, next) => {

    try {
      const user = await models.User.findAll();
      res.status(200).json( {'message':'user Fetched Well',user });
    } catch (err) {
      next(err);
    }
  }


  exports.updateUser = async (req, res, next)=>{

    const { firstName, lastName } = req.body;

    const userId = req.params.id;

    try{

      const  user = await models.User.findOne( { where: {id:userId} });

      if(!user) return res.send('User not found');

        await user.update({
        firstName: firstName,
        lastName: lastName
      })

    res.status(200).json({
        message:"User account updated success full", data: user
      })

    }
    catch (err) {
      console.log(err)

  }   


  }
 