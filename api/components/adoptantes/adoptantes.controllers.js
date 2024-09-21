import Dto from './adoptantes.dto.js';

const getAdoptantes = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getAdoptantes();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getAdoptanteById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getAdoptanteById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const createAdoptante = async (req, res) => {
	const adoptante = req.body;
	try {
		const { statusCode, data } = await Dto.createAdoptante(adoptante);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const updateAdoptanteById = async (req, res) => {
	const { id } = req.params;
	const adoptante = req.body;
	try {
		const { statusCode, data } = await Dto.updateAdoptanteById(adoptante, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const deleteAdoptanteById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.deleteAdoptanteById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getAdoptantes,
	getAdoptanteById,
	createAdoptante,
	updateAdoptanteById,
	deleteAdoptanteById
};
