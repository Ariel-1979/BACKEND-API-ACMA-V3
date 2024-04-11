import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getSanidad = async () => {
	try {
		const [baradero, castelli, korn] = await Promise.all([
			pool.query(Query.getSanidad, ['baradero']),
			pool.query(Query.getSanidad, ['castelli']),
			pool.query(Query.getSanidad, ['korn'])
		]);
		return { baradero, castelli, korn };
	} catch (error) {
		throw error;
	}
};

const createSanidad = async (body, lugar) => {
	try {
		return pool.query(Query.createSanidad(lugar), body);
	} catch (error) {
		throw error;
	}
};

const updateSanidad = async (body, id, lugar) => {
	try {
		return pool.query(Query.updateSanidad(lugar), [body, id]);
	} catch (error) {
		throw error;
	}
};

const deleteSanidad = async (id, lugar) => {
	try {
		return pool.query(Query.deleteSanidad(lugar), id);
	} catch (error) {
		throw error;
	}
};

export default {
	getSanidad
};
