const authenticatedUser = `
  SELECT  id_usuario, mail, nombre, apellido, rol, telefono 
  FROM usuarios
  WHERE mail = ? AND clave = ?;
  `;

export default {
	authenticatedUser
};
