const getAllEquinos = `
SELECT id_caballo, nombre, historia_clinica, chip, peso, edad, raza, pelaje, lugar, ingreso, sexo, padrillo, tamanio, diario, habilitado, adoptado 
FROM caballo 
ORDER BY ingreso DESC
`;

const getEquinosByLugar = `
SELECT id_caballo, nombre, historia_clinica, chip, peso, edad, raza, pelaje, lugar, ingreso, sexo, padrillo, tamanio, diario, habilitado, adoptado
FROM caballo
WHERE lugar = ?
ORDER BY ingreso DESC

`;

const getEquinosByDiario = `
SELECT id_caballo, nombre, historia_clinica, chip, peso, edad, raza, pelaje, lugar, ingreso, sexo, padrillo, tamanio, diario,  habilitado, adoptado
FROM caballo
WHERE diario = ?
ORDER BY ingreso DESC

`;

const getEquinoById = `
SELECT c.id_caballo, c.nombre, c.historia_clinica, c.chip, c.peso, c.edad, c.raza, 
c.pelaje, c.lugar, c.ingreso, c.sexo, c.padrillo, 
c.tamanio, c.diario, c.habilitado, c.marcas, 
c.adoptado, f.detalle, f.foto
FROM caballo c
LEFT JOIN fotos f ON c.id_caballo = f.id_caballo_foto
WHERE c.id_caballo = ?;
`;

const getEquinosJudicializados = `
SELECT
  caballo.id_caballo,
  caballo.nombre,
  caballo.historia_clinica,
  caballo.chip,
  caballo.peso,
  caballo.edad,
  caballo.raza,
  caballo.pelaje,
  caballo.lugar,
  caballo.ingreso,
  caballo.sexo,
  caballo.padrillo,
  caballo.tamanio,
  caballo.diario,
  caballo.habilitado,
  caballo.adoptado
FROM caballo
INNER JOIN judicial ON caballo.id_caballo = judicial.id_caballo_judicial
WHERE lugar != 'Fallecido' 
ORDER BY caballo.ingreso DESC;
`;

const getEquinosNoJudicializados = `
SELECT
  caballo.id_caballo,
  caballo.nombre,
  caballo.historia_clinica,
  caballo.chip,
  caballo.peso,
  caballo.edad,
  caballo.raza,
  caballo.pelaje,
  caballo.lugar,
  caballo.ingreso,
  caballo.sexo,
  caballo.padrillo,
  caballo.tamanio,
  caballo.diario,
  caballo.habilitado,
  caballo.adoptado
FROM caballo
LEFT JOIN judicial ON caballo.id_caballo = judicial.id_caballo_judicial
WHERE judicial.id_caballo_judicial IS NULL AND diario != 'Fallecido'
ORDER BY caballo.ingreso DESC;
`;

const createEquino = `
INSERT INTO caballo
(ingreso, nombre, historia_clinica)
VALUES (?, ?, ?)
`;

const putEquinoById = `UPDATE caballo SET ? WHERE id_caballo = ?`;

const getFotosByIdCaballo = `
SELECT  c.nombre, f.detalle, f.foto, f.id_caballo_foto, f.id_fotos
FROM caballo c
LEFT JOIN fotos f ON c.id_caballo = f.id_caballo_foto
WHERE c.id_caballo = ?;
`;

const createFotoById = `
INSERT INTO fotos
(id_caballo_foto, detalle, foto)
VALUES (?, ?, ?)
`;

const deleteFotoById = `
DELETE FROM fotos WHERE id_fotos = ?
`;

const getTratamientosById = `
SELECT id_caballo, nombre, historia_clinica, informe, anamnesis, diagnostico, tratamiento, diario FROM caballo WHERE id_caballo = ? 
`;

const putTratamientoById = `
UPDATE caballo SET ? WHERE id_caballo = ?
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
	getAllEquinos,
	getEquinosByLugar,
	getEquinoById,
	getEquinosByDiario,
	getEquinosJudicializados,
	getEquinosNoJudicializados,
	createEquino,
	putEquinoById,
	getFotosByIdCaballo,
	createFotoById,
	deleteFotoById,
	getTratamientosById,
	putTratamientoById,
	getEquinosJudicializadoById,
	getDenuncianteById,
	getImputadoById
};
