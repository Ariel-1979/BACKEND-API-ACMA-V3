import Model from './estadistica.models.js';

const getEstadistica = async () => {
	try {
		return {
			statusCode: 200,
			data: await Model.getEstadistica()
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error al crear equino' };
	}
};

const getEstadisticaCanina = async () => {
	try {
		return {
			statusCode: 200,
			data: await Model.getEstadisticaCanina()
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error de Estadistica Canina' };
	}
};

const getEstadisticaFelina = async () => {
	try {
		return {
			statusCode: 200,
			data: await Model.getEstadisticaFelina()
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error de Estadistica Felina' };
	}
};

export default {
	getEstadistica,
	getEstadisticaCanina,
	getEstadisticaFelina
};
