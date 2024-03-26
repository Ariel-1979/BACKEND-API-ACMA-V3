import Dto from './caninos.dto.js';

const getAllCaninos = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getAllCaninos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getCaninoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getCaninoById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default { getAllCaninos, getCaninoById };
