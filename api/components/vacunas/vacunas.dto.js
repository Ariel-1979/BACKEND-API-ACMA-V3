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

const createSanidad = async (lugar, body) => {
	try {
		return {
			statusCode: 200,
			data: await Model.createSanidad(lugar, body)
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear vacuna' };
	}
};

const updateSanidad = async (lugar, body, id) => {
	try {
		return {
			statusCode: 200,
			data: await Model.updateSanidad(lugar, body, id)
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar vacuna' };
	}
};

const getSanidadById = async (lugar, id) => {
	try {
		return {
			statusCode: 200,
			data: await Model.getSanidadById(lugar, id)
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error al obtener vacuna' };
	}
};

export default {
	getSanidad,
	createSanidad,
	updateSanidad,
	getSanidadById
};
