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

const putHorseById = async (req, res) => {
	try {
		const { id } = req.params;
		const { body: horse } = req;
		console.log(horse, 'Horse');
		const { statusCode, data } = await HorsesDto.putHorseById(id, horse);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getSelectOptions = async (_req, res) => {
	try {
		const { statusCode, data } = await HorsesDto.getSelectOptions();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllHorses,
	getHorseById,
	putHorseById,
	getSelectOptions
};
