const getAllUsers = `
SELECT id_usuario, nombre, apellido, mail, rol, telefono, observaciones, ts_create FROM usuarios
`;

const getUserById = `
SELECT 
id_usuario, nombre, apellido, mail, rol, telefono, observaciones, ts_create 
FROM usuarios 
WHERE id_usuario = ?
`;

const updateUser = `
UPDATE usuarios
SET  ?
WHERE id_usuario = ?
`;

export default { getAllUsers, getUserById, updateUser };
