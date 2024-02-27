import PequesDto from './Peques.dto.js';

const getAllPeques = async (_req, res) => {
	try {
		const { statusCode, data } = await PequesDto.getAllPeques();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getPequesByEspecies = async (req, res) => {
	try {
		const { especie } = req.body;
		const { statusCode, data } = await PequesDto.getPequesByEspecies(especie);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getSelectOptions = async (_req, res) => {
	try {
		const { statusCode, data } = await PequesDto.getSelectOptions();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getPequesByEstado = async (req, res) => {
	try {
		const { estado } = req.body;
		const { statusCode, data } = await PequesDto.getPequesByEstado(estado);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getPequesByEstadoAndEspecie = async (req, res) => {
	try {
		const { estado } = req.body;
		const { especie } = req.body;
		const { statusCode, data } = await PequesDto.getPequesByEstadoAndEspecie(
			estado,
			especie
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getPequeById = async (req, res) => {
	try {
		const { id } = req.params;
		const { statusCode, data } = await PequesDto.getPequeById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putPequeById = async (req, res) => {
	try {
		const { statusCode, data } = await PequesDto.getPequeById(
			req.body,
			req.params.id
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getAllPeques,
	getSelectOptions,
	getPequesByEspecies,
	getPequesByEstado,
	getPequeById,
	putPequeById,
	getPequesByEstadoAndEspecie
};
