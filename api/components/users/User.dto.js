import Models from './Users.models.js';

const getAllUsers = async () => {
	try {
		const rows = await Models.getAllUsers();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	getAllUsers
};
