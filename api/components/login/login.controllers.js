import services from './login.services.js';

const loginAuth = async (req, res) => {
	const { mail, clave } = req.body;

	try {
		const { statusCode, data } = await services.loginAuth(mail, clave);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	loginAuth
};
