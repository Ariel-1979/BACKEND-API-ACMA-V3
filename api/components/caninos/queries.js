const getAllCaninos = `
SELECT
id_perro, ingreso, nombre, raza, hc, estado, sexo
FROM perros
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
(ingreso, nombre, hc)
VALUES (?, ?, ?)
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
id_perro_foto, detalle, foto
FROM perros_fotos
WHERE id_perro_foto = ?
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
	getFotosById
};
