const getAllHorses = `
SELECT
c.id_caballo, c.nombre, c.hc, c.chip, c.ingreso, c.peso, c.legajo, c.edad,
ca.nombre AS alojamiento, 
cs.nombre AS sexo, 
ce.nombre AS estado,
cp.nombre AS pelaje,
cr.nombre AS raza
FROM caballos c
INNER JOIN caballo_alojamiento ca ON c.alojamiento = ca.id_alojamiento
INNER JOIN caballo_sexo cs ON c.sexo = cs.id_sexo
INNER JOIN caballo_estado ce ON c.estado = ce.id_estado
INNER JOIN caballo_pelajes cp ON c.pelaje = cp.id_pelaje
INNER JOIN caballo_razas cr ON c.raza = cr.id_raza 
ORDER BY c.ingreso DESC
`;

const getHorseById = `
SELECT
c.id_caballo, c.nombre, c.hc, c.chip, c.ingreso, c.peso, c.edad, c.legajo, c.marcas,
ct.nombre AS tamanio,
ca.nombre AS alojamiento,
cs.nombre AS sexo,
ce.nombre AS estado,
cp.nombre AS pelaje,
cr.nombre AS raza
FROM caballos c
INNER JOIN caballo_alojamiento ca ON c.alojamiento = ca.id_alojamiento
INNER JOIN caballo_sexo cs ON c.sexo = cs.id_sexo
INNER JOIN caballo_estado ce ON c.estado = ce.id_estado
INNER JOIN caballo_pelajes cp ON c.pelaje = cp.id_pelaje
INNER JOIN caballo_razas cr ON c.raza = cr.id_raza 
INNER JOIN caballo_tamanio ct ON c.tamanio = ct.id_tamanio
WHERE c.id_caballo = ?
`;

export default { getAllHorses, getHorseById };
