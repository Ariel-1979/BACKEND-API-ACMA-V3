import Dto from './vacunas.dto.js';

const getSanidad = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getSanidad();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getSanidad
};
