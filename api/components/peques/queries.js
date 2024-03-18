const getAllPeques = `
SELECT
p.id_peque, p.nombre, p.edad, p.pelaje, p.sexo, p.peso, p.ingreso, p.hc, p.judicializado, p.castrado,
e.nombre AS especie, 
es.nombre AS estado, 
r.nombre AS raza
FROM peques p
INNER JOIN peques_especies e ON p.especie = e.id_especie
INNER JOIN peques_estados es ON p.estado = es.id_estado
INNER JOIN peques_razas r ON p.raza = r.id_raza
ORDER BY p.ingreso DESC
`;

const getPequeById = `
SELECT
p.id_peque, p.nombre, p.edad, p.pelaje, p.sexo, p.peso, p.ingreso, p.hc, p.judicializado, p.castrado, p.informes,
e.nombre AS especie, 
es.nombre AS estado, 
r.nombre AS raza
FROM peques p
INNER JOIN peques_especies e ON p.especie = e.id_especie
INNER JOIN peques_estados es ON p.estado = es.id_estado
INNER JOIN peques_razas r ON p.raza = r.id_raza
WHERE p.id_peque = ?
ORDER BY p.ingreso DESC
`;

const getPequesByEspecies = `
SELECT
p.id_peque, p.nombre, p.edad, p.pelaje, p.sexo, p.peso, p.ingreso, p.hc, p.judicializado, p.castrado,
e.nombre AS especie,
es.nombre AS estado,
r.nombre AS raza
FROM peques p
INNER JOIN peques_especies e ON p.especie = e.id_especie
INNER JOIN peques_estados es ON p.estado = es.id_estado
INNER JOIN peques_razas r ON p.raza = r.id_raza
WHERE e.nombre = ?
ORDER BY p.ingreso DESC
`;

const getPequesByEstado = `
SELECT
p.id_peque, p.nombre, p.edad, p.pelaje, p.sexo, p.peso, p.ingreso, p.hc, p.judicializado, p.castrado,
e.nombre AS especie,
es.nombre AS estado,
r.nombre AS raza
FROM peques p
INNER JOIN peques_especies e ON p.especie = e.id_especie
INNER JOIN peques_estados es ON p.estado = es.id_estado
INNER JOIN peques_razas r ON p.raza = r.id_raza
WHERE p.estado = ? 
ORDER BY p.ingreso DESC
`;

const getPequesByEstadoAndEspecie = `
SELECT
p.id_peque, p.nombre, p.edad, p.pelaje, p.sexo, p.peso, p.ingreso, p.hc, p.judicializado, p.castrado,
e.nombre AS especie,
es.nombre AS estado,
r.nombre AS raza
FROM peques p
INNER JOIN peques_especies e ON p.especie = e.id_especie
INNER JOIN peques_estados es ON p.estado = es.id_estado
INNER JOIN peques_razas r ON p.raza = r.id_raza
WHERE p.estado = ? 
AND e.nombre = ?
ORDER BY p.ingreso DESC
`;

const putPequesById = `
UPDATE peques SET ? WHERE id_peque = ?
`;

const getEspecies = `
SELECT id_especie, nombre FROM peques_especies
`;
const getEstados = `
SELECT id_estado, nombre FROM peques_estados
`;
const getRazasCaninas = `
SELECT id_raza, nombre FROM peques_razas WHERE id_especie_raza = 1
`;
const getRazasFelinas = `
SELECT id_raza, nombre FROM peques_razas WHERE id_especie_raza = 2
`;

export default {
	getAllPeques,
	getEspecies,
	getEstados,
	getRazasCaninas,
	getRazasFelinas,
	getPequesByEspecies,
	getPequesByEstadoAndEspecie,
	getPequesByEstado,
	getPequeById,
	putPequesById
};
