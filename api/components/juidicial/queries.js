const getEquinosJudicializados = `
SELECT j.id_caballo_judicial, j.fecha, j.causa, j.ufi, 
j.garantias, j.juzgado, j.entrega, j.diligencias,
c.nombre, c.historia_clinica, c.ingreso
FROM judicial j
INNER JOIN caballo c 
ON j.id_caballo_judicial = c.id_caballo
ORDER BY j.fecha DESC
`;

const createJudicial = `
INSERT INTO judicial
(id_caballo_judicial, fecha, causa, ufi, 
garantias, juzgado, entrega, diligencias)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const updateJudicial = `
  UPDATE judicial
	SET ?
	WHERE id_caballo_judicial = ?
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
telefono, direccion, localidad, observaciones
FROM denunciante
WHERE id_judicial_denunciante = ?
`;

const getImputadoById = `
SELECT id_judicial_imputado, nombre, apellido, dni,
telefono, direccion, localidad, observaciones
FROM imputado
WHERE id_judicial_imputado = ?
`;

const createDenunciante = `
INSERT INTO denunciante
(id_caballo_judicial, fecha, causa, ufi, 
garantias, juzgado, entrega, diligencias)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const updateDenunciante = `
  UPDATE denunciante
	SET ?
	WHERE id_judicial_denunciante = ?
	`;

const createImputado = `
INSERT INTO imputado
(id_caballo_judicial, fecha, causa, ufi, 
garantias, juzgado, entrega, diligencias)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const updateImputado = `
  UPDATE imputado
	SET ?
	WHERE id_caballo_judicial = ?
	`;

export default {
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	getEquinosJudicializadoById,
	getDenuncianteById,
	getImputadoById,
	createJudicial,
	updateJudicial,
	createDenunciante,
	createImputado,
	updateDenunciante,
	updateImputado
};
