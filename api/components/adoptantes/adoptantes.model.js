import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getAdoptantes = async () => {
	try {
		return pool.query(Query.getAdoptantes);
	} catch (error) {
		throw error;
	}
};

const getAdoptanteById = async id => {
	try {
		return pool.query(Query.getAdoptanteById, id);
	} catch (error) {
		throw error;
	}
};

const createAdoptante = async adoptante => {
	console.log(adoptante);
	try {
		return pool.query(Query.createAdoptante, [adoptante]);
	} catch (error) {
		throw error;
	}
};

const updateAdoptanteById = async (adoptante, id) => {
	try {
		return pool.query(Query.updateAdoptanteById, [adoptante, id]);
	} catch (error) {
		throw error;
	}
};

const deleteAdoptanteById = async id => {
	try {
		return pool.query(Query.deleteAdoptanteById, id);
	} catch (error) {
		throw error;
	}
};

export default {
	getAdoptantes,
	getAdoptanteById,
	createAdoptante,
	updateAdoptanteById,
	deleteAdoptanteById
};
