import Models from './Peques.models.js';

const getAllPeques = async () => {
	try {
		console.log('aca');
		const rows = await Models.getAllPeques();
		console.log(rows);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getPequeById = async id => {
	try {
		const rows = await Models.getPequeById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const putPequeById = async (body, id) => {
	try {
		await Models.putPequeById(body, id);
		const rows = await Models.getPequeById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getPequesByEspecies = async especie => {
	try {
		const rows = await Models.getPequesByEspecies(especie);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getPequesByEstado = async estado => {
	try {
		const rows = await Models.getPequesByEstado(estado);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getPequesByEstadoAndEspecie = async (estado, especie) => {
	try {
		const rows = await Models.getPequesByEstadoAndEspecie(estado, especie);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getSelectOptions = async () => {
	try {
		return {
			statusCode: 200,
			data: {
				razas_caninas: await Models.getRazasCaninas(),
				razas_felinas: await Models.getRazasFelinas(),
				estado: await Models.getEstados(),
				especie: await Models.getEspecies()
			}
		};
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default {
	getAllPeques,
	getSelectOptions,
	getPequesByEspecies,
	getPequesByEstadoAndEspecie,
	getPequesByEstado,
	getPequeById,
	putPequeById
};
