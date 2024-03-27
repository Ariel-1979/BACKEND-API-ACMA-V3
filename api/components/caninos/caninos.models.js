import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const createCanino = async canino => {
	const { ingreso, nombre, hc } = canino;
	try {
		return pool.query(Query.createCanino, [ingreso, nombre, hc]);
	} catch (error) {
		throw error;
	}
};

const getAllCaninos = async () => {
	try {
		return pool.query(Query.getAllCaninos);
	} catch (error) {
		throw error;
	}
};

const getCaninoById = async id => {
	try {
		const canino = await pool.query(Query.getCaninoById, [id]);
		const judicial = await pool.query(Query.getCaninoJudicializadoById, [id]);
		const imputado = await pool.query(Query.getImputadoById, [id]);
		const denunciante = await pool.query(Query.getDenuncianteById, [id]);

		return { canino, judicial, imputado, denunciante } /*  */;
	} catch (error) {
		throw error;
	}
};

const putCaninoById = async (canino, id) => {
	try {
		return pool.query(Query.putCaninoById, [canino, id]);
	} catch (error) {
		throw error;
	}
};

const getRazasYEstadosCaninos = async () => {
	try {
		const razas = await pool.query(Query.getRazasCaninas);
		const estados = await pool.query(Query.getEstadosCaninos);
		return { razas, estados };
	} catch (error) {
		throw error;
	}
};

const createFotoById = async (id, detalle, foto) => {
	try {
		return pool.query(Query.createFotoById, [id, detalle, foto]);
	} catch (error) {
		throw error;
	}
};

const deleteFotoById = async id => {
	try {
		return pool.query(Query.deleteFotoById, [id]);
	} catch (error) {
		throw error;
	}
};

const getFotosById = async id => {
	try {
		return pool.query(Query.getFotosById, [id]);
	} catch (error) {
		throw error;
	}
};

const getCaninoTratamientosById = async id => {
	try {
		return pool.query(Query.getCaninoTratamientosById, [id]);
	} catch (error) {
		throw error;
	}
};

const putCaninoTratamientosById = async (tratamientos, id) => {
	try {
		return pool.query(Query.putCaninoTratamientosById, [tratamientos, id]);
	} catch (error) {
		throw error;
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
	getFotosById,
	getCaninoTratamientosById,
	putCaninoTratamientosById
};
