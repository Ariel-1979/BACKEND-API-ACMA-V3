const getAdoptantes = `
SELECT a.id, a.id_adoptante,  a.fecha, a.nombres, a.apellido, a.telefono, a.domicilio,
a.localidad, a.provincia, a.coordenadas, a.observaciones,
c.nombre, c.historia_clinica
FROM adoptante a
JOIN caballo c ON a.id_adoptante = c.id_caballo
ORDER BY a.id DESC
`;

const getAdoptanteById = `
SELECT id, id_adoptante, fecha, nombres, apellido, telefono, domicilio,
localidad, provincia, coordenadas, observaciones
FROM adoptante
WHERE id_adoptante = ?
`;

const createAdoptante = `
INSERT INTO adoptante  
(id_adoptante, fecha, nombres, apellido, telefono, domicilio,
localidad, provincia, coordenadas, observaciones)
  VALUES ?`;

const updateAdoptanteById = `
UPDATE adoptante
SET ?
WHERE id = ?
`;

const deleteAdoptanteById = `
DELETE FROM adoptante
WHERE id = ?
`;

export default {
	getAdoptantes,
	getAdoptanteById,
	createAdoptante,
	updateAdoptanteById,
	deleteAdoptanteById
};
