import Dto from './estadistica.dto.js';

const getEstadistica = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getEstadistica();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getEstadistica
};
