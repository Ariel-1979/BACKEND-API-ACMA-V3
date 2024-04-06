import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';

const pool = connectionDataBase();

const getEstadistica = async () => {
	try {
		const [
			rescatados,
			korn,
			tratamiento,
			adoptados,
			castelli,
			judicializados,
			noJudicializados,
			fallecidos,
			robados
		] = await Promise.all([
			pool.query(Query.totalEquinosRescatados),
			pool.query(Query.totalEquinosKorn),
			pool.query(Query.totalEquinosEnTratamiento),
			pool.query(Query.totalEquinosAdoptados),
			pool.query(Query.totalEquinosCastelli),
			pool.query(Query.totalEquinosJudicializados),
			pool.query(Query.totalEquinosNoJudicializados),
			pool.query(Query.totalEquinosFallecido),
			pool.query(Query.totalEquinosRobados)
		]);
		return {
			rescatados: rescatados[0].totalEquinosRescatados,
			korn: korn[0].totalEquinosKorn,
			tratamiento: tratamiento[0].totalEquinosEnTratamiento,
			adoptados: adoptados[0].totalEquinosAdoptados,
			castelli: castelli[0].totalEquinosCastelli,
			judicializados: judicializados[0].totalEquinosJudicializados,
			noJudicializados: noJudicializados[0].totalEquinosNoJudicializados,
			fallecidos: fallecidos[0].totalEquinosFallecido,
			robados: robados[0].totalEquinosRobados
		};
	} catch (error) {
		throw error;
	}
};

export default {
	getEstadistica
};
