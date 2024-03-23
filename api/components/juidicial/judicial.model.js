import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getEquinosJudicializados = async () => {
	try {
		return pool.query(Query.getEquinosJudicializados);
	} catch (error) {
		console.log(error);
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

const getEquinosJudicializadoById = async id => {
	try {
		return pool.query(Query.getEquinosJudicializadoById, [id]);
	} catch (error) {
		throw error;
	}
};

const getDenuncianteById = async id => {
	try {
		return pool.query(Query.getDenuncianteById, [id]);
	} catch (error) {
		throw error;
	}
};

const getImputadoById = async id => {
	try {
		return pool.query(Query.getImputadoById, [id]);
	} catch (error) {
		throw error;
	}
};

export default {
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getEquinosJudicializadoById,
	getDenuncianteById,
	getImputadoById
};
