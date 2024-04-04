import Query from './queries.js';
import connectionDataBase from '../../services/connectDB.js';

const pool = connectionDataBase();

const getAllUsers = async () => {
	try {
		return pool.query(Query.getAllUsers);
	} catch (error) {
		throw error;
	}
};

const getUserById = async id => {
	try {
		return pool.query(Query.getUserById, [id]);
	} catch (error) {
		throw error;
	}
};

const updateUser = async (body, id) => {
	try {
		return pool.query(Query.updateUser, [body, id]);
	} catch (error) {
		throw error;
	}
};

export default { getAllUsers, getUserById, updateUser };
