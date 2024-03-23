const getEquinosJudicializados = `
SELECT j.id_caballo_judicial, j.fecha, j.causa, j.ufi, 
j.garantias, j.juzgado, j.entrega, j.diligencias,
c.nombre, c.historia_clinica, c.ingreso
FROM judicial j
INNER JOIN caballo c 
ON j.id_caballo_judicial = c.id_caballo
ORDER BY j.fecha DESC
`;

const getEquinosNoJudicializados = `
SELECT c.id_caballo, c.nombre, c.historia_clinica, c.ingreso
FROM caballo c
WHERE c.id_caballo 
NOT IN (SELECT id_caballo_judicial FROM judicial)
ORDER BY c.ingreso DESC
`;

const getEquinosJudicializadoById = `
SELECT j.id_caballo_judicial, j.fecha, j.causa, j.ufi,
j.garantias, j.juzgado, j.entrega, j.diligencias,
c.nombre, c.historia_clinica, c.ingreso
FROM judicial j
INNER JOIN caballo c
ON j.id_caballo_judicial = c.id_caballo
WHERE j.id_caballo_judicial = ?
`;

const getDenuncianteById = `
SELECT id_judicial_denunciante, nombre, apellido, dni, 
telefono, direccion, observaciones
FROM denunciante
WHERE id_judicial_denunciante = ?
`;

const getImputadoById = `
SELECT id_judicial_imputado, nombre, apellido, dni,
telefono, direccion, observaciones
FROM imputado
WHERE id_judicial_imputado = ?
`;

export default {
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getEquinosJudicializadoById,
	getDenuncianteById,
	getImputadoById
};
