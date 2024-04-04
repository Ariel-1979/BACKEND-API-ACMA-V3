import Dto from './login.dto.js';

const loginAuth = async (req, res) => {
	try {
		const { statusCode, data } = await Dto.loginAuth(req.body);
		res.status(statusCode).json({ data });
	} catch (error) {
		throw error;
	}
};

export default {
	loginAuth
};
