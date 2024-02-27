import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getAllPeques = async () => {
	try {
		console.log(Query.getAllPeques);
		return pool.query(Query.getAllPeques);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getPequeById = async id => {
	try {
		return pool.query(Query.getPequeById, [id]);
	} catch (error) {
		throw error;
	}
};

const putPequeById = async (body, id) => {
	try {
		return pool.query(Query.putPequesById, [body, id]);
	} catch (error) {
		throw error;
	}
};

const getPequesByEspecies = async especie => {
	try {
		return pool.query(Query.getPequesByEspecies, [especie]);
	} catch (error) {
		throw error;
	}
};

const getPequesByEstadoAndEspecie = async (estado, especie) => {
	try {
		const rows = await pool.query(Query.getPequesByEstadoAndEspecie, [
			estado,
			especie
		]);
		console.log(rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getPequesByEstado = async estado => {
	try {
		return pool.query(Query.getPequesByEstado, [estado]);
	} catch (error) {
		throw error;
	}
};

const getEspecies = async () => {
	try {
		return pool.query(Query.getEspecies);
	} catch (error) {
		throw error;
	}
};

const getEstados = async () => {
	try {
		return pool.query(Query.getEstados);
	} catch (error) {
		throw error;
	}
};

const getRazasCaninas = async () => {
	try {
		return pool.query(Query.getRazasCaninas);
	} catch (error) {
		throw error;
	}
};

const getRazasFelinas = async () => {
	try {
		return pool.query(Query.getRazasFelinas);
	} catch (error) {
		throw error;
	}
};

const getHorseById = async id => {
	try {
		return pool.query(Query.getHorseById, [id]);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllPeques,
	getEspecies,
	getEstados,
	getRazasCaninas,
	getRazasFelinas,
	getPequesByEspecies,
	getPequesByEstadoAndEspecie,
	getPequesByEstado,
	getPequeById,
	putPequeById
};
