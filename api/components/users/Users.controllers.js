import Dto from './users.dto.js';

const getAllUsers = async (_req, res) => {
	const { statusCode, data } = await Dto.getAllUsers();
	res.status(statusCode).json(data);
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	const { statusCode, data } = await Dto.getUserById(id);
	res.status(statusCode).json(data);
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	console.log(req.body);

	const { statusCode, data } = await Dto.updateUser(req.body, id);
	res.status(statusCode).json(data);
};

export default { getAllUsers, getUserById, updateUser };
