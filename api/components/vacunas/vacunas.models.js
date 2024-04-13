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

const createSanidad = async (lugar, body) => {
	console.log({
		lugar,
		body
	});
	try {
		return pool.query(Query.createSanidad, [lugar, body]);
	} catch (error) {
		throw error;
	}
};

const updateSanidad = async (lugar, body, id) => {
	try {
		return pool.query(Query.updateSanidad, [lugar, body, id]);
	} catch (error) {
		throw error;
	}
};

const getSanidadById = async (lugar, id) => {
	try {
		return pool.query(Query.getSanidadById, [lugar, id]);
	} catch (error) {
		throw error;
	}
};

export default {
	getSanidad,
	createSanidad,
	updateSanidad,
	getSanidadById
};
