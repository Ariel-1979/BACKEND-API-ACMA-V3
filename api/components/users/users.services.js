import Models from './users.models.js';

const getAllUsers = async () => {
	try {
		const data = await Models.getAllUsers();
		return { statusCode: 200, data };
	} catch (error) {
		return { statusCode: 500, message: error };
	}
};

const getUserById = async id => {
	try {
		const rows = await Models.getUserById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const updateUser = async (body, id) => {
	try {
		const rows = await Models.updateUser(body, id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default { getAllUsers, getUserById, updateUser };
