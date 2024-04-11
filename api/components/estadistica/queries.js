const totalEquinosRescatados = `
SELECT COUNT(*) 
as totalEquinosRescatados 
FROM caballo`;

const totalEquinosKorn = `
SELECT COUNT(*)
as totalEquinosKorn
FROM caballo
WHERE lugar = 'Alejandro Korn'
`;

const totalEquinosEnTratamiento = `
SELECT COUNT(*)
as totalEquinosEnTratamiento
FROM caballo
WHERE diario = 'En tratamiento'
`;

const totalEquinosAdoptados = `
SELECT COUNT(*)
as totalEquinosAdoptados
FROM caballo
WHERE lugar = 'Adoptado'
`;

const totalEquinosFallecidos = `
SELECT COUNT(*)
as totalEquinosFallecidos
FROM caballo
WHERE lugar = 'Fallecido'
`;

const totalEquinosCastelli = `
SELECT COUNT(*)
as totalEquinosCastelli
FROM caballo
WHERE lugar = 'Castelli'
`;

const totalEquinosNoJudicializados = `
SELECT COUNT(*)
as totalEquinosNoJudicializados
FROM caballo
LEFT JOIN judicial ON caballo.id_caballo = judicial.id_caballo_judicial
WHERE judicial.id_caballo_judicial IS NULL AND diario != 'Fallecido'
`;

const totalEquinosJudicializados = `
SELECT COUNT(*)
as totalEquinosJudicializados
FROM caballo
INNER JOIN judicial ON caballo.id_caballo = judicial.id_caballo_judicial
WHERE lugar != 'Fallecido' 
`;

const totalEquinosRobados = `
SELECT COUNT(*)
as totalEquinosRobados
FROM caballo
WHERE lugar = 'Robado'
`;

export default {
	totalEquinosRescatados,
	totalEquinosKorn,
	totalEquinosEnTratamiento,
	totalEquinosAdoptados,
	totalEquinosFallecidos,
	totalEquinosCastelli,
	totalEquinosNoJudicializados,
	totalEquinosJudicializados,
	totalEquinosRobados
};
