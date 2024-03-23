import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const createEquino = async equino => {
	try {
		return pool.query(Query.createEquino, [
			equino.ingreso,
			equino.nombre,
			equino.historia_clinica
		]);
	} catch (error) {
		throw error;
	}
};

const getAllEquinos = async () => {
	try {
		return pool.query(Query.getAllEquinos);
	} catch (error) {
		throw error;
	}
};

const getEquinoById = async id => {
	try {
		const horse = await pool.query(Query.getEquinoById, id);
		const judicial = await pool.query(Query.getEquinosJudicializadoById, id);
		const imputado = await pool.query(Query.getImputadoById, id);
		const denunciante = await pool.query(Query.getDenuncianteById, id);
		return { horse, judicial, imputado, denunciante };
	} catch (error) {
		throw error;
	}
};

const putEquinoById = async (body, id) => {
	try {
		return pool.query(Query.putEquinoById, [body, id]);
	} catch (error) {
		throw error;
	}
};

const getEquinosByLugar = async lugar => {
	try {
		return pool.query(Query.getEquinosByLugar, lugar);
	} catch (error) {
		throw error;
	}
};

const getEquinosByDiario = async diario => {
	try {
		return pool.query(Query.getEquinosByDiario, diario);
	} catch (error) {
		throw error;
	}
};

const getEquinosJudicializados = async () => {
	try {
		return pool.query(Query.getEquinosJudicializados);
	} catch (error) {
		throw error;
	}
};

const getEquinosNoJudicializados = async () => {
	try {
		return pool.query(Query.getEquinosNoJudicializados);
	} catch (error) {
		throw error;
	}
};

const getFotosByIdCaballo = async id => {
	try {
		return pool.query(Query.getFotosByIdCaballo, id);
	} catch (error) {
		throw error;
	}
};

const createFotoById = async (id_caballo_foto, detalle, foto) => {
	try {
		return pool.query(Query.createFotoById, [id_caballo_foto, detalle, foto]);
	} catch (error) {
		throw error;
	}
};

const deleteFotoById = async id_fotos => {
	try {
		return pool.query(Query.deleteFotoById, id_fotos);
	} catch (error) {
		throw error;
	}
};

const getTratamientosById = async id => {
	try {
		return pool.query(Query.getTratamientosById, id);
	} catch (error) {
		throw error;
	}
};

const putTratamientosById = async (body, id) => {
	try {
		return pool.query(Query.putTratamientoById, [body, id]);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllEquinos,
	getEquinoById,
	getEquinosByLugar,
	getEquinosByDiario,
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	createEquino,
	putEquinoById,
	getFotosByIdCaballo,
	createFotoById,
	deleteFotoById,
	getTratamientosById,
	putTratamientosById
};
