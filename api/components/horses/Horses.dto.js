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

const putHorseById = async (horse, id) => {
	try {
		await Models.putHorseById(horse, id);
		const rows = await Models.getHorseById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getSelectOptions = async () => {
	try {
		return {
			statusCode: 200,
			data: {
				razas: await Models.getHorseRazas(),
				alojamiento: await Models.getHorseAlojamiento(),
				estado: await Models.getHorseEstado(),
				pelaje: await Models.getHorsePelaje(),
				sexo: await Models.getHorseSexo(),
				tamanio: await Models.getHorseTamanio()
			}
		};
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	getAllHorses,
	getHorseById,
	putHorseById,
	getSelectOptions
};
