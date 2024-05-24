import Models from './judicial.model.js';

const getEquinosJudicializados = async () => {
	try {
		const rows = await Models.getEquinosJudicializados();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return {
			statusCode: 500,
			data: [],
			message: 'Error al realizar la petición'
		};
	}
};

const getEquinosNoJudicializados = async () => {
	try {
		const rows = await Models.getEquinosNoJudicializados();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return {
			statusCode: 500,
			data: [],
			message: 'Error al realizar la petición'
		};
	}
};

const getEquinosJudicializadoById = async id => {
	try {
		const judicial = await Models.getEquinosJudicializadoById(id);
		const denunciante = await Models.getDenuncianteById(id);
		const imputado = await Models.getImputadoById(id);
		return {
			statusCode: 200,
			data: {
				judicial,
				denunciante,
				imputado
			}
		};
	} catch (error) {
		return {
			statusCode: 500,
			data: [],
			message: 'Error al realizar la petición'
		};
	}
};

const createJudicial = async judicial => {
	try {
		const rows = await Models.createJudicial(judicial);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return {
			statusCode: 500,
			data: [],
			message: 'Error al realizar la petición'
		};
	}
};

const updateJudicial = async judicial => {
	const { id_caballo_judicial } = judicial;
	try {
		await Models.updateJudicial(judicial);
		const rows = await getEquinosJudicializadoById(id_caballo_judicial);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return {
			statusCode: 500,
			data: [],
			message: 'Error al realizar la petición'
		};
	}
};

export default {
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getEquinosJudicializadoById,
	createJudicial,
	updateJudicial
};
