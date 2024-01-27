import HorsesDto from './Horses.dto.js';

const getAllHorses = async (_req, res) => {
	try {
		const { statusCode, data } = await HorsesDto.getAllHorses();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getHorseById = async (req, res) => {
	try {
		const { id } = req.params;
		const { statusCode, data } = await HorsesDto.getHorseById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllHorses,
	getHorseById
};
