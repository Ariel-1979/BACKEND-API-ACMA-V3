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

const getEquinosPorPeriodos = async periodo => {
	const { desde, hasta } = periodo;
	try {
		return {
			statusCode: 200,
			data: await Model.getEquinosPorPeriodos(desde, hasta)
		};
	} catch (error) {
		return { statusCode: 500, data: 'Error de Estadistica Equina' };
	}
};

export default {
	getEstadistica,
	getEstadisticaCanina,
	getEstadisticaFelina,
	getEquinosPorPeriodos
};
