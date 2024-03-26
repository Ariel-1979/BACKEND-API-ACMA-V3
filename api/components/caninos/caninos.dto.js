import Models from './caninos.models.js';

const getAllCaninos = async () => {
	try {
		const rows = await Models.getAllCaninos();
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

const getCaninoById = async id => {
	try {
		const rows = await Models.getCaninoById(id);
		return { statusCode: 200, data: rows };
	} catch (error) {
		return { statusCode: 500, data: [] };
	}
};

export default { getAllCaninos, getCaninoById };
