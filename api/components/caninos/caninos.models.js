import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getAllCaninos = async () => {
	try {
		return pool.query(Query.getAllCaninos);
	} catch (error) {
		throw error;
	}
};

const getCaninoById = async id => {
	try {
		return pool.query(Query.getCaninoById, [id]);
	} catch (error) {
		throw error;
	}
};

export default { getAllCaninos, getCaninoById };
