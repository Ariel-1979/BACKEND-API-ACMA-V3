import Models from './caninos.models.js';

const createCanino = async canino => {
	try {
		await Models.createCanino(canino);
		return { statusCode: 201, data: 'Canino creado' };
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear canino' };
	}
};

const getAllCaninos = async () => {
	try {
		const rows = await Models.getAllCaninos();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getCaninoById = async id => {
	try {
		const rows = await Models.getCaninoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putCaninoById = async (canino, id) => {
	try {
		await Models.putCaninoById(canino, id);
		return { statusCode: 200, data: 'Canino actualizado' };
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar canino' };
	}
};

const getRazasYEstadosCaninos = async () => {
	try {
		const rows = await Models.getRazasYEstadosCaninos();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const createFotoById = async (id, detalle, foto) => {
	try {
		await Models.createFotoById(id, detalle, foto);
		return { statusCode: 201, data: 'Foto creada' };
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear foto' };
	}
};

const deleteFotoById = async id => {
	try {
		await Models.deleteFotoById(id);
		return { statusCode: 200, data: 'Foto eliminada' };
	} catch (error) {
		return { statusCode: 500, data: 'Error al eliminar foto' };
	}
};

const getFotosById = async id => {
	try {
		const rows = await Models.getFotosById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	createCanino,
	getAllCaninos,
	getCaninoById,
	getRazasYEstadosCaninos,
	putCaninoById,
	createFotoById,
	deleteFotoById,
	getFotosById
};
