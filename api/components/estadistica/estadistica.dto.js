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

export default {
	getEstadistica
};
