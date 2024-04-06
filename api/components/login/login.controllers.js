import Dto from './login.dto.js';

const loginAuth = async (req, res) => {
	const { mail, clave } = req.body;

	try {
		const { statusCode, data } = await Dto.loginAuth(mail, clave);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	loginAuth
};
