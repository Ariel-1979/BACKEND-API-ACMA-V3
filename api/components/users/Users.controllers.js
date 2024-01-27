import UserDto from './User.dto.js';

const getAllUsers = async (req, res) => {
	try {
		const { statusCode, data } = await UserDto.getAllUsers();
		res.status(statusCode).json(data);
	} catch (error) {
		console.error('Error en getAllUsers:', error);
		res.status(500).json({ error: 'Hubo un error al obtener los usuarios.' });
	}
};

export default {
	getAllUsers
};
