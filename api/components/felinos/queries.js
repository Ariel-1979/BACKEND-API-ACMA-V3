const getAllFelinos = `
SELECT
id_gato, ingreso, nombre, raza, hc, estado, sexo
FROM gatos
ORDER BY ingreso DESC
`;

const getFelinoById = `
SELECT
 p.id_gato, p.ingreso, p.nombre, p.peso, p.edad, p.raza, p.pelaje, p.hc,
p.estado, p.sexo, f.detalle, f.foto
FROM gatos p
LEFT JOIN gatos_fotos f ON p.id_gato = f.id_gato_foto
WHERE id_gato = ?
`;

const createFelino = `
INSERT INTO gatos
(ingreso, nombre, hc)
VALUES (?, ?, ?)
`;

const putFelinoById = `UPDATE gatos SET ? WHERE id_gato = ?`;

const getRazasFelinas = `
SELECT
id_raza, nombre
FROM gatos_razas
`;

const getEstadosFelinos = `
SELECT
id_estado, nombre
FROM gatos_estados
`;

const createFotoById = `
INSERT INTO gatos_fotos
(id_gato_foto, detalle, foto)
VALUES (?, ?, ?)
`;

const deleteFotoById = `
DELETE FROM gatos_fotos WHERE id_foto = ?
`;

const getFotosById = `
SELECT
id_foto, id_gato_foto, detalle, foto
FROM gatos_fotos
WHERE id_gato_foto = ?
`;

const getFelinoTratamientosById = `
SELECT 
vacunas, desparasitacion, tratamientos, observaciones
FROM gatos
WHERE id_gato = ?
`;

const putFelinoTratamientosById = `
UPDATE gatos SET ? WHERE id_gato = ?
`;

const getFelinoJudicializadoById = `
SELECT j.id_gato_judicial, j.fecha, j.causa, j.ufi,
j.garantias, j.juzgado, j.entrega, j.diligencias,
p.nombre, p.hc, p.ingreso
FROM gato_judicial j
INNER JOIN gatos p
ON j.id_gato_judicial = p.id_gato
WHERE j.id_gato_judicial = ?
`;

const getDenuncianteById = `
SELECT id_judicial_denunciante, nombre, apellido, dni, 
telefono, direccion, observaciones
FROM gatos_denunciantes
WHERE id_judicial_denunciante = ?
`;

const getImputadoById = `
SELECT id_judicial_imputado, nombre, apellido, dni,
telefono, direccion, observaciones
FROM gatos_imputados
WHERE id_judicial_imputado = ?
`;

const createRazaFelina = `
INSERT INTO gatos_razas
(nombre)
VALUES (?)
`;

export default {
	getAllFelinos,
	getFelinoById,
	createFelino,
	putFelinoById,
	getRazasFelinas,
	createRazaFelina,
	getEstadosFelinos,
	createFotoById,
	deleteFotoById,
	getFotosById,
	getFelinoTratamientosById,
	putFelinoTratamientosById,
	getFelinoJudicializadoById,
	getDenuncianteById,
	getImputadoById
};
