import Dto from './estadistica.dto.js';

const getEstadistica = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getEstadistica();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEstadisticaCanina = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getEstadisticaCanina();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEstadisticaFelina = async (_req, res) => {
	try {
		const { statusCode, data } = await Dto.getEstadisticaFelina();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosPorPeriodos = async (req, res) => {
	try {
		const { statusCode, data } = await Dto.getEquinosPorPeriodos(req.body);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getEstadistica,
	getEstadisticaCanina,
	getEstadisticaFelina,
	getEquinosPorPeriodos
};
