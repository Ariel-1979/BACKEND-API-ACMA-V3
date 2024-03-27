import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const createFelino = async felino => {
	const { ingreso, nombre, hc } = felino;
	try {
		return pool.query(Query.createFelino, [ingreso, nombre, hc]);
	} catch (error) {
		throw error;
	}
};

const getAllFelinos = async () => {
	try {
		return pool.query(Query.getAllFelinos);
	} catch (error) {
		throw error;
	}
};

const getFelinoById = async id => {
	try {
		const felino = await pool.query(Query.getFelinoById, [id]);
		const judicial = await pool.query(Query.getFelinoJudicializadoById, [id]);
		const imputado = await pool.query(Query.getImputadoById, [id]);
		const denunciante = await pool.query(Query.getDenuncianteById, [id]);

		return { felino, judicial, imputado, denunciante } /*  */;
	} catch (error) {
		throw error;
	}
};

const putFelinoById = async (felino, id) => {
	try {
		return pool.query(Query.putFelinoById, [felino, id]);
	} catch (error) {
		throw error;
	}
};

const getRazasYEstadosFelinos = async () => {
	try {
		const razas = await pool.query(Query.getRazasFelinas);
		const estados = await pool.query(Query.getEstadosFelinos);
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

const getFelinoTratamientosById = async id => {
	try {
		return pool.query(Query.getFelinoTratamientosById, [id]);
	} catch (error) {
		throw error;
	}
};

const putFelinoTratamientosById = async (tratamientos, id) => {
	try {
		return pool.query(Query.putFelinoTratamientosById, [tratamientos, id]);
	} catch (error) {
		throw error;
	}
};

export default {
	createFelino,
	getAllFelinos,
	getFelinoById,
	putFelinoById,
	getRazasYEstadosFelinos,
	getFelinoTratamientosById,
	putFelinoTratamientosById,
	createFotoById,
	deleteFotoById,
	getFotosById
};
