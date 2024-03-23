import judicialDto from './judicial.dto.js';

const getEquinosJudicializados = async (_req, res) => {
	try {
		const { statusCode, data } = await judicialDto.getEquinosJudicializados();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosNoJudicializados = async (_req, res) => {
	try {
		const { statusCode, data } = await judicialDto.getEquinosNoJudicializados();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosJudicializadoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await judicialDto.getEquinosJudicializadoById(
			id
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getEquinosJudicializadoById
};
