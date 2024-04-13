const getSanidad = `
SELECT id, fecha, total, antiparasitario, aie, vacunas, observaciones
FROM ??
ORDER BY fecha DESC
`;

const createSanidad = `
INSERT INTO ?? SET ?
`;

const updateSanidad = `
UPDATE ?? SET ? WHERE id = ?
`;

const getSanidadById = `
SELECT fecha, total, antiparasitario, aie, vacunas, observaciones
FROM ??
WHERE id = ?
`;

export default {
	getSanidad,
	createSanidad,
	updateSanidad,
	getSanidadById
};
