import Models from './login.models.js';
import jwt from 'jsonwebtoken';

const loginAuth = async (mail, clave) => {
	try {
		const user = await Models.loginAuth(mail, clave);
		console.log(user, 'user');
		if (user.length > 0) {
			console.log('pasando');
			const token = jwt.sign({ user }, process.env.SECRET_TOKEN, {
				expiresIn: '1h'
			});
			return {
				statusCode: 200,
				data: user
			};
		}

		if (user.length === 0) {
			return { statusCode: 404, data: [], message: 'Usuario no encontrado' };
		}
	} catch (error) {
		return { statusCode: 500, data: [], message: 'Error de Servidor' };
	}
};

export default {
	loginAuth
};
