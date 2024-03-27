import Dto from './caninos.dto.js';

const createCanino = async (req, res) => {
	const canino = req.body;
	console.log(canino);
	try {
		const { statusCode, data } = await Dto.createCanino(canino);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getAllCaninos = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getAllCaninos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getCaninoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getCaninoById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putCaninoById = async (req, res) => {
	const { id } = req.params;
	const canino = req.body;
	try {
		const { statusCode, data } = await Dto.putCaninoById(canino, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getRazasYEstadosCaninos = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getRazasYEstadosCaninos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const createFotoById = async (req, res) => {
	const { id_perro_foto, detalle, foto } = req.body;
	try {
		const { statusCode, data } = await Dto.createFotoById(
			id_perro_foto,
			detalle,
			foto
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const deleteFotoById = async (req, res) => {
	const { id_foto } = req.body;
	try {
		const { statusCode, data } = await Dto.deleteFotoById(id_foto);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getFotosById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getFotosById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getCaninoTratamientosById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getCaninoTratamientosById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putCaninoTratamientosById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.putCaninoTratamientosById(
			req.body,
			id
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	createCanino,
	getAllCaninos,
	getCaninoById,
	putCaninoById,
	getRazasYEstadosCaninos,
	createFotoById,
	deleteFotoById,
	getFotosById,
	getCaninoTratamientosById,
	putCaninoTratamientosById
};
