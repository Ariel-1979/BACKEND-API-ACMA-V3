import Dto from './felinos.dto.js';

const createFelino = async (req, res) => {
	try {
		const { statusCode, data } = await Dto.createFelino(req.body);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getAllFelinos = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getAllFelinos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getFelinoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getFelinoById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putFelinoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.putFelinoById(req.body, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getRazasYEstadosFelinos = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getRazasYEstadosFelinos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const createFotoById = async (req, res) => {
	const { id_gato_foto, detalle, foto } = req.body;
	try {
		const { statusCode, data } = await Dto.createFotoById(
			id_gato_foto,
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

const getFelinoTratamientosById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.getFelinoTratamientosById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putFelinoTratamientosById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await Dto.putFelinoTratamientosById(
			req.body,
			id
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	createFelino,
	getAllFelinos,
	getFelinoById,
	putFelinoById,
	getRazasYEstadosFelinos,
	getFelinoTratamientosById,
	putFelinoTratamientosById,
	createFotoById,
	deleteFotoById,
	getFotosById
};
