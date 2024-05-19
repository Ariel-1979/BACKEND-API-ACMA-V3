const getAllCaninos = `
SELECT
p.id_perro, p.ingreso, p.nombre, p.raza, p.hc, 
p.estado, p.sexo,
j.id_perro_judicial as judicializado
FROM perros p
LEFT JOIN perro_judicial j
ON p.id_perro = j.id_perro_judicial
ORDER BY ingreso DESC
`;

const getCaninoById = `
SELECT
 p.id_perro, p.ingreso, p.nombre, p.peso, p.edad, p.raza, p.pelaje, p.hc,
p.estado, p.sexo, f.detalle, f.foto
FROM perros p
LEFT JOIN perros_fotos f ON p.id_perro = f.id_perro_foto
WHERE id_perro = ?
`;

const createCanino = `
INSERT INTO perros
(ingreso, nombre, hc, sexo)
VALUES (?, ?, ?, ?)
`;

const putCaninoById = `UPDATE perros SET ? WHERE id_perro = ?`;

const getRazasCaninas = `
SELECT
id_raza, nombre
FROM perros_razas
`;

const getEstadosCaninos = `
SELECT
id_estado, nombre
FROM perros_estados
`;

const createFotoById = `
INSERT INTO perros_fotos
(id_perro_foto, detalle, foto)
VALUES (?, ?, ?)
`;

const deleteFotoById = `
DELETE FROM perros_fotos WHERE id_foto = ?
`;

const getFotosById = `
SELECT
id_foto, id_perro_foto, detalle, foto
FROM perros_fotos
WHERE id_perro_foto = ?
`;

const getCaninoTratamientosById = `
SELECT 
vacunas, desparasitacion, tratamientos, observaciones
FROM perros
WHERE id_perro = ?
`;

const putCaninoTratamientosById = `
UPDATE perros SET ? WHERE id_perro = ?
`;

const getCaninoJudicializadoById = `
SELECT j.id_perro_judicial, j.fecha, j.causa, j.ufi,
j.garantias, j.juzgado, j.entrega, j.diligencias,
p.nombre, p.hc, p.ingreso
FROM perro_judicial j
INNER JOIN perros p
ON j.id_perro_judicial = p.id_perro
WHERE j.id_perro_judicial = ?
`;

const getAdoptanteByID = `
  SELECT id_adoptante, id_perro_adoptado, fecha,  nombre, apellido, dni,
  telefono, direccion, localidad, observaciones
	FROM perros_adoptantes
	WHERE id_perro_adoptado = ?
	`;

const getDenuncianteById = `
SELECT id_judicial_denunciante, nombre, apellido, dni, 
telefono, direccion, localidad, observaciones
FROM perros_denunciantes
WHERE id_judicial_denunciante = ?
`;

const getImputadoById = `
SELECT id_judicial_imputado, nombre, apellido, dni,
telefono, direccion, localidad, observaciones
FROM perros_imputados
WHERE id_judicial_imputado = ?
`;

const createRazaCanina = `
INSERT INTO perros_razas
(nombre)
VALUES (?)
`;

export default {
	getAllCaninos,
	getCaninoById,
	createCanino,
	getRazasCaninas,
	getEstadosCaninos,
	putCaninoById,
	createFotoById,
	deleteFotoById,
	getFotosById,
	getCaninoTratamientosById,
	putCaninoTratamientosById,
	getCaninoJudicializadoById,
	getDenuncianteById,
	getImputadoById,
	getAdoptanteByID,
	createRazaCanina
};
