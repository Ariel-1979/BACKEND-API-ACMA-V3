const getAllCaninos = `
SELECT
id_perro, ingreso, nombre, raza, hc, estado, sexo
FROM perros
ORDER BY ingreso DESC
`;

const getCaninoById = `
SELECT
id_perro, ingreso, nombre, peso, edad, raza, pelaje, hc,
estado, castrado, judicializado
FROM perros
WHERE id_perro = ?
`;

export default { getAllCaninos, getCaninoById };
