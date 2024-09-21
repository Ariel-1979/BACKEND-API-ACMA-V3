import services from './users.services.js';

const getAllUsers = async (_req, res) => {
	const { statusCode, data } = await services.getAllUsers();
	res.status(statusCode).json(data);
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	const { statusCode, data } = await services.getUserById(id);
	res.status(statusCode).json(data);
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	console.log(req.body);

	const { statusCode, data } = await services.updateUser(req.body, id);
	res.status(statusCode).json(data);
};

export default { getAllUsers, getUserById, updateUser };
