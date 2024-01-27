import { findUserByEmail } from '../Users.models.js';

const uniqueEmail = async (email) => {
	try {
		const rows = await findUserByEmail(email);
		return rows.length === 0 ? false : true;
	} catch (error) {
		throw error;
	}
};

export { uniqueEmail };
