import Models from './equinos.model.js';

const createEquino = async equino => {
	try {
		const { insertId } = await Models.createEquino(equino);
		return { statusCode: 201, data: insertId };
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear equino' };
	}
};

const getAllEquinos = async () => {
	try {
		const rows = await Models.getAllEquinos();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getEquinoById = async id => {
	try {
		const rows = await Models.getEquinoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putEquinoById = async (body, id) => {
	try {
		await Models.putEquinoById(body, id);
		const rows = await Models.getEquinoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar equino' };
	}
};

const getEquinosByLugar = async lugar => {
	try {
		const rows = await Models.getEquinosByLugar(lugar);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getEquinosByDiario = async diario => {
	try {
		const rows = await Models.getEquinosByDiario(diario);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getEquinosJudicializados = async () => {
	try {
		const rows = await Models.getEquinosJudicializados();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getEquinosNoJudicializados = async () => {
	try {
		const rows = await Models.getEquinosNoJudicializados();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getFotosByIdCaballo = async id => {
	try {
		const rows = await Models.getFotosByIdCaballo(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const createFotoById = async (id_caballo_foto, detalle, foto) => {
	try {
		const rows = await Models.createFotoById(id_caballo_foto, detalle, foto);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const deleteFotoById = async id => {
	try {
		const rows = await Models.deleteFotoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getTratamientosById = async id => {
	try {
		const rows = await Models.getTratamientosById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putTratamientosById = async (body, id) => {
	try {
		await Models.putTratamientosById(body, id);
		const rows = await Models.getTratamientosById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: 'Error al actualizar equino' };
	}
};

export default {
	createEquino,
	getAllEquinos,
	getEquinoById,
	putEquinoById,
	getEquinosByLugar,
	getEquinosByDiario,
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getFotosByIdCaballo,
	createFotoById,
	deleteFotoById,
	getTratamientosById,
	putTratamientosById
};
