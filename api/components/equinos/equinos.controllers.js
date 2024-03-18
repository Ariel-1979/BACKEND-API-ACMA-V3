import EquinosDto from './equinos.dto.js';

const createEquino = async (req, res) => {
	const equino = req.body;
	try {
		const { statusCode, data } = await EquinosDto.createEquino(equino);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getAllEquinos = async (_req, res) => {
	try {
		const { statusCode, data } = await EquinosDto.getAllEquinos();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await EquinosDto.getEquinoById(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const putEquinoById = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await EquinosDto.putEquinoById(req.body, id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosByLugar = async (req, res) => {
	const { lugar } = req.body;
	try {
		const { statusCode, data } = await EquinosDto.getEquinosByLugar(lugar);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosByDiario = async (req, res) => {
	const { diario } = req.body;
	try {
		const { statusCode, data } = await EquinosDto.getEquinosByDiario(diario);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosJudicializados = async (_req, res) => {
	try {
		const { statusCode, data } = await EquinosDto.getEquinosJudicializados();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getEquinosNoJudicializados = async (_req, res) => {
	try {
		const { statusCode, data } = await EquinosDto.getEquinosNoJudicializados();
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const getFotosByIdCaballo = async (req, res) => {
	const { id } = req.params;
	try {
		const { statusCode, data } = await EquinosDto.getFotosByIdCaballo(id);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const createFotoById = async (req, res) => {
	console.log('first asser');
	const { id_caballo_foto, detalle, foto } = req.body;
	console.log(req.body);

	try {
		const { statusCode, data } = await EquinosDto.createFotoById(
			id_caballo_foto,
			detalle,
			foto
		);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

const deleteFotoById = async (req, res) => {
	const { id_fotos } = req.body;
	console.log(req.body, 'body');
	console.log(req.body.id_fotos, 'id_fotos');
	try {
		const { statusCode, data } = await EquinosDto.deleteFotoById(id_fotos);
		res.status(statusCode).json(data);
	} catch (error) {
		throw error;
	}
};

export default {
	createEquino,
	getAllEquinos,
	getEquinoById,
	putEquinoById,
	getEquinosByLugar,
	getEquinosByDiario,
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getFotosByIdCaballo,
	createFotoById,
	deleteFotoById
};
