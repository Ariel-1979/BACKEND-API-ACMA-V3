import Models from './adoptantes.model.js';

const getAdoptantes = async () => {
	try {
		const rows = await Models.getAdoptantes();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getAdoptanteById = async id => {
	try {
		const rows = await Models.getAdoptanteById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const createAdoptante = async adoptante => {
	try {
		const rows = await Models.createAdoptante(adoptante);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const updateAdoptanteById = async (adoptante, id) => {
	try {
		const rows = await Models.updateAdoptanteById(adoptante, id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const deleteAdoptanteById = async id => {
	try {
		const rows = await Models.deleteAdoptanteById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	getAdoptantes,
	getAdoptanteById,
	createAdoptante,
	updateAdoptanteById,
	deleteAdoptanteById
};
