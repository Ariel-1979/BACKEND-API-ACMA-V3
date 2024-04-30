const totalPeques = `
SELECT COUNT(*)
as totalPeques
FROM ??
`;

const pequesEstado = `
SELECT COUNT(*)
as pequesEstado
FROM ??
WHERE estado = ?
`;

const totalJudicializados = `
SELECT COUNT(*)
as totalJudicializados
FROM ??
`;

export default {
	totalPeques,
	pequesEstado,
	totalJudicializados
};
