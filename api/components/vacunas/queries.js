const getSanidad = `
SELECT fecha, total, antiparasitario, aie, vacunas, observaciones
FROM ??
ORDER BY fecha DESC
`;

const createSanidad = `
INSERT INTO ?? SET ?
`;
const updateSanidad = `
UPDATE ?? SET ? WHERE id = ?
`;
const deleteSanidad = `
DELETE FROM ?? WHERE id = ?
`;

export default {
	getSanidad,
	createSanidad,
	updateSanidad,
	deleteSanidad
};
