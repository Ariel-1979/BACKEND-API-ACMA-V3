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

export default { getAllHorses, getHorseById };
