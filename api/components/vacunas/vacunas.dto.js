import Model from './vacunas.models.js';

const getSanidad = async () => {
	try {
		return {
			statusCode: 200,
			data: await Model.getSanidad()
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error al obtener vacunas' };
	}
};

export default {
	getSanidad
};
