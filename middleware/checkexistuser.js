
import models from '../models/index';

/**
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object} function to check if the user exists
 */

const checkUserExists=async(req, res, next)=> {
	const { email } = req.body;
	const user = await models.User.findOne( { where: {email:email} });

	if (user) {
		return	res.send('Email already taken try again');
	
	}
	next();
}
export default checkUserExists;