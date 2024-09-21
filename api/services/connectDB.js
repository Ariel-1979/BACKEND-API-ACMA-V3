import util from 'util';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connectionDataBase = () => {
	const pool = mysql.createPool({
		host: process.env.BD_HOST,
		port: process.env.BD_PORT,
		password: process.env.BD_PASSWORD,
		user: process.env.BD_USER,
		database: process.env.BD_NAME,
		connectionLimit: 10,
		waitForConnections: true,
		queueLimit: 0
	});
	pool.query = util.promisify(pool.query);
	return pool;
};

export default connectionDataBase;
