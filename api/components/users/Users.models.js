import pool from '../../services/connectDB.js';

const getAllUsers = async () => {
	try {
		const query =
			'SELECT id_usuario, nombre, apellido, email, rol, telefono, observaciones FROM usuarios';
		return pool.query(query);
	} catch (error) {
		throw error;
	}
};

const findUserByEmail = async email => {
	try {
		const rows = await pool.query(
			`SELECT * FROM usuarios WHERE email = '${email}'`
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

const listAllUsers = async () => {
	try {
		const rows = await pool.query(
			`SELECT id_usuario, nombre, apellido, email, telefono, rol FROM usuarios`
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

export default { getAllUsers, findUserByEmail, listAllUsers };
