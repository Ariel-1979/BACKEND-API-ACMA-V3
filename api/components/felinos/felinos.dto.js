import Models from './felinos.models.js';

const createFelino = async felino => {
	try {
		const { insertId } = await Models.createFelino(felino);
		return { statusCode: 201, data: insertId };
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear el felino' };
	}
};

const getAllFelinos = async () => {
	try {
		const rows = await Models.getAllFelinos();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getFelinoById = async id => {
	try {
		const rows = await Models.getFelinoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putFelinoById = async (felino, id) => {
	try {
		await Models.putFelinoById(felino, id);
		return { statusCode: 200, data: 'Felino actualizado' };
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar al felino' };
	}
};

const getRazasYEstadosFelinos = async () => {
	try {
		const rows = await Models.getRazasYEstadosFelinos();
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

const getFelinoTratamientosById = async id => {
	try {
		const rows = await Models.getFelinoTratamientosById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putFelinoTratamientosById = async (tratamientos, id) => {
	try {
		await Models.putFelinoTratamientosById(tratamientos, id);
		const data = await Models.getFelinoTratamientosById(id);
		return { statusCode: 200, data: data };
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar tratamientos' };
	}
};

export default {
	getAllFelinos,
	getFelinoById,
	createFelino,
	putFelinoById,
	getRazasYEstadosFelinos,
	getFelinoTratamientosById,
	putFelinoTratamientosById,
	createFotoById,
	deleteFotoById,
	getFotosById
};
