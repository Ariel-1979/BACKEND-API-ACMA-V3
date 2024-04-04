import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const loginAuth = async (mail, clave) => {
	try {
		const rows = pool.query(Query.authenticatedUser, [[mail], [clave]]);
		return rows;
	} catch (error) {
		throw error;
	}
};

export default {
	loginAuth
};
