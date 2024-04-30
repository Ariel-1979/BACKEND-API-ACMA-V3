import connectionDataBase from '../../services/connectDB.js';
import Query from './queries.js';
import Peques from './queriesPeques.js';

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
			pool.query(Query.totalEquinosFallecidos),
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
			fallecidos: fallecidos[0].totalEquinosFallecidos,
			robados: robados[0].totalEquinosRobados
		};
	} catch (error) {
		throw error;
	}
};

const getEstadisticaCanina = async () => {
	try {
		const [
			canesTotal,
			canesAdoptados,
			canesEnAdopcion,
			canesEnTransito,
			canesEnTratamiento,
			canesExtraviados,
			canesFallecidos,
			canesRobados,
			canesJudicializados
		] = await Promise.all([
			pool.query(Peques.totalPeques, ['perros']),
			pool.query(Peques.pequesEstado, ['perros', 'Adoptado']),
			pool.query(Peques.pequesEstado, ['perros', 'En Adopción']),
			pool.query(Peques.pequesEstado, ['perros', 'En Tránsito']),
			pool.query(Peques.pequesEstado, ['perros', 'En Tratamiento']),
			pool.query(Peques.pequesEstado, ['perros', 'Extraviado']),
			pool.query(Peques.pequesEstado, ['perros', 'Fallecido']),
			pool.query(Peques.pequesEstado, ['perros', 'Robado']),
			pool.query(Peques.totalJudicializados, ['perro_judicial'])
		]);
		return {
			canesTotal: canesTotal[0].totalPeques,
			canesAdoptados: canesAdoptados[0].pequesEstado,
			canesEnAdopcion: canesEnAdopcion[0].pequesEstado,
			canesEnTransito: canesEnTransito[0].pequesEstado,
			canesEnTratamiento: canesEnTratamiento[0].pequesEstado,
			canesExtraviados: canesExtraviados[0].pequesEstado,
			canesFallecidos: canesFallecidos[0].pequesEstado,
			canesRobados: canesRobados[0].pequesEstado,
			canesJudicializados: canesJudicializados[0].totalJudicializados
		};
	} catch (error) {
		console.log(error);
		throw error();
	}
};

const getEstadisticaFelina = async () => {
	try {
		const [
			felinosTotal,
			felinosAdoptados,
			felinosEnAdopcion,
			felinosEnTransito,
			felinosEnTratamiento,
			felinosExtraviados,
			felinosFallecidos,
			felinosRobados,
			felinosJudicializados
		] = await Promise.all([
			pool.query(Peques.totalPeques, ['gatos']),
			pool.query(Peques.pequesEstado, ['gatos', 'Adoptado']),
			pool.query(Peques.pequesEstado, ['gatos', 'En Adopción']),
			pool.query(Peques.pequesEstado, ['gatos', 'En Tránsito']),
			pool.query(Peques.pequesEstado, ['gatos', 'En Tratamiento']),
			pool.query(Peques.pequesEstado, ['gatos', 'Extraviado']),
			pool.query(Peques.pequesEstado, ['gatos', 'Fallecido']),
			pool.query(Peques.pequesEstado, ['gatos', 'Robado']),
			pool.query(Peques.totalJudicializados, ['gato_judicial'])
		]);
		return {
			felinosTotal: felinosTotal[0].totalPeques,
			felinosAdoptados: felinosAdoptados[0].pequesEstado,
			felinosEnAdopcion: felinosEnAdopcion[0].pequesEstado,
			felinosEnTransito: felinosEnTransito[0].pequesEstado,
			felinosEnTratamiento: felinosEnTratamiento[0].pequesEstado,
			felinosExtraviados: felinosExtraviados[0].pequesEstado,
			felinosFallecidos: felinosFallecidos[0].pequesEstado,
			felinosRobados: felinosRobados[0].pequesEstado,
			felinosJudicializados: felinosJudicializados[0].totalJudicializados
		};
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export default {
	getEstadistica,
	getEstadisticaCanina,
	getEstadisticaFelina
};
