import Dto from './vacunas.dto.js';

const getSanidad = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getSanidad();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const createSanidad = async (req, res) => {
	const { lugar, body } = req.body;
	try {
		const { statusCode, data } = await Dto.createSanidad(lugar, body);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const updateSanidad = async (req, res) => {
	const { lugar, body, id } = req.body;
	try {
		const { statusCode, data } = await Dto.updateSanidad(lugar, body, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getSanidadById = async (req, res) => {
	const { id } = req.params;
	const { lugar } = req.body;
	console.log({
		id,
		lugar
	});
	try {
		const { statusCode, data } = await Dto.getSanidadById(lugar, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getSanidad,
	createSanidad,
	updateSanidad,
	getSanidadById
};
