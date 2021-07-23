
import models from '../models/index';

import userToken from '../helper/token';

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the user is logged in
 */

const checkAuth = async(req, res, next)=> {

	const authToken = req.header('Authorization');

	if (!authToken) {

		return res.status(400).json({message:'Your token is not generated'});

	}
	try{
		const userId =parseInt(userToken.userIdFromToken(req.header('Authorization')),10);

        // console.log(userId);

		const user = await models.User.findOne({ where: { id:userId } });

		if (!user) {

			return res.status(401).json({ message: 'Unauthorized,create account first'});
	
		}
		next();
    }
	catch (error) {
		console.log(error);
	}
}

export default checkAuth;