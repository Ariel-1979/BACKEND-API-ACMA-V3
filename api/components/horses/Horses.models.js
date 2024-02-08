import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getAllHorses = async () => {
	try {
		return pool.query(Query.getAllHorses);
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

const putHorseById = async (horse, id) => {
	try {
		return pool.query(Query.putHorseById, [horse, id]);
	} catch (error) {
		throw error;
	}
};

const getHorseRazas = async () => {
	try {
		return pool.query(Query.getRaza);
	} catch (error) {
		throw error;
	}
};

const getHorseAlojamiento = async () => {
	try {
		return pool.query(Query.getAlojamiento);
	} catch (error) {
		throw error;
	}
};

const getHorseEstado = async () => {
	try {
		return pool.query(Query.getEstado);
	} catch (error) {
		throw error;
	}
};

const getHorsePelaje = async () => {
	try {
		return pool.query(Query.getPelaje);
	} catch (error) {
		throw error;
	}
};

const getHorseSexo = async () => {
	try {
		return pool.query(Query.getSexo);
	} catch (error) {
		throw error;
	}
};

const getHorseTamanio = async () => {
	try {
		return pool.query(Query.getTamanio);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllHorses,
	getHorseById,
	putHorseById,
	getHorseRazas,
	getHorseAlojamiento,
	getHorseEstado,
	getHorsePelaje,
	getHorseSexo,
	getHorseTamanio
};
