import Models from './Horses.models.js';

const getAllHorses = async () => {
	try {
		const rows = await Models.getAllHorses();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getHorseById = async id => {
	try {
		const rows = await Models.getHorseById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	getAllHorses,
	getHorseById
};
